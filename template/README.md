# {{projectName}}

## Build Setup

``` bash
# Install dependencies
npm install

# Start in development mode with REPL
npm run dev
{{#jest}}

# Run unit tests
npm test

# Run in continuous test mode
npm run ci
{{/jest}}
{{#lint}}

# Run ESLint
npm run lint
{{/lint}}
```