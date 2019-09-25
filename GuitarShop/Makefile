IMG_VERSION:=1.1-beta
DB_VOLUME_NAME:=guitar_shop_db-volume

create-network:
	docker network create guitar_shop || exit 0

create-volume:
	docker volume create $(DB_VOLUME_NAME)_$(IMG_VERSION)

build-database:
	docker build \
		-t guitar_shop_db/base:$(IMG_VERSION) \
		-f guitar_shop_db.dockerfile \
		./guitar_shop_db

stop-database:
	docker stop guitar_shop_db || exit 0
	docker rm -f guitar_shop_db || exit 0

run-database-it: stop-database create-volume
	docker run -it \
		--network guitar_shop \
		--name guitar_shop_db \
		-p 3306:3306 \
		-v $(DB_VOLUME_NAME)_$(IMG_VERSION):/var/lib/mysql \
		guitar_shop_db/base:$(IMG_VERSION)

run-database: stop-database create-volume
	docker run -d \
		--network guitar_shop \
		--name guitar_shop_db \
		-p 3306:3306 \
		-v $(DB_VOLUME_NAME)_$(IMG_VERSION):/var/lib/mysql \
		guitar_shop_db/base:$(IMG_VERSION)

run-seed:
	docker exec -it guitar_shop_db bash guitar_shop_db.sh

build-api:
	docker build \
		-t guitar_shop_api/base:$(IMG_VERSION) \
		-f guitar_shop_api.dockerfile \
		./guitar_shop_api

stop-api:
	docker stop guitar_shop_api || exit 0
	docker rm -f guitar_shop_api || exit 0

run-api-it: stop-api
	docker run -it \
		--network guitar_shop \
		--name guitar_shop_api \
		-p 8081:80 \
		guitar_shop_api/base:$(IMG_VERSION)

run-api: stop-api
	docker run -d \
		--network guitar_shop \
		--name guitar_shop_api \
		-p 8081:80 \
		guitar_shop_api/base:$(IMG_VERSION)

stop: stop-database stop-api
run: run-database run-api
build: create-network build-database build-api
