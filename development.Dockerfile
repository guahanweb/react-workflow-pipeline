FROM node:18-bullseye as builder
ARG PACKAGE
ARG WORKSPACE
WORKDIR /app
COPY package.json ./
COPY apps apps
RUN npm i -w ${WORKSPACE} --ignore-scripts
WORKDIR /app/packages/${PACKAGE}
CMD ["npm", "run", "dev"]
