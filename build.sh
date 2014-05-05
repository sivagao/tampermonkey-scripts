cat manifest.js > dist-base.js
echo "\n" >> dist-base.js
cat engine.js >> dist-base.js
cat dependency/underscore.js dependency/jquery.min.js dependency/keymaster.js engine.js > dist-scripts.js
echo "\n" >> dist-scripts.js
cd sites; for each in *.js; do cat $each >> ../dist-scripts.js; echo "\n" >> ../dist-scripts.js; done