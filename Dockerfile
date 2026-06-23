FROM node:20-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_SITE_URL=https://gss-fronted.h39ldq.easypanel.host
ENV NEXT_PUBLIC_API_URL=https://gss-backend.h39ldq.easypanel.host
ENV NEXT_PUBLIC_WHATSAPP_NUMBER=966500000000

RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000
CMD ["npm", "start"]
