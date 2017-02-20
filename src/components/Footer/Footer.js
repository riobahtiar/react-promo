/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    const date = new Date();

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.footerCopyright}>
            &copy; 2009-{date.getFullYear()}, PT Tokopedia
          </div>
          <div className={s.footerConnect}>
            <ul className={s.footerList}>
              <li className={s.footerList__item}>
                <Link to="https://itunes.apple.com/us/app/tokopedia/id1001394201?ls=1&mt=8">
                  <img className={s.footerConnect__image} src="https://ecs7.tokopedia.net/assets/images/store/appstore.png" alt="appstore" />
                </Link>
              </li>
              <li className={s.footerConnectList__item}>
                <Link to="https://play.google.com/store/apps/details?id=com.tokopedia.tkpd">
                  <img className={s.footerConnect__image} src="https://ecs7.tokopedia.net/assets/images/store/googleplay.png" alt="playstore" />
                </Link>
              </li>
            </ul>
            <ul className={s.footerConnectList}>
              <li className={s.footerConnectList__item}>
                <Link to="https://www.facebook.com/tokopedia">
                  <img className={s.footerConnect__image} src="https://ecs7.tokopedia.net/assets/images/social/facebook.png" alt="facebook" />
                </Link>
              </li>
              <li className={s.footerConnectList__item}>
                <Link to="http://instagram.com/tokopedia">
                  <img className={s.footerConnect__image} src="https://ecs7.tokopedia.net/assets/images/social/instagram.png" alt="instagram" />
                </Link>
              </li>
              <li className={s.footerConnectList__item}>
                <Link to="https://twitter.com/tokopedia">
                  <img className={s.footerConnect__image} src="https://ecs7.tokopedia.net/assets/images/social/twitter.png" alt="twitter" />
                </Link>
              </li>
              <li className={s.footerConnectList__item}>
                <Link to="https://www.youtube.com/user/tokopedia">
                  <img className={s.footerConnect__image} src="https://ecs7.tokopedia.net/assets/images/social/youtube.png" alt="youtube" />
                </Link>
              </li>
              <li className={s.footerConnectList__item}>
                <Link to="https://plus.google.com/+tokopedia/posts">
                  <img className={s.footerConnect__image} src="https://ecs7.tokopedia.net/assets/images/social/googleplus.png" alt="google_plus" />
                </Link>
              </li>
              <li className={s.footerConnectList__item}>
                <Link to="https://blog.tokopedia.com/">
                  <img className={s.footerConnect__image} src="https://ecs7.tokopedia.net/assets/images/social/blog.png" alt="blog_tokopedia" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
