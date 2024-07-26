Name = list("Rudra","Kashyap")
print(Name)

emp = list(fname = "Rudra",lname = "Kashyap")

print(emp$fname)  #Accessing element using assigned name
print(emp[[2]])   #Accessing element using index

emp[[1]] = "Shrinu"  #Changing Values
print(emp)

emp =c(emp, Name)  #Concatination
print(emp)