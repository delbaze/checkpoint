import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { COUNTRY } from "../graphql/queries/country";
function Country() {
  const { codecountry: code } = useParams();
  const { data, loading } = useQuery(COUNTRY, { variables: { code } });

  if (loading) {
    return <div>Chargement en cours</div>;
  }
  return (
    <div>
      {data?.country ? (
        <>
          <h1>{data?.country.name}</h1>
          <ul>
            {Object.keys(data?.country).map((k) => (
              <li key={k}>
                {k} : {data.country[k]}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Navigate to="/404" />
      )}
    </div>
  );
}

export default Country;
