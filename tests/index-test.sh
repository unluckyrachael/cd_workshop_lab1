#!/bin/bash

## Check to see if the expected patterns are present in the file

filename='index-test.txt'
  while read p; do
      if grep -q "$p" ../src/site/views/index.jade
      then
        echo "Match Found:  '$p'   Checking next line..."
      else
        echo "Match Not Found:  '$p'   Test Failure!  Exiting."
        exit 1
      fi
  done < $filename
echo "Test Successful!  Exiting."
exit 0
