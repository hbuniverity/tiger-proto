@echo off

if not exist "./protojs" (
    mkdir "./protojs"
    echo 已创建 protojs 目录
)
echo npm install -g protobufjs-cli

pbjs -t static-module -w commonjs -o ./protojs/common.js ./protos/common.proto

pbjs -t static-module -w commonjs -o ./protojs/client.js ./protos/client.proto

pbjs -t static-module -w commonjs -o ./protojs/server.js ./protos/server.proto

pbjs -t static-module -w commonjs -o ./protojs/cluster.js ./protos/cluster.proto

pbjs -t static-module -w commonjs -o ./protojs/protocol_key.js ./protos/protocol_key.proto

pbjs -t static-module -w commonjs -o ./protojs/notice.js ./protos/notice.proto

pbjs -t static-module -w commonjs -o ./protojs/error_code.js ./protos/error_code.proto

echo ==============================

echo 输出路径：./protojs
echo ==============================

pause  # 暂停查看结果，按任意键关闭