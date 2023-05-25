import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { COUNTRIES_FROM_CONTINENTS } from "../graphql/queries/continents";
import { useEffect } from "react";

function Continent() {
  const { codecontinent: code } = useParams();
  const { data, loading, error } = useQuery(COUNTRIES_FROM_CONTINENTS, {
    variables: { code },
  });
  return (
    <div>
      {data?.continent !== null ? (
        <>
          <h1>{data?.continent.name}</h1>
          <ul>
            {data?.continent.countries.map((country: any) => (
              <li key={country.code}>
                <Link to={`/continents/${code}/${country.code}`}>
                  {country.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Navigate to={"/404"}/>
      )}
    </div>
  );
}

export default Continent;
