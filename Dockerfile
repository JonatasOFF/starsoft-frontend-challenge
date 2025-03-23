FROM node:20.14.0-alpine AS builder

WORKDIR /app


COPY package.json yarn.lock ./


RUN corepack enable && yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:20.14.0-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["yarn", "start"]
