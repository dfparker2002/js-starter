# JS Starter Project
Starter project for JS based apps/sites.
## Getting started
1. `git clone https://vie.git.bwinparty.com/cms-site-development/js-starter-project.git`
2. `npm install`

## Scripts
- `npm run build` - Runs webpack build (with eslint as a prestart process)
- `npm run build-doc` - Creates JSDocs
- `npm run test` - Runs mocha tests

## Development
- Webpack
    - Babel loader
        - React 
        - ES2015
  - ESLint preloader

## Documentation
I'm using the documentation.js (http://documentation.js.org) module, which follows the JSDoc syntax.

- Annotations can be found on http://usejsdoc.org.

## Testing
This is set up for mocha (https://mochajs.org), which allows for various 
assertion libraries. 

Michael Jackson's expect.js module & the Node.js assert 
module will be installed when running `npm install`.

- Expect.js documentation: https://github.com/mjackson/expect
- Assert documentation: https://nodejs.org/api/assert.html
