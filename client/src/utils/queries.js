import { gql} from "@apollo/client";

export const GET_USER = gql`
    {
        users {
                _id
                email
                post
        }
    }
`;