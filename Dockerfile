FROM node:17-alpine3.14
COPY ./app.js /app.js
COPY package.json /package.json
RUN yarn
EXPOSE 3000
RUN adduser -D testuser -u 8877
USER testuser
CMD ["node", "app.js"]