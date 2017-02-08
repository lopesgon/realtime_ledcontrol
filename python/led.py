#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from tools import *
import RPi.GPIO as GPIO

def _launch(state):
    _led(state)

def _led(state):
    #print("TO UNCOMMENT - GPIO module launched.")
    GPIO.setmode(GPIO.BCM)
    GPIO.setwarnings(False)
    GPIO.setup(18, GPIO.OUT)
    if (state):
        GPIO.output(18, GPIO.HIGH)
    else:
        GPIO.output(18, GPIO.LOW)

def _main():
    #get our data as an array from read_in()
    lines = read_in()
    state = strToBool(lines[0])
    _launch(state)

#start process
if __name__ == '__main__':
    _main()