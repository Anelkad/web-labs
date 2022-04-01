def f(a,b,c,d):
    if (a<=b and a<=c and a<=d):
        return a
    elif (c<=b and a>=c and c<=d):
        return c
    elif (c>=b and a>=b and b<=d):
        return b
    return d
a=list(map(int, input().split()))
print(f(a[0],a[1],a[2],a[3]))