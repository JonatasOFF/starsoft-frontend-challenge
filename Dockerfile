FROM node:20.14.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN corepack enable && corepack prepare yarn@1.22.19 --activate
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
