def gene():
    for i in range(5):
        yield(i*i)

obj = gene()
# you  can call one by one using next function
print(next(obj))

# Another way to create generator is as follows

obj = (i*i for i in range(5))
print(next(obj))
# you can loop through  generator object instead of typing next everytime
for i in obj:
    print(i)
