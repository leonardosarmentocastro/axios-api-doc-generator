import React, { Component } from 'react';

import './styles.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='logo'>
          <p className='text'>API docs</p>
        </div>
        <div className='search-input'>
          <input className='input' type='text' placeholder='search for path, description ...'/>
          <i className='icon'/>
        </div>

        <div className='api-calls'>
          <div className='api-call'>
            {/* TODO: accordeon with "request-summary" */}
            <p className='request-summary'>[get] /hello-world</p>
            <div className='cases -color-green'>
              <p className='case -is-selected'>(200) must return an "message" on the body</p>
              <p className='case'>(200) must return an "potato" on the body</p>
            </div>
          </div>

          <div className='api-call'>
            <p className='request-summary'>[post] /users/sign-up</p>
            <div className='cases -color-red'>
              <p className='case -is-selected'>(500) must return an "error" object when receiving an empty "user"</p>
              <p className='case'>(500) must return an "error" object when receiving an empty "user.password"</p>
              <p className='case'>(500) must return an "error" object when receiving an empty "user.password" that is not strong enough</p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
