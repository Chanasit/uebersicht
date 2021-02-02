#!/bin/zsh

while IFS= read -r line; do
  [ -z "$line" ] && continue
  [[ "$line" =~ ^#.*$ ]] && continue
  widgets/health-check/curl_check.sh $line
done < "$1"
