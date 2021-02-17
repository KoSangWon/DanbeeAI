import {gql} from "apollo-server-express";

export default gql`
    extend type Query {
        infos: [Info]!
    }

    type Info {
        id: ID!
        title: String!
    }
`;