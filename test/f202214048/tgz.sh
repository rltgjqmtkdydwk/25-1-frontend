#!/bin/bash

name=f202214048
time=`date +"%H%M"`

fileName=${name}-${time}.tgz
tar cvzf ${fileName} --exclude="node_modules" --exclude="*.tgz" *
