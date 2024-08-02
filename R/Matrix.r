A =  matrix(c(1,2,3,4,5,6,7,8,9),ncol=3, byrow=TRUE)
print(A)

B=matrix(3,3,3)  #used to create scaler matrix
# first prameter is used to define the number, second defines number of rows and third defines number of columns.
print(B)

C=diag(c(4,5,6),3,3)  
#it is used to create diagonal matrix where the first paramter excepts the values to store and the next 2 represents the number of rows and columns.
print(C)

D=diag(1,3,3)
#it creates a identity matrix
print(D)

dim(D) #(3,3)
nrow(D) #3
ncol(D) #3
length(D) #9

#submatrix
print(A[c(1,3),1:2])

#Matrix Concatenation

E = rbind(A,B)  #add the second matrix in row
print(E)

E=cbind(A,B) #add the second matrix in column
print(E)

print(A+B)
print(A-B)
print(A*B)
print(A%*%B) # It is used for regular matrix multiplication

print(A/B)