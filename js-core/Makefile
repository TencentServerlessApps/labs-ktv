.PHONY: clean build

build: .build

.build: package.json Makefile
	npm install && rm -f .build && touch .build

clean: 
	rm -rf ./node_modules .build

