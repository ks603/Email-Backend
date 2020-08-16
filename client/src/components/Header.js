import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" style={{ paddingLeft: '30px' }}>
            Emaily
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="sass.html"
                style={{ paddingRight: '70px', paddingLeft: '60px' }}
              >
                Login With Google
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
