# We need the time module to create some time difference between each comparison
import time

# Importing colors from colors.py
from Helper.color import *

def counting_sort(data, drawData, timeTick):
    n = max(data) + 1
    count = [0] * n
    for item in data:
        count[item] += 1
    
    k = 0
    for i in range(n):
        for j in range(count[i]):
            data[k] = i
            drawData(data, [BLUE for x in range(len(data))] )
            time.sleep(timeTick)
            k += 1

    drawData(data, [BLUE for x in range(len(data))])