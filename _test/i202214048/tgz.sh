#!/bin/bash
name=f201514099 
time=`date +"%H%M"`

fileName=${name}-${time}.tgz
tar cvzf ${fileName} --exclude="node_modules" --exclude="*.tgz" * 