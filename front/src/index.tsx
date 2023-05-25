import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Continents from "./pages/Continents";
import Continent from "./pages/Continent";
import Country from "./pages/Country";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.nausicaa.wilders.dev/",
  cache: new InMemoryCache({ addTypename: false }),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "404", element: <div>N'existe pas</div> },
      {
        path: "continents",
        children: [
          {
            index: true,
            element: <Continents />,
          },
          {
            path: ":codecontinent",
            children: [
              {
                index: true,
                element: <Continent />,
              },
              {
                path: ":codecountry",
                element: <Country />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
