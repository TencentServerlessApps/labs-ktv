.PHONY: clean build dev prod js-kernel

build: .build js-kernel

js-kernel:
	cd ../js-kernel && $(MAKE)

.build: package.json Makefile
	npm install && rm -f .build && touch .build

clean:
	rm -rf ./node_modules .build

prod: build
	sls deploy --stage prod

