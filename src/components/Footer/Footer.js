import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { appStore, socialMedia } from './FooterIcon'
import bs from 'bootstrap/dist/css/bootstrap.min.css'
import s from './Footer.css'
import Link from '../Link'

class Footer extends Component {
  render() {
    const date = new Date()

    return (
      <div className={s.root}>
        <div className={bs.container}>
          <div className={s.footerCopyright}>
            &copy; 2009-{date.getFullYear()}, PT Tokopedia
          </div>
          <div className={s.footerConnect}>
            <ul className={s.footerList}>
              { 
                appStore.map((item, index) =>
                  <li className={s.footerList__item} key={`item-${index}`}>
                    <Link to={item.link}>
                      <img className={s.footerConnect__image} src={item.src} alt={item.text} />
                    </Link>
                  </li>
                )
              }
            </ul>
            <ul className={s.footerList}>
              { 
                socialMedia.map((item, index) => 
                  <li className={s.footerList__item} key={`item-${index}`}>
                    <Link to={item.link}>
                      <img className={s.footerConnect__image} src={item.src} alt={item.text} />
                    </Link>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(bs, s)(Footer)
