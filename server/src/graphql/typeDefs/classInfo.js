import {gql} from "apollo-server-express";

export default gql`
    extend type Query {
        classes: [ClassInfo]!
    }

    type ClassInfo {
        id: ID!
        professor: String!
        class: String!
        url: String!
    }
`;