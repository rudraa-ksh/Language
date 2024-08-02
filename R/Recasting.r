# Creating the data frame.
df = data.frame("Name"=c("Senthil","Senthil","Sam","Sam"),"Month"=c("Jan","Feb","Jan","Feb"),"BS"=c(141.2,139.3,135.2,160.1),"BP"=c(90,78,80,81))
print(df)

#melt
df = melt(df,id.vars =c("Name","Month"), measure.vars=c("BS","BP"))
print(df)

#cast
df = dcast(df,variable+month~Name,value.var="value" )
print(df)


recast(df, varibale+Month~Name,df,var("Name","Month"))

#Adding addiotional column using mutate
df2<-mutate(df,log_BP,log(BP))
print(df2)