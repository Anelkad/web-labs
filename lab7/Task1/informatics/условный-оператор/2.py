n=int(input())
t=1
if (n%4!=0): t*=0
if (n%100==0): t*=0
if (n%400==0): t=1
if (t): 
    print("YES")
else:
    print("NO")