# We need the time module to create some time difference between each comparison
import time

# Importing colors from colors.py
from Helper.color import *

def merge(data, start, mid, end, drawData, timeTick):
    L = data[start : mid + 1]
    R = data[mid + 1: end + 1]
    L_idx, R_idx, S_idx = 0, 0, start
    while L_idx < len(L) and R_idx < len(R):
        if L[L_idx] <= R[R_idx]:
            data[S_idx] = L[L_idx]
            L_idx += 1
        else:
            data[S_idx] = R[R_idx]
            R_idx += 1
        S_idx += 1
    while L_idx < len(L):
        data[S_idx] = L[L_idx]
        L_idx += 1; S_idx += 1

    while R_idx < len(R):
        data[S_idx] = R[R_idx]
        R_idx += 1; S_idx += 1


def merge_sort(data, start, end, drawData, timeTick):
    if start < end:
        mid = int((start + end) / 2)
        merge_sort(data, start, mid, drawData, timeTick)
        merge_sort(data, mid + 1, end, drawData, timeTick)

        merge(data, start, mid, end, drawData, timeTick)

        drawData(data, [PURPLE if x >= start and x < mid else YELLOW if x == mid else DARK_BLUE if x > mid and x <=end else BLUE for x in range(len(data))])
        time.sleep(timeTick)

    drawData(data, [BLUE for x in range(len(data))])
    