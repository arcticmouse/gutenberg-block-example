# gutenberg-block-example
via https://css-tricks.com/learning-gutenberg-7-building-our-block-custom-card-block/

other good tutorial: http://jschof.com/gutenberg-blocks/wordpress-gutenberg-blocks-example-creating-a-hero-image-block-with-inspector-controls-color-palette-and-media-upload-part-1/

cd ../../../../../Applications/MAMP/htdocs/brandv2wp5/wp-content/plugins

ls

mkdir card-block

cd card-block/

touch card-block.php

npm init

npm install webpack --save-dev

npm install extract-text-webpack-plugin@next --save-dev

npm install node-sass sass-loader css-loader --save-dev

npm install npx -g

npm install webpack-cli --save-dev

touch webpack.config.js

npm install @babel/core babel-loader babel-plugin-add-module-exports babel-plugin-transform-react-jsx @babel/preset-env --save-dev

touch .babelrc

mkdir blocks

cd blocks

mkdir src

mkdir dist

cd src

touch blocks.js

touch common.scss

mkdir block

cd block

touch block.js

touch editor.scss

touch style.scss

cd ../..

cd ..

ls

npx webpack

npx webpack --watch
