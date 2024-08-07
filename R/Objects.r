source('E:/Codes/Language/R/Functions.r')


#apply
A= matrix(1:9,3,3)
print(A)
apply(A,1,sum)
apply(A,2,sum)

#lapply
B = matrix(10:18,3,3)
myList = list(A,B)
lapply(myList,det)

#mapply
# dia - list(1,2,3,4)
# len = list(7,4,3,2)
# mapply(funcName,dia,len)

#tapply
Id = c(1,1,1,1,2,2,2,3,3)
values = c(1,2,3,4,5,6,7,8,9)
tapply(values,Id,sum)