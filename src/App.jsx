import React from 'react';
import ReactDOM from 'react-dom';

// import Apollo Client libraries
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// import global styles
import GlobalStyle from './components/GlobalStyle';
// import routes
import Pages from './pages';

// configure our API URI & cache
const uri = 'http://localhost:4000/api';
const cache = new InMemoryCache();

// configure Apollo CLient
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
});

const App = () => {
  return (
    <ApolloProvider client={client}>
    <GlobalStyle />
    <Pages />
    </ApolloProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
