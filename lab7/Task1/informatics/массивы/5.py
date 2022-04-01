n=int(input())
a=list(map(int,input().split()))
t=0
for i in range(1,n):
    if(a[i]*a[i-1]>0): t=1
if (t):
    print('YES')
else:
    print('NO')