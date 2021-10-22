.PHONY: clean build js-core

build: .build js-core

js-core:
	cd ../js-core && $(MAKE)

.build: package.json Makefile
	npm install && rm -f .build && touch .build

clean: 
	rm -rf ./node_modules .build

