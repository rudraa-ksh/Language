from tkinter import *
from tkinter.ttk import *
root=Tk()
combo=Combobox(root)
combo["values"]=(1,2,3,4,5,)
combo.current(0)
combo.grid(column=0,row=0)
root.mainloop()
