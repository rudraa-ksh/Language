# Creating the data frame.
df = data.frame("Name"=c("Senthil","Senthil","Sam","Sam"),"Month"=c("Jan","Feb","Jan","Feb"),"BS"=c(141.2,139.3,135.2,160.1),"BP"=c(90,78,80,81))
print(df)

df2 = data.frame("Name"=c("Senthil","Ramesh","Sam"),"Department"=c("PSE","Data Analytics","PSE"))
print(df2)

#Left Join
df3 = left_join(df,df2,by="Name")# here reference is df
print(df3)

#right join
df4 = right_join(df, df2, by="Name") #here reference is df2
print(df4)

#inner join
df5 = inner_join(df, df2, by="Name")#here both are reference