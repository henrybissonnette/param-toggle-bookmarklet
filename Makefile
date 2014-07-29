bookmarklet-build.js: Makefile node_modules
	touch ./bookmarklet-build-temp.js
	echo javascript: > ./bookmarklet-build-temp.js
	./node_modules/.bin/minify ./bookmarklet.js >> ./bookmarklet-build-temp.js
	echo "void 0;" >> ./bookmarklet-build-temp.js
	cat ./bookmarklet-build-temp.js | tr -d '\n' > ./bookmarklet-build.js
	rm ./bookmarklet-build-temp.js

node_modules: package.json
	npm install --registry=http://npm-registry.snc1
	touch node_modules