#!/bin/zsh

while IFS= read -r line; do
  [ -z "$line" ] && continue
  [[ "$line" =~ ^#.*$ ]] && continue
  health-check.widget/curl_check.sh $line
done < "$1"
