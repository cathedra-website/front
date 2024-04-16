FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production

COPY --from=build /app/dist /usr/share/nginx/html

# (если кастомная конфигурация)
# COPY nginx.conf /etc/nginx/nginx.conf

# Объявление используемого порта
EXPOSE 80

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]
