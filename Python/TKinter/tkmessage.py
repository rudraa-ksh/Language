from tkinter import *
from tkinter.messagebox import *
win=Tk()
def clicked():
    showinfo("Warning","Do you want to procced")
bt=Button(win,text="PRESS",command=clicked).pack()
win.mainloop()
