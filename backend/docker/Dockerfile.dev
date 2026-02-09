FROM node:25-slim

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8787
CMD ["npm", "run", "dev"]