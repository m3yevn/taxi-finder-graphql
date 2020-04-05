FROM node:alpine as build
WORKDIR /app
COPY package.json ./
RUN npm config set registry https://registry.npmjs.org/
RUN npm install
COPY . /app
RUN npm run build
CMD ["node","dist"]