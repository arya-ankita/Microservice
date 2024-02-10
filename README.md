# Microservice
This demonstrate microservice setup with grpc.

Each time when we do some changes in proto we need to generate it with following command -
1. Client Server -
#npm run generate:proto ./src/protos/tasks/tasks.service.proto
#npm run build
#npm run start

2. Server -
#npm run build
#npm run start
