def outside(x):
    def inside(y):
        print(x*y)
    return inside

# first create object for outside funstion
obj=outside(10)
# then assign inside value y to newly created object i.e obj
obj(5)
