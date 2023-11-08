from tkinter import *                #it can be done for frame,button and label

win=Tk()

def clicked(event):
    print("HMMMM")

bt=Button(win,text="Click")
bt.bind("<Button-3>",clicked)     #packing should be done at the last
bt.pack()
    
win.mainloop()
