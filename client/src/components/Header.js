import React, { Component } from 'react'
import { connect } from 'react-redux'
import { link } from 'fs'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        )
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        )
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a style={{ paddingLeft: '10px' }} className="brand-logo left">
            Emaily
          </a>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
