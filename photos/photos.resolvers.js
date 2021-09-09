import client from "../client";

export default {
  Photo: {
    user: ({ userId }) =>
      client.user.findUnique({
        where: {
          id: userId,
        },
      }),
    hashtags: ({ id }) =>
      client.hashtag.findMany({
        where: {
          photos: {
            some: {
              id,
            },
          },
        },
      }),
    likes: ({ id }) =>
      client.like.count({
        where: {
          photoId: id,
        },
      }),
    comments: ({ id }) =>
      client.comment.count({
        where: {
          photoId: id,
        },
      }),
  },
  Hashtag: {
    photos: ({ id }, { page }) => {
      return client.hashtag
        .findUnique({
          where: {
            id,
          },
        })
        .Photos();
    },
    totalPhotos: ({ id }, _, { loggedInUser }) =>
      client.photo.count({
        where: {
          hashtags: {
            some: {
              id,
            },
          },
        },
      }),
  },
};
