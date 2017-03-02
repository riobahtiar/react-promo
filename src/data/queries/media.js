/**
 * Tokopedia Promo Media
 *
 * by Kemal
 *
 *
 *
 */

import {
  GraphQLList as List,
  GraphQLInt as IntType,
} from 'graphql';
import fetch from '../../core/fetch';
import MediaItemType from '../types/MediaItemType';

// Tokopedia Promo Media

// const url = 'https://www.tokopedia.com/promo/wp-json' +
const url = 'http://promo.stg.host/wp-json' +
            '/wp/v2/media';

const media = {
  type: new List(MediaItemType),
  args: {
    id: { type: IntType },
  },
  resolve(obj, args) {
    return fetch(url)
      .then(response => response.json())
      .then((data) => {
        if (args.id) {
          return data.filter((val) => val.id === args.id);
        }
        return data;
      });
  },
};

export default media;
