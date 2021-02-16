import {gql} from "apollo-server-express";

export default gql`
    extend type Query {
        users: [User!]!
        profile: User
        refreshToken: Auth!
    }

    extend type Mutation {
        login(email: String!, password: String!): Auth!

        register(
            email: String!
            username: String!
            password: String!
        ): Auth!

        updateInfo(
            username: String!
        ): Boolean!

        leave(id: String!): Boolean!
    }

    type User {
        id: ID!
        username: String!
        email: String!
        point: Int!
        createdAt: String!
        updatedAt: String!
    }

    type Auth {
        user: User
        token: String!
        refreshToken: String!
    }
`;