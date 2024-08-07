#scatter plot
X = 1:10
Y=X^2
plot(Y)

plot(mtcars$wt,mtcars$mpg,main="Title",xlab ="X axis",ylab="Y axis",pch=10)

#line plot
plot(X,Y,type="l")

#bar plot
H<-c(7,12,28,3,14)
M<-c("Mar","Apr","May","Jun","Jul")
barplot(H,names.arg=M,xlab="Month",ylab="Revenue",col="blue",main="Title",border="red")