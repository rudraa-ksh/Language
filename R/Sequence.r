seq(from=0, to=10, by=1)
seq(from=0,to=10, length=5)

sum=0
for (i in seq(1, 3, 1)) {
    sum=sum+i
    print(c(i,sum))
}