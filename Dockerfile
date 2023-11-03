FROM node:18.17.1 as base
WORKDIR /src/app
COPY package.json ./
EXPOSE 3000
ENV NEXT_TELEMETRY_DISABLED 1

FROM base as builder
WORKDIR /src/app
COPY . .
RUN yarn run build

FROM base as development
ENV NODE_ENV=development
RUN yarn install
COPY . .
CMD yarn run dev

FROM node:18.17.1 as base-mock
WORKDIR /
EXPOSE 3001

FROM base-mock as mock
RUN npm install -g @mockoon/cli
COPY . .
CMD mockoon-cli start --data ./mock-server.json --port 3001
