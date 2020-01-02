def decorator(func):
    def wrapp(*args):
        z = func(*args).upper()
        print(z)
        return z
    return wrapp

@decorator
def smart(name):
    return(name)


smart('abcd')
smart('fjafalkf')
smart('syedrehanahmed')






    
