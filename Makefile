# remove needless output
MAKEFLAGS += --no-print-directory

DOCKER_COMPOSE_FILE = docker-compose.local.yml
DOCKER_COMPOSE_CMD = docker compose

s ?=

.PHONY: urls up down logs clear re migrate studio

urls:
	@echo "Local: http://localhost:3000"
	@echo "API: http://localhost:8787"
	@echo "Prisma Studio: http://localhost:5555"

up:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} up -d $(s)
	@make preview
	@make urls

down:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} down $(s)

logs:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} logs -f $(s)

restart:
	@make down s="$(s)"
	@make build s="$(s)"

build:
	@make down s="$(s)"
	$(DOCKER_COMPOSE_CMD) -f ${DOCKER_COMPOSE_FILE} up -d --build $(s)
	
clear:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} down -v --rmi all

migrate:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} exec backend npx prisma migrate dev
	@make generate

generate:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} exec backend npx prisma generate

seed:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} exec backend npx prisma db seed

preview:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} exec -d backend npx prisma studio --port 5555 --browser none

re: clear up migrate