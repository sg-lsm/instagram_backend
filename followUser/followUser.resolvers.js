import client from "../client";
import { protectedResolver } from "../users/users.utils";

export default {
  Mutation: {
    followUser: protectedResolver(async (_, { username }, { loggedInUser }) => {
      const ok = await client.user.findUnique({
        where: { username },
      });
      if(!ok){
          return{
              ok:false,
              error:"That user not exist."
          }
      }
      await client.user.update({
        where: {
          id: loggedInUser.id,
        },
        data: {
          following: {
            connect: {
              username,
            },
          },
        },
      });
      return {
        ok: true,
      };
    }),
  },
};
