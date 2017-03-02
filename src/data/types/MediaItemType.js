/**
 * Tokopedia Promo Featured Image
 *
 * by Kemal
 *
 *
 *
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from 'graphql';

const MediaItemType = new ObjectType({
  name: 'MediaItem',
  fields: {
    id: {
      type: IntType,
    },
    src: {
      type: StringType,
      resolve(obj) {
        return obj.guid.rendered;
      },
    },
    // author: { type: StringType },
    // date: { type: new NonNull(StringType) },
    // content: { type: StringType },
  },
});

export default MediaItemType;
