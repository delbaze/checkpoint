import { gql } from "@apollo/client";

export const LIST_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`;

export const COUNTRIES_FROM_CONTINENTS = gql`
  query CountriesFromContinent($code: ID!) {
    continent(code: $code) {
      countries {
        name
        code
      }
      name
    }
  }
`;
