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
    // author: { type: StringType },
    // date: { type: new NonNull(StringType) },
    // content: { type: StringType },
  },
});

export default PromoItemType;
