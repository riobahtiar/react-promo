/**
 * Tokopedia Promo Posts
 *
 * by Kemal
 *
 *
 *
 */
import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import fetch from '../../core/fetch';

const mediaUrl = 'http://promo.stg.host/wp-json' +
                 '/wp/v2/media';

const PromoItemType = new ObjectType({
  name: 'PromoItem',
  fields: {
    title: {
      type: StringType,
      resolve(obj) {
        return obj.title.rendered;
      },
    },
    link: { type: new NonNull(StringType) },
    content: {
      type: StringType,
      resolve(obj) {
        // escape html from this string: obj.content.rendered
        return obj.content.rendered.replace(/<\/?[^>]+(>|$)/g, '');
      },
    },
    kodepromo: {
      type: StringType,
      resolve(obj) {
        return obj.meta.kodepromo;
      },
    },
    bataspromo: {
      type: StringType,
      resolve(obj) {
        return obj.meta.bataspromo;
      },
    },
    linkpromo: {
      type: StringType,
      resolve(obj) {
        return obj.meta.linkpromo;
      },
    },
    min_transaksi: {
      type: StringType,
      resolve(obj) {
        return obj.meta.min_transaksi;
      },
    },
    featured_media_id: {
      type: StringType,
      resolve(obj) {
        return obj.featured_media;
      },
    },
    featured_media_href: {
      type: StringType,
      resolve(obj) {
        return fetch(`${mediaUrl}/${obj.featured_media}`)
          .then(response => response.json())
          .then((data) => {
            if (data.guid) {
              return data.guid.rendered;
            }
            // TODO: add broken image placeholder
            return '';
          });
        // return obj._links["wp:featuredmedia"][0].href;
      },
    },
    // author: { type: StringType },
    // date: { type: new NonNull(StringType) },
    // content: { type: StringType },
  },
});

export default PromoItemType;
