/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Navigation.css'
import Link from '../Link'

class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    menus: PropTypes.array,
    bridgeWidget: PropTypes.bool
  }

  render() {
    const menus = this.props.menus || ''

    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <ul>
          { menus.map((menu, index) => <li key={`menu-${index}`} className={s['nav-list']}><Link className={s.link} to={menu.to}>{menu.name}</Link></li>) }
        </ul>
      </div>
    )
  }
}

export default withStyles(s)(Navigation)
