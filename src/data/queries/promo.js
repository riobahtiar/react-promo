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
import PromoItemType from '../types/PromoItemType';

// Tokopedia Promo Posts
const url = 'http://promo.stg.host/wp-json' +
// const url = 'https://www.tokopedia.com/promo/wp-json' +
            '/wp/v2/posts';
// const url = 'https://api.rss2json.com/v1/api.json' +
//             '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';

const items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const promo = {
  type: new List(PromoItemType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url)
        .then(response => response.json())
        .then((data) => data)
        .finally(() => {
          // lastFetchTask = null;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default promo;
