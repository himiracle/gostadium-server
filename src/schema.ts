// import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes = fileLoader(
  path.join(__dirname, "./api/**/*.graphql"), { recursive: true }
);
const allResolvers = fileLoader(
  path.join(__dirname, "./api/**/*.resolvers.*"), { recursive: true }
);

const mergeTypesAll = mergeTypes(allTypes, {all: true});
const mergeResolversAll = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
    typeDefs: mergeTypesAll,
    resolvers: mergeResolversAll
});

export default schema;