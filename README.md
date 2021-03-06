# Tools and libraries for Scripture app

This repository contains libraries and tools that are used either as dependencies or tools for working with bible-reader's Bible data.

## Packages

- [bible-converter](https://github.com/bible-reader/tools/tree/master/packages/bible-converter) is a library that converts several different Bible formats to JSON fragments
- [common](https://github.com/bible-reader/tools/tree/master/packages/common) contains mostly data that are shared across multiple other packages and applications
- [passage-parser](https://github.com/bible-reader/tools/tree/master/packages/passage-parser) parses Bible passage string to an object
- [reading-plan-validator](https://github.com/bible-reader/tools/tree/master/packages/reading-plan-validator) is a tool that validates if a sequence of Bible passages is continuous and other criteria
- [v11n-utils](https://github.com/bible-reader/tools/tree/master/packages/v11n-utils) is a library that provides functions to validate and get Bible references for a given versification (i.e. system of books, chapters and verses in a particular Bible version; v11n in short)
- [types](https://github.com/bible-reader/tools/tree/master/packages/types) defines common types for Bible data used across all bible-reader libraries and applications

## For developers

Packages are written in TypeScript. This [boilerplate](https://github.com/Quramy/lerna-yarn-workspaces-example) was used to bootstrap TypeScript configuration within Lerna + yarn workspaces context.

[Lerna](https://lernajs.io) and [yarn workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) are used to manage this monorepo.

## License

MIT
