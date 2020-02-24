FROM node:12-alpine as builder

WORKDIR /usr/app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

FROM nginx:1.16-alpine

COPY --from=builder /usr/app/build /usr/share/nginx/html
