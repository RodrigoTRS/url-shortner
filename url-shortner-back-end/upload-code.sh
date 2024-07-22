#!/bin/bash

mkdir server
cp -r build/ server
cp .env.example server
cp package.json server
zip -r server.zip server
scp -i /home/rodrigosilva/.ssh/prod_kp.pem server.zip ec2-user@ec2-3-237-102-6.compute-1.amazonaws.com:~
rm -r server
rm server.zip