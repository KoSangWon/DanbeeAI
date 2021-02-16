import {gql} from "apollo-server-express";

export default gql`
    extend type Query {
        allBoardReviews(boardId: String!): [BoardReview!]
        myBoardReviews(boardId: String!): [BoardReview!]
    }

    extend type Mutation {
        registerBoardReview (
            text: String!
            boardId: String!
        ): Boolean!

        deleteBoardReview(
            boardReviewId: String!
        ): Boolean!
    }

    type BoardReview {
        id: ID!
        writer: User!
        boardId: String!
        text: String!
        createdAt: Date
        updatedAt: Date
    }

`;
