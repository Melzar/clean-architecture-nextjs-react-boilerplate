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
