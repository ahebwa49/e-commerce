# Tunda

Being designed to be Uganda's biggest e-commerce platform using React, GraphQL, Next and Apollo

## Getting Started

First things first, clone this repo

```sh
git clone https://github.com/ahebwa49/e-commerce.git
```

Make sure you have installed Docker and Docker Compose

# Backend

## Backend Architecture

Here’s an overview of the architecture that’s used when building [GraphQL](https://graphql.org/) servers with [Prisma](https://www.prisma.io/):

![Image of backend architecture](https://i.imgur.com/OyIQQxF.png)

### Technologies used

1. JavaScript
2. GraphQL
3. Prisma
4. Postgres
5. Docker

#### Prisma

[Prisma](https://www.prisma.io/) is a performant open-source infrastructure layer simplifying databases workflows. Learn how to get started with Prisma [here](https://docs-beta.prisma.io/1.13/get-started/01-setting-up-prisma-new-database-a002/)

##### Prisma layer consists of several components

- **Prisma server** acting as a proxy to your database.
- High performance **query engine** that runs on the Prisma server and generates actual database queries.
- **Prisma client** that connects to the prisma server.
- **Realtime event system** that lets you subscribe to database events.

#### GraphQL

[GraphQL](https://graphql.org/) is a new API standard that was invented and open sourced by facebook as a powerful, flexible and efficient alternative to REST.

##### A query language for your API

GraphQL:

- provides a complete and understandable description of the data in your API
- gives clients the power to ask for exactly what they need and nothing more
- makes it easier to evolve APIs over time
- enables powerful developer tools

#### Docker

[Docker](https://www.docker.com/) containers wrap up software and its dependencies into a standardized unit for software development that includes everything it needs to run:

- code
- runtime
- system tools and libraries.

This guarantees that your application will always run the same and makes collaboration as simple as sharing a container image.

The [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli) and [Docker Compose CLI](https://docs.docker.com/compose/reference/) are used to manage the Prisma servers.

Here's a quick rundown of the most important commands:

- `docker-compose up -d`: Start a new Prisma server to which you can deploy your Prisma services.
- `docker-compose stop`: Stops the Prisma server.
- `docker-compose pull`: Downloads the latest Prisma images from Docker Hub
- `docker ps`: Verify that the containers are running:
- `docker logs`: Shows the logs of the Prisma server (helpful for debugging).

#### Postgres

[PostgreSQL](https://www.postgresql.org/) is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for:

1. reliability
2. feature robustness
3. performance.

### Checking the database server for persisted data

To check for the data being stored in the postgres database, you'll need to login to the database server with one of the available roles. We shall use the prisma role as specified by the docker-compose.yml file.

Run `$sudo docker exec -i -t backend_postgres_1 sh` to access the postgres server in the container.

`psql -U prisma` to login as prisma user.

`\c prisma` to connect to the prisma database.

`\dn` to see the available schemas.

`SHOW search_path;` to see the schema you are currently connected to.

`SET search_path TO default$default;` to connect to the schema where prisma persists the data.

**NB:** _The name of the schema is derived from the default service name and service stage of the endpoint that's stored in the prisma.yml file._

To see the tables in the current schema, run `\dt`.

Run `SELECT * FROM "Event"` to return the data in the table model. Make sure you escape the table name because postgres will by default make all the characters lower case hence throw an error to you that the table "event" doesn't exist in the database.


## Next you need to run the backend. Make sure to install dependencies

```sh
cd backend
npm install
```

Now you can start the prisma, and the app in development mode

```sh
docker-compose up -d
npm run deploy
npm run dev
```

If everything goes well, you can navigate to `http://localhost:4000` in the browser to make some queries and mutations using the GraphQL playground.

# Frontend

Next you need to run the frontend. Make sure to install dependencies

```sh
cd frontend
npm install
```
