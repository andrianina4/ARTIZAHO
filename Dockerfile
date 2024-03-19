FROM node:18.17.0
WORKDIR /app
COPY package*.json /app
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev"]