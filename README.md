This repository contains the code for four different services: `client`, `server`, `worker`, and `nginx`. Each service is contained in a separate folder within this repository. The goal of this repository is to help you learn and practice using GitHub Actions, Docker, and Docker Compose.

## Services

Here's a brief overview of the four different services in this repository:

### Client

The `client` folder contains the code for a simple web application built using React. This web application is designed to interact with the `server` service in order to retrieve data and display it to the user.

### Server

The `server` folder contains the code for a simple Node.js server that serves data to the `client` service. This server is designed to interact with the `worker` service in order to retrieve data from a database.

### Worker

The worker folder contains the code for a simple Node.js application that retrieves data from a Redis database and performs some actions. This application is designed to be run periodically using a cron job or a similar tool.

### Nginx

The `nginx` folder contains the configuration files for an Nginx reverse proxy server. This server is designed to route incoming requests to either the `client` or `server` service based on the URL path.

## GitHub Actions

This repository includes a number of GitHub Actions workflows that demonstrate different ways to build, test, and deploy these services using Docker and Docker Compose. These workflows are located in the `.github/workflows` folder.

## Docker

Each of the four services in this repository is designed to be run using Docker. The `Dockerfile` for each service is located in the corresponding folder.

## Docker Compose

The `docker-compose.yml` file in the root of this repository is used to define and orchestrate the different services. This file specifies how each service should be built and started, and how they should communicate with each other.

## Usage

To use the `worker` service, you will need to have a Redis database set up and running. Once you have that set up, you can follow the instructions in the `worker` folder to build and run the service using Docker.

Once you have the `worker` service running locally, it will connect to the Redis database and perform some actions based on the data that it retrieves.

## Conclusion

This repository is designed to help me learn and practice using GitHub Actions, Docker, and Docker Compose.
