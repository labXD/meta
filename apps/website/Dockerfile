# Building image
# docker build . -t example-image-name

# Install dependencies only when needed
# FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# Copy root configs
# COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# Copy website
# COPY apps/website apps/website
# RUN pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
RUN corepack enable
ENV CI true

WORKDIR /app

# Copy root configs
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm fetch

# Copy website
COPY apps/website apps/website
# RUN pnpm install -r --offline

RUN pnpm install -r --prefer-offline

WORKDIR /app/apps/website
RUN pnpm build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
RUN corepack enable

ENV CI true

WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001


COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-workspace.yaml /app/package.json ./

RUN pnpm fetch --prod

WORKDIR /app/apps/website

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/apps/website/next.config.js ./
COPY --from=builder /app/apps/website/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/apps/website/.next ./.next
COPY --from=builder /app/apps/website/package.json ./package.json


RUN pnpm install --prefer-offline --prod

USER nextjs

ENV PORT 8080
EXPOSE ${PORT}


# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]
