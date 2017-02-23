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
    title: { type: new NonNull(StringType) },
    link: { type: new NonNull(StringType) },
    author: { type: StringType },
    pubDate: { type: new NonNull(StringType) },
    content: { type: StringType },
  },
});

export default PromoItemType;
