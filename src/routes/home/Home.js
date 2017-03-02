/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import LazyLoad from 'react-lazyload';
import InfiniteScroll from 'react-infinite-scroller';
import s from './Home.css';

class Home extends React.Component {

  static propTypes = {
    promo: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
      kodepromo: PropTypes.string,
      bataspromo: PropTypes.string,
      linkpromo: PropTypes.string,
      mintransaksi: PropTypes.string,
      featured_media_id: PropTypes.string,
      featured_media_href: PropTypes.string,
    })).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      hasMoreItems: true,
      nextHref: null,
    };
  }

  // componentDidMount() {
  //   const self = this;

    // this.props.promo.map((item, index) => {
    //   fetch('/graphql', {
    //       method: 'post',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         query: '{media(id:'+item.featured_media_id+'){src}}',
    //       }),
    //       credentials: 'include',
    //     })
    //     .then(response => response.json())
    //     .then((data) => {
    //       self.setState({
    //         featured_img_url: data.src
    //       })
    //     })
    // })
  // }

  // loadItems(page) {
  //   const self = this;
  //   return page;
  // }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <ul className={s.news}>
            {this.props.promo.map((item, index) => (
              <li key={index} className={s.newsItem}>
                <a href={item.link} className={s.newsTitle}>{item.title}</a>
                <span
                  className={s.newsDesc}
                  dangerouslySetInnerHTML={{ __html: item.content.substring(0, 100) }}
                />
                <div>Kode: {item.kodepromo}</div>
                <div>Batas: {item.bataspromo}</div>
                <div>Link: {item.linkpromo}</div>
                <div>Min Transaksi: {item.min_transaksi}</div>
                <LazyLoad height={200} once >
                  <img
                    alt={item.featured_media_id}
                    className={s.imgPreload}
                    height={200} src={item.featured_media_href}
                  />
                </LazyLoad>
              </li>
            ))}
            <InfiniteScroll
              pageStart={0}
              // loadMore={this.loadItems.bind(this)}
              hasMore={true || false}
              loader={<div className="loader">Loading ...</div>}
            >
              <div className="tracks">
                  Placeholder
              </div>
            </InfiniteScroll>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
