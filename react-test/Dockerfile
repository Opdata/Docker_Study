FROM node:alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY ./ ./

RUN npm run build

FROM nginx

# /usr/share/nginx/html nginx root directory path
COPY --from=builder /usr/src/app/build /usr/share/nginx/html