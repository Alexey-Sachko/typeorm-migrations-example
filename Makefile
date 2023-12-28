# Makefile for running migration-generate

name ?= bash

.PHONY: migration-generate

migration-generate:
	docker-compose down -v db
	docker-compose up -d db
	yarn build
	yarn migration:run
	yarn migration:generate src/migration/$(name)