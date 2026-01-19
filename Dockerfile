# =========================
# Stage 1: Build React app
# =========================
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Build production files
RUN npm run build

# =========================
# Stage 2: Nginx for serving
# =========================
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy React build output
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
