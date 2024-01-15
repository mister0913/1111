FROM node:16

RUN mkdir /based-v2
WORKDIR /based-v2
COPY . ./

RUN yarn install

COPY .env.example .env

EXPOSE 3000

CMD ["yarn" , "dev"]
