import random
PLUGINS=dict()

def register(func):
    """ register a function as plugins"""
    PLUGINS[func.__name__]=func
    return func


@register
def say_hello(name):
    return f"Hello {name}"

@register
def be_awesom(name):
    return f"yo rehan is {name}"

@register
def iam_awesom(name):
    return f" i am chair  {name}"

@register
def be_som(name):
    return f"real madrid plug {name}"




print(PLUGINS)


def randomly_greet(name):
    greeter,greeter_func = random.choice(list(PLUGINS.items()))
    print(f"using {greeter!r}")
    return greeter_func(name)

print(randomly_greet('syed rehan ahmed'))


                                         
