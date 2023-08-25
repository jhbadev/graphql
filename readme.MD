# Consumo de Api Rest - datasource-rest

## Install

npm install @Apollo/datasource-rest

ApiRest: https://jsonplaceholder.typicode.com/users

## Docker

docker build -t graphql-first-app:latest -t graphql-first-app:1.0.0 .

docker run -p 4000:4000 -d graphql-first-app

## Publicacion en Docker

graphql-first-app-jhba

comando push : docker push jhba/graphql-first-app-jhba:tagname

Configuraciones:

docker image tag graphql-first-app jhba/graphql-first-app-jhba


docker push jhba/graphql-first-app-jhba:tagname (en ejemplo se ejecuta sin tagname)

docker push jhba/graphql-first-app-jhba

## Publicando en Internet

1.- Publicar servicio en render.com o heroku
2.- Autenticarse en render o heroku con git
3.- Subir codigo a GIT con nombre de la APP
