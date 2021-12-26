FROM node:12.18-alpine as node
WORKDIR /app
COPY package*.json /app
#COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
#RUN npm start
RUN npm run build

#EXPOSE 4200
#CMD ["npm", "start"]

FROM nginx:1.17.1-alpine
VOLUME /var/cache/nginx
COPY --from=node app/dist/mixnfx /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t img .
# docker run -p 8081:80 img