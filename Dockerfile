FROM node:18.17.0
WORKDIR /app
COPY package*.json /app
RUN yarn install
COPY . .
RUN npm run build
# COPY start.sh .
# RUN chmod +x start.sh
EXPOSE 3000
# ENV PORT 3000
# CMD ["./start.sh"]
CMD [ "npm","start" ]