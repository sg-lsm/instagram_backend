import { GraphQLUpload } from "graphql-upload";

export const resolvers = {
  Upload: GraphQLUpload,

  Mutation: {
    singleUpload: async (parent, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      
      const stream = createReadStream();

      const out = require("fs").createWriteStream("local-file-output.txt");
      stream.pipe(out);
      await finished(out);

      return { filename, mimetype, encoding };
    },
  },
};
