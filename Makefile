.PHONY: all clean dev prod help

TARGETS = $(shell ls -d */|grep -v -e postman -e mysql -e apigw -e vpc)

all:
	#cd hello && $(MAKE)
	@for TARGET in $(TARGETS); do \
		(echo "Build $$TARGET" && cd $$TARGET && $(MAKE)) \
	done

clean:
	#cd hello && $(MAKE) clean
	@for TARGET in $(TARGETS); do \
		(echo "Build $$TARGET" && cd $$TARGET && $(MAKE) clean) \
	done

prod:
	#cd hello && $(MAKE) prod
	@for TARGET in $(TARGETS); do \
		(echo "Build $$TARGET" && cd $$TARGET && $(MAKE) prod) \
	done

help:
	@echo 'Usage: make [all|clean|dev|prod|remove]'
	@echo 'Options:'
	@echo '    all        Default]Build all apps'
	@echo '    clean      Cleanup all apps'
	@echo '    dev        Build all apps and deploy to dev environment'
	@echo '    prod       Build all apps and deploy to prod environment'
