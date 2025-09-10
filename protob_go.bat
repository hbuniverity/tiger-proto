echo off

protoc --proto_path=./protos --go_out=. ./protos/common.proto
protoc --proto_path=./protos --go_out=. ./protos/client.proto
protoc --proto_path=./protos --go_out=. ./protos/server.proto
protoc --proto_path=./protos --go_out=. ./protos/cluster.proto
protoc --proto_path=./protos --go_out=. ./protos/protocol_key.proto
protoc --proto_path=./protos --go_out=. ./protos/notice.proto
protoc --proto_path=./protos --go_out=. ./protos/error_code.proto

pause