import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default () => {
  const [state, setState] = useState({
    month: true,
    year: false
  })

  const {month, year} = state

  const handleToggle = () => {
      const month = month;
      const year = year;

      if(month){
          setState({year: true, month: false})
      }
      if(year){
          setState({year: false, month: true})
      }
  }

  console.log(state);

  return (
    <section className="blog-one blog-one__home" id="blog">
      <img src={require("../../../assets/images/shapes/blog-shape-1-1.png")} alt="" className="blog-one__shape-1"/>
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <p>Authenticate</p>
          <h3>Login or Signup Account</h3>

          <ul className="pricing-one list-inline text-center switch-toggler-list" role="tablist" id="switch-toggle-tab">
              <li className={month ? 'month active' : 'month'}><a href="#">Login</a></li>
              <li>
                  <label className={year ? 'switch off' : 'switch on'}>
                      <span onClick={handleToggle} className="slider round"></span>
                  </label>
              </li>
              <li className={year ? 'year active' : 'year'}><a href="#">Signup</a></li>
          </ul>

          <form action="" className="contact-form-validated contact-one__form">
              <div className="row">
                  <div className="col-md-6">
                      <input type="text" name="name" placeholder="Name"/>
                  </div>
                  <div className="col-md-6">
                      <input type="text" name="email" placeholder="Email"/>
                  </div>
                  <div className="col-md-12">
                      <input type="text" name="subject" placeholder="Password"/>
                  </div>
                  <div className="col-md-12">
                      <button type="submit"
                              className="thm-btn contact-one__form-btn">Signup
                      </button>
                  </div>
              </div>
          </form>
        </div>
      </div>
    </section>
  )
}
