#!/bin/bash

state=$(eww get open_control_center)

open_control_center() {
    eww update open_control_center=true
    eww open control_center 
    eww open control_center_closer
}

close_control_center() {
    eww update open_control_center=false
    eww close control_center 
    eww close control_center_closer
}

toggle_control_center() {
  if [ "$state" = true ]
  then
    close_control_center
  else
    open_control_center
  fi
}

case $1 in
    toggle)
      toggle_control_center
      exit 0;;
    close)
        close_control_center
        exit 0;;
    open)
      open_control_center
      exit 0;;
esac
