import {gql} from "apollo-server-express";

export default gql`
    scalar Date

    extend type Query {
        allBoards: [Board!]
        myBoards: [Board!]

        reviewCnt(boardId: String!): Int!
    }

    extend type Mutation {
        registerBoard (
            title: String!
            question: String!
            answer: String!
        ): Boolean!

        deleteBoard(
            boardId: String!
        ): Boolean!
    }

    type Board {
        id: ID!
        writer: User!
        title: String!
        question: String!
        answer: String!
        createdAt: Date
        updatedAt: Date
    }

`;
