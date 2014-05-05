cat manifest.js dependency/underscore.js dependency/jquery.min.js dependency/uikit.js dependency/keymaster.js engine.js > dist-base.js
# cat sites/*.js
echo "" > dist-scripts.js
cd sites; for each in *.js; do cat $each >> ../dist-scripts.js; echo "\n" >> ../dist-scripts.js; done