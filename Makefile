.include <name.ini>

SERVICE != echo ${app_name}front
REGGAE_PATH :=/usr/local/share/reggae


build: up
	@bin/build.sh

publish: build
	@rsync -P -av --delete-after build/ chubby:/usr/cbsd/jails-data/nginx-data/usr/local/www/med/

.include <${REGGAE_PATH}/mk/service.mk>
