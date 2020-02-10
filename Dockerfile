# stage 1 building the code
FROM node:latest as builder

WORKDIR /usr/src/app

ARG APP_VERSION
ARG APP_API
ARG APP_API_SERVER

ARG APP_GOOGLE_TAG_KEY

ENV APP_VERSION $APP_VERSION
ENV APP_API $APP_API
ENV APP_API_SERVER $APP_API_SERVER

ENV APP_GOOGLE_TAG_KEY $APP_GOOGLE_TAG_KEY

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

RUN yarn install --production


# stage 2
FROM node:alpine as production

LABEL maintainer="Nghiep <me@nghiepit.dev>"

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package.json yarn.lock next.config.js .env* ./
COPY ./public ./public

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next ./.next

EXPOSE 3000

ENTRYPOINT yarn start
