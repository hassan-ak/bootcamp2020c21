import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import User from './User';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        Hello world
        <User></User>
      </div>
    </ApolloProvider>
  );
}

export default App;
