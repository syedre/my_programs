class A:
	def __init__(self,name,age):
		self.name=name
		self.age=age
		
	def __str__(self):
		return (f' my name is {self.name} ')
		
	def __repr__(self):
		return (f' {self.age!r} ')
	

	    
	# class methods are used as constructors
	@classmethod
	def classm(cls):
		return cls('rehan','7')
	    
	@classmethod
	def secondcls(cls):
		return cls('Ahmed','9')

	@classmethod
	def thirdcls(cls):
		return cls('syed','29')
	@classmethod
	def fourthcls(cls):
		return cls('donn','99')
	
	
	
	


obj1 = A.classm()
obj2 = A.secondcls()
obj3 = A.thirdcls()
obj4 = A.fourthcls()


print(obj1) # print the values of classm method which is defined in __str__
print(repr(obj1))
print('#'*15)
print(obj2)
print(repr(obj2))
print('#'*15)
print(obj3)
print(repr(obj3))
print('#'*15)
print(obj4)
print(repr(obj4))
print('#'*15)
print("E***N****D")

      

