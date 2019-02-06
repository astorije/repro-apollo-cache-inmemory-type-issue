# Reproduction case for an `apollo-cache-inmemory` issue

This is a "minimal" reproduction repo to illustrate https://github.com/apollographql/apollo-client/issues/4417.

You have to imagine that `library` is its own npm package, but I am running it from source for convenience. In practice, I get the same outcome when importing code from an actual npm package.

Install dependencies for both the library and the app, then run the app:

```sh
cd library
yarn install
cd ../app
yarn install
yarn dev
```

You will get the following:

<img width="665" alt="screen shot 2019-02-06 at 3 42 00 pm" src="https://user-images.githubusercontent.com/113730/52372278-c217b180-2a25-11e9-8e9f-3eb40694bfc4.png">
