import { useQuery } from "@apollo/client";
import { LIST_CONTINENTS } from "../graphql/queries/continents";
import { Link } from "react-router-dom";
function Continents() {
  const { data, loading } = useQuery(LIST_CONTINENTS, {
    onError(error) {
      alert("Il y a eu une erreur");
    },
  });

  if (loading) {
    return <div>Chargement en cours</div>;
  }
  return (
    <div>
      <h1>Liste des continents</h1>
      <ul>
        {data?.continents.map((continent: any) => (
          <li key={continent.code}>
            <Link to={`/continents/${continent.code}`}>{continent.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Continents;
