import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default () => {
  const [state, setState] = useState({
    loginView: true
  })

  const {loginView} = state

  const handleToggle = () => {
    setState({loginView: !loginView})
  }

  const submit = async (e) => {
    e.preventDefault()
    alert('')
  }

  console.log(state);

  return (
    <section className="blog-one" id="blog">
      <img src={require("../../../assets/images/shapes/blog-shape-1-1.png")} alt="" className="blog-one__shape-1"/>
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <p>Authenticate</p>
          <h3>Login or Signup Account</h3>

          <div className="row d-flex align-items-center justify-content-center pricing-one list-inline text-center switch-toggler-list" role="tablist" id="switch-toggle-tab">
            <p> Login </p>
              <label className={loginView ? 'switch on' : 'switch off'}>
                  <span onClick={handleToggle} className="slider round"></span>
              </label>
              <p> Signup </p>
          </div>

          <form className="contact-form-validated contact-one__form">
            <div className="row">
              {!loginView && <div className="col-md-6">
                <input type="text" name="name" placeholder="Name"/>
              </div>}
              <div className="col-md-6">
                <input type="text" name="email" placeholder="Email"/>
              </div>
              <div className="col-md-12">
                <input type="text" name="subject" placeholder="Password"/>
              </div>
              <div className="col-md-12">
                <button onClick={submit} className="thm-btn contact-one__form-btn">Signup
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
