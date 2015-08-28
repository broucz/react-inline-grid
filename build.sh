#!/bin/sh

cd node_modules

rm -rf lodash-cli lodash

# Clone lodash-cli
git clone --depth 1 https://github.com/lodash/lodash-cli
cd lodash-cli && mkdir node_modules && cd node_modules

# Clone lodash
git clone --depth 1 https://github.com/lodash/lodash
cd .. && npm i && cd ..

# Build
node lodash-cli/bin/lodash modularize exports=node -o ./lodash && node lodash-cli/bin/lodash -d -o ./lodash/index.js

# Add package.json w/ 4.0.0
cd lodash
echo {\"name\":\"lodash\", \"version\":\"4.0.0\"} > package.json

# Build lib
cd ../..
npm run clean && npm run build

exit
