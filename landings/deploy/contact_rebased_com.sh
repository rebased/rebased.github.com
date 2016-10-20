#!/bin/sh

# requires configured s3cmd

echo "syncing current directory to contact.rebased.com bucket"
s3cmd put --no-mime-magic --recursive . s3://contact.rebased.com/
s3cmd put --no-mime-magic landing_gradient.html s3://contact.rebased.com/index.html
