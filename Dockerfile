FROM node:14-alpine


WORKDIR /app

ENV PORT 8080

EXPOSE ${PORT}

COPY package*.json ./

RUN npm install --only=production

COPY . .

CMD ["npm", "start"]