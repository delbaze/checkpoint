import { gql } from "@apollo/client";
export const COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      emoji
    }
  }
`;
