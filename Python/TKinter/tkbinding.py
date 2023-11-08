from tkinter import *
root=Tk()

def clicked():
    l=Label(root,text="Welcome Rudra").pack()

bt=Button(root,text="Enter",command=clicked).pack()
root.mainloop()
