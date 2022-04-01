def xor(x,y):
    return (x and not y) or (y and not x)
x,y=map(int, input().split())
print(int(xor(x,y)))