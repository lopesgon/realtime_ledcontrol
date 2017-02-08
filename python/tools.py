#!/usr/local/bin/python
# -*- coding: utf-8 -*-

import sys, json

def strToBool(s):
    """
    Convert an String representing a boolean into a boolean
    :param s: a boolean as a String
    :return: boolean
    """
    if s:
        return True
    else:
        return False

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])
