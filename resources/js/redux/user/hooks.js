import React, {useState, useEffect} from 'react'

import {user as userAsync, users as usersAsync, removeImage as removeImageAsync, verify as verifyAsync, suspend as suspendAsync, remove as deleteAsync, statsCount, analysis} from '../../func/async/user'
import { Notify } from '../../func'
import _ from 'lodash'
import {useHistory} from 'react-router-dom'

export const useUsers = () => {
  const [state, setState] = useMergeState({
    users: [], loading: false,
  })
  const {users, loading} = state

  useEffect(() => {
    init()
  }, [])

  const init = async (params={}) => {
    try {
      setState({loading: true})
      const {data, ...rest} = await usersAsync({pageSize: 100, ...params})
      setState({users: data, ...rest})
    } catch (e) {} finally {
      setState({loading: false})
    }
  }

  return {...state, init}
}

export const useUser = (id) => {
  const {push, goBack} = useHistory()
  const [state, setState] = useMergeState({
    user: {}, loading: true,
  })
  const {user, loading} = state

  useEffect(() => {
    if (!id) {
      push('/404')
    } else {
      getUser()
    }
  }, [])


  const getUser = async () => {
    try {
      const user = await userAsync(id)
      setState({user})
    } catch (e) {
      console.log({e});
    } finally {
      setState({loading: false})
    }
  }

  const remove = async () => {
    const confirmed  = confirm('Are You Sure You Want To Delete '+user?.name)
    if (confirmed) {
      try {
        setState({loading: 'delete'})
        const {status} = await deleteAsync(id)
        goBack('/')
        Notify({type: 'success', msg: `User Deleted` })
      } catch (e) {
        console.log({e});
      } finally {
        setState({loading: false})
      }
    }
  }

  const verify = async (verify) => {
    try {
      setState({loading: 'verify'})
      const {user_verfication} = await verifyAsync(id, verify)
      update({user_verfication})
      Notify({type: 'success', msg: `User ${verify ? 'Verified' : 'Unverified'}` })
    } catch (e) {} finally {
      setState({loading: false})
    }
  }

  const suspend = async (suspension) => {
    try {
      setState({loading: 'suspend'})
      const {suspend_time} = await suspendAsync(id, suspension)
      update({suspend_time})
      Notify({type: 'success', msg: `User ${suspend_time ? 'Suspend' : 'Unsuspended'}` })
    } catch (e) {} finally {
      setState({loading: false})
    }
  }

  const removeImage = async ({index='', type}) => {
    try {
      setState({loading: `${type}${index}`})
      const {index: ind} = await removeImageAsync(id, {index, type})
      if (type === 'images') {
        const images = user?.images?.images?.filter((_, i) => i !== ind ) || []
        update({images: {avatar: user?.images.avatar, images}})
      } else {
        update({images: {avatar: null, images: user?.images?.images}})
      }
      Notify({type: 'success', msg: `Image ${'Deleted'}` })
    } catch (e) {} finally {
      setState({loading: false})
    }
  }

  const update = (updates={}) => {
    _.forOwn(updates, (value, key) => {
      user[key] = value
    })
    setState({user})
  }

  return {...state, getUser, remove, verify, suspend, removeImage}
}

export const useStatsCount = () => {
  const [state, setState] = useMergeState({
    today: 0, week: 0, count: 0, month: 0,
    loading: false,
  })
  const {today, week, count, month, loading} = state

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    try {
      setState({loading: true})
      const {today, week, count, month} = await statsCount()
      setState({today, week, count, month})
    } catch (e) {
      console.log({e});
    } finally {
      setState({loading: false})
    }
  }

  return {today, week, count, month, loading}
}

export const useAnalysis = () => {
  const [state, setState] = useMergeState({
    hours: [], weeks: [], months: [], days: [],
    loading: false,
  })
  const {weeks, months, days, hours, loading} = state

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    try {
      setState({loading: true})
      const {weeks, months, days, hours} = await analysis()
      setState({weeks, months, days, hours})
    } catch (e) {
      console.log({e});
    } finally {
      setState({loading: false})
    }
  }

  return {weeks, months, days, hours, loading}
}

export const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState);

  const setMergedState = newState =>
    setState(prevState => Object.assign({}, prevState, newState)
  );
  return [state, setMergedState];
}
