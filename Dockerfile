FROM node:18.17.1 as base
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
EXPOSE 3000
ENV NEXT_TELEMETRY_DISABLED 1

FROM base as builder
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN yarn run build

FROM base as development
ENV NODE_ENV=development
RUN yarn install
COPY . /app
CMD yarn run dev

FROM node:18.17.1 as base-mock
RUN mkdir -p /app
WORKDIR /app
EXPOSE 3001

FROM base-mock as mock
RUN npm install -g @mockoon/cli
COPY . /app
CMD mockoon-cli start --data ./mock-server.json --port 3001

FROM node:18.17.1 as base-storybook
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
EXPOSE 6006

FROM base-storybook as storybook
ENV GENERATE_SOURCEMAP=false
CMD yarn storybook
