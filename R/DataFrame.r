#Creating Data frame
Names = c("Rudra","Abdur","Himanshu")
City = c("Raigarh","CH","CG")
df= data.frame(Names,City)

#Accessing dataframe
print(df)
print(df[1:2,2])

print(subset(df,Names =="Rudra"))

#Modifying dataframe
df[1,2]="CG"
print(df)

#inserting rows into the dataframe
df = rbind(df,data.frame(Names="Rahul",City="CG"))

#inserting column in the dataframe
df = cbind(df,Age=c(19,19,19,19))
print(df)

#deleting row and columns
#df = df[-2,-1] it will delete the 2 row and 3rd column completely
#print(df)

#df = df[,-2]  it will delete the second row completely
#print(df)

#conditional deletion
df = df[,!names(df)%in%c("Age")] # it will delete the column where column name is Age
print(df)

df= df[!df$Name=="Rahul",] # it will delete the row where name is equal to Rahul
print(df)