n=int(input())
a=input().split()
for i in range(n//2):
    a[i],a[n-i-1] = a[n-i-1], a[i]
for i in a:
    print(i, end=' ')