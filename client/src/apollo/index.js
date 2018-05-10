import React from "react"
import { ApolloProvider } from "react-apollo"
import { ApolloLink } from "apollo-link"
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { withClientState } from "apollo-link-state"
import TodoApp from "./TodoApp"

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    withClientState({
      cache,
      // Add your client state here
    }),
    new HttpLink({ uri: "http://localhost:8080/graphql/" }),
  ]),
})

const ApolloTodoApp = props => {
  return (
    <ApolloProvider client={client}>
      <TodoApp />
    </ApolloProvider>
  )
}

export default ApolloTodoApp
