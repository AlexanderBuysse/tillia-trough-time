#!/bin/sh
set -eu

test -s index.html
test -s main.css
test -s bundle.befe5f032648e0f28352.js
test -s background.png
