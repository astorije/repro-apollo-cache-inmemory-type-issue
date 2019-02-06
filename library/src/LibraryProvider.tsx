import React, { FunctionComponent, ReactNode } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const authClient = new ApolloClient({
  link: new HttpLink({ uri: "https://example.com" }),
  cache: new InMemoryCache()
});

interface Props {
  children: ReactNode;
}

export const LibraryProvider: FunctionComponent<Props> = ({
  children
}: Props) => <ApolloProvider client={authClient}>{children}</ApolloProvider>;
