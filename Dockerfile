FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_SITE_URL=https://gss-fronted.h39ldq.easypanel.host
ENV NEXT_PUBLIC_API_URL=https://gss-backend.h39ldq.easypanel.host
ENV NEXT_PUBLIC_WHATSAPP_NUMBER=966500000000

RUN npm run build

# Verify standalone output exists
RUN ls -la .next/standalone/ && ls -la .next/static/

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Copy standalone server
COPY --from=builder /app/.next/standalone/ ./
# Copy static assets into the correct location
COPY --from=builder /app/.next/static/ ./.next/static/
# Copy public assets
COPY --from=builder /app/public/ ./public/

# Verify files are in place
RUN ls -la && echo "---" && ls -la .next/ && echo "---" && ls -la .next/static/ 2>/dev/null || echo "no static"

EXPOSE 3000
CMD ["node", "server.js"]
