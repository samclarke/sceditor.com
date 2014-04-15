#!/bin/bash

shopt -s extglob
cd /tmp
cd /home/sam/public_html/Classes/SCEditor\ Site/build
pwd
rm -rf !(.git)
cp -r ../_site/. ./
