from tkinter import *
win=Tk()

name=Label(win,text="Name: ")
pas=Label(win,text="Pawssword: ")
ent1=Entry(win)
ent2=Entry(win)
name.grid(row=0,column=0)
ent1.grid(row=0,column=1)
pas.grid(row=1,column=0)
ent2.grid(row=1,column=1)
win.mainloop()
