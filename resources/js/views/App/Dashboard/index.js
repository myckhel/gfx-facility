import React from 'react'
import {Button, Col} from 'antd'
import {useLogout} from '../../../redux/hooks'

export default () => {
  const logout = useLogout()

  return (
    <Col>
      <h1>WELCOME</h1>
      <Button onClick={() => logout()}>Logout</Button>
    </Col>
  )
}
