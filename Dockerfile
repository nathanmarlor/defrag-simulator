# Multi-stage Dockerfile for a static p5.js application
# Stage 1: Copy static files (no build required)
FROM alpine:latest as builder
WORKDIR /app
COPY . /app

# Stage 2: Serve with nginx, non-root user
FROM nginx:alpine
COPY --from=builder /app /usr/share/nginx/html
RUN addgroup -S appuser && adduser -S appuser -G appuser
USER appuser
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
