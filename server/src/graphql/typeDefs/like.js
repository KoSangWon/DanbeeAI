import {gql} from "apollo-server-express";

export default gql`
    extend type Query {
        likes: [Like!]
        isLiked(classId: String!): Boolean!
    }

    extend type Mutation {
        registerLike(
            classId: String!
        ): Boolean!

        deleteLike(
            classId: String!
        ): Boolean!
    }

    type Like {
        owner: User!
        classInfo: ClassInfo!
    }

`;