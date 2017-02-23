/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

  path: '/',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{promo{title,link,content},news{title,link,content}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    console.log({data});
    //console.log({data.news});
    //if (!data || !data.news) throw new Error('Failed to load the news feed.');
    return {
      title: 'Promo',
      component: <Layout><Home news={data.news} /></Layout>,
    };
  },

};
