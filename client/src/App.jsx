import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./pages/AllRoutes";
import Auth from "./components/Auth";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <BrowserRouter>
          <Provider store={store}>
            <Auth>
              <AllRoutes />
            </Auth>
          </Provider>
        </BrowserRouter>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
