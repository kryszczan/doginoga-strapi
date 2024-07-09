FROM node:18.20 AS build
WORKDIR /strapi
COPY . .
RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]