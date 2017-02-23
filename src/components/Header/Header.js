import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import bs from 'bootstrap/dist/css/bootstrap.min.css'
import s from './Header.css'
import Link from '../Link'
import Navigation from '../Navigation'

class Header extends React.Component {
  render() {
    const menus = [
      { name: 'About', to: '/about' },
      { name: 'Contact', to: '/contact' },
      { name: 'Log In', to: '/login' }
    ]

    return (
      <div className={s.root}>
        <div className={bs.container}>
          <Navigation className={s.nav} bridgeWidget={false} menus={menus} />
          <Link to="/">
            <img src='https://ecs7.tokopedia.net/promo/assets/images/promo_logo.png' className={s.logo} alt="Tokopedia" />
          </Link>
        </div>
      </div>
    )
  }
}

export default withStyles(bs, s)(Header)
