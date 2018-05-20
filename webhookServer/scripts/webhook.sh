#!/usr/bin/env bash

echo "=========== BEGIN fzwebhook =========="


git add -A
git pull

# 需要到各个文件夹下去npm install
#cd ../client
#npm install

cd ../server
npm install

pm2 restart nas_demo

echo "======== END webhook =========="
