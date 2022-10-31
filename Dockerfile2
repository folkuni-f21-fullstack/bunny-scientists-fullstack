FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm run build-backend

EXPOSE 5050

CMD ["npm", "run", "run-backend"]

# CMD ["http-server", "dist", "-p", "5050"]