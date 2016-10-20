#!/bin/sh

# requires configured s3cmd

echo "syncing current directory to check.rebased.com bucket"
s3cmd put --recursive --no-mime-magic . s3://check.rebased.com/
s3cmd put --no-mime-magic landing_crystals.html s3://check.rebased.com/index.html
