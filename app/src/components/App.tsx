import React from "react";
import { NormalizedCacheObject } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloConsumer } from "react-apollo";

import { LibraryProvider } from "../../../library";

export class App extends React.Component {
  foobar = (client: ApolloClient<NormalizedCacheObject>) => {
    console.log(client);
  };

  render() {
    return (
      <LibraryProvider>
        <ApolloConsumer>
          {client => <a onClick={() => this.foobar(client)}>Hi there</a>}
        </ApolloConsumer>
      </LibraryProvider>
    );
  }
}
