import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://luffos.github.io/rxn-input`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  pathPrefix: "/rxn-input",
  plugins: [`gatsby-plugin-typescript`]
};

export default config;
