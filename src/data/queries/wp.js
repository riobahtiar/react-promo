/**
 * Tokopedia Promo Posts
 *
 * by Kemal
 *
 * 
 * 
 */

import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import NewsItemType from '../types/NewsItemType';

// Tokopedia Promo Posts
const url = 'http://toped.rio.my.id/wp-json' +
            '/wp/v2/posts';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const news = {
  type: new List(NewsItemType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok') {
            items = data.items;
          }

          return items;
        })
        .finally(() => {
          lastFetchTask = null;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default news;
