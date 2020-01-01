class MoreClass:
    
    def __init__(self,name):
        self.name=name
    def __repr__(self):
        return f"{self.name}"

a = MoreClass('rehan')
b = MoreClass('ahmed')
c = MoreClass('syed')
d = MoreClass('repp')
lis=[a,b,c,d]
for i in lis:
    print(f"this is passed in list {i} ")
