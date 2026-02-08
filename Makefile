DOCKER_COMPOSE_FILE = docker-compose.local.yml
DOCKER_COMPOSE_CMD = docker compose

urls:
	echo "Local: http://localhost:3000"
	echo "API: http://localhost:8787"

up:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} up -d
	make urls

down:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} down

logs:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} logs -f
	
clear:
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} down -v --rmi all


re: clear up