# fakers

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> fake data in the browser and node.js

## Installation

```shell
$ yarn add fakers

# or npm
$ npm install fakers
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const fakers = require('fakers')
const result = fakers('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### fakers(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

<!-- TODO: Introduction of CLI -->

```shell
$ yarn global add fakers

# or npm
$ npm install fakers -g
```

```shell
$ fakers --help

  Usage: fakers <input>

  Options:

    -V, --version  output the version number
    -H, --host     Email host
    -h, --help     output usage information
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me)



[travis-image]: https://img.shields.io/travis/zce/fakers/master.svg
[travis-url]: https://travis-ci.org/zce/fakers
[codecov-image]: https://img.shields.io/codecov/c/github/zce/fakers/master.svg
[codecov-url]: https://codecov.io/gh/zce/fakers
[downloads-image]: https://img.shields.io/npm/dm/fakers.svg
[downloads-url]: https://npmjs.org/package/fakers
[version-image]: https://img.shields.io/npm/v/fakers.svg
[version-url]: https://npmjs.org/package/fakers
[license-image]: https://img.shields.io/github/license/zce/fakers.svg
[license-url]: https://github.com/zce/fakers/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/fakers.svg
[dependency-url]: https://david-dm.org/zce/fakers
[devdependency-image]: https://img.shields.io/david/dev/zce/fakers.svg
[devdependency-url]: https://david-dm.org/zce/fakers?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
