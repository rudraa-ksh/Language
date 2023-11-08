from tkinter import *
from tkinter.ttk import *
win=Tk()
rad1=Radiobutton(win,text="Python",value=1)
rad2=Radiobutton(win,text="Java",value=2)
rad1.grid(column=0,row=0)
rad2.grid(column=1,row=0)
win.mainloop()
