import { gql } from "apollo-server";

const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    "Get tracks array to display on the homepage tracks grid"
    tracksForHome: [Track!]!
  }
`;

module.exports = typeDefs;
