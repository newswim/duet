# ![duet](http://i.imgsafe.org/49dc89c263.png)

[![Build Status](https://travis-ci.org/pnn/duet.svg?branch=master)](https://travis-ci.org/pnn/duet) [![codecov](https://codecov.io/gh/pnn/duet/branch/master/graph/badge.svg)](https://codecov.io/gh/pnn/duet)

Duet is a tool to discover issues meant for newcomers to your project,
or to open-source in general. It compiles to static HTML, so you can host it
anywhere.

## Installation

You will need Node.js LTS 6 or newer.

```sh
git clone https://github.com/pnn/duet && cd duet
npm install
```

## Configuration

Add your own repos in `repos.json`. It might look something like this:

```json
[
  {
    "path": "github/linguist",
    "description": "linguist is a tool for programming language detection"
  },
  {
    "path": "github/hub",
    "description": "hub helps you win at git"
  }
]
```

The reason that there's a separate description field when you could just fetch
the description from the GitHub API is that sometimes, the GitHub description
is held concise and short, which has the effect that newcomers sometimes don't
understand the project's purpose.

## Compilation and Hosting

To build a production-ready bundle:

```sh
npm run build
```

This will compile everything, from JS to dependencies to CSS. The resulting
bundle is written to the `public/` directory, at which point said directory
can be served from a web server.

## Development

If you want to work on Duet itself, there are a couple of scripts that make
working on it easier:

```sh
npm start # start a development server and watch for changes
npm test # run lints and tests
npm run jest:watch # use the jest watcher
```

## License

See `LICENSE.md`.
