#!/bin/zsh

if (($#)) ; then
     SERVER=$1
else
     SERVER=$(cat)
fi

STATUS=$(curl -X GET -L -s -o /dev/null -I -w "%{http_code}" $1)


if [ "${STATUS}" -eq "200" ]; then
    echo -e "$SERVER|online"
else
    echo -e "$SERVER|offline"
fi
