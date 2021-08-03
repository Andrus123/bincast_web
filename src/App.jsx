import React from "react";
import ReactDOM from "react-dom";

// import Apollo Client libraries
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// import global styles
import GlobalStyle from "./components/GlobalStyle";
// import routes
import Pages from "./pages";

const App = () => {
  return (
    <div>
    <GlobalStyle />
    <Pages />
    </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
