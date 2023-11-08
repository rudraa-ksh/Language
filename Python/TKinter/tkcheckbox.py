from tkinter import *
win=Tk()

name=Label(win,text="Name: ")
pas=Label(win,text="Pawssword: ")
ent1=Entry(win)
ent2=Entry(win)
name.grid(row=0,column=0,sticky=E)
ent1.grid(row=0,column=1)
pas.grid(row=1,column=0)
ent2.grid(row=1,column=1)

c=Checkbutton(win,text="Keep me loged in.",bg="red")
c.grid(columnspan=2)

win.mainloop()
