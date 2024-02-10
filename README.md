# Microservice
This demonstrate microservice setup with grpc.

Each time when we do some changes in proto we need to generate it with following command -
Client Server -
1. npm run generate:proto ./src/protos/tasks/tasks.service.proto 
2. npm run build
3. npm run start

Server -
1. npm run build
2. npm run start
