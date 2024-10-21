#1
def number_of_food_groups():
    return 5
print("expected result is : 5")
print(number_of_food_groups())



#2
def number_of_military_branches():
    return 5
print("expected result is : error")
print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())


#3
def number_of_books_on_hold():
    return 5
    return 10
print("expected result is : 10")
print(number_of_books_on_hold())


#4
def number_of_fingers():
    return 5
    print(10)
print(number_of_fingers())
print("expected result is : 5")


#5
def number_of_great_lakes():
    print(5)
x = number_of_great_lakes()
print(x)
print("expected result is : 5 then None")
#the none comes because the function doens't return anything


#6
def add(b,c):
    print(b+c)
print(add(1,2) + add(2,3))
print("expected result is : 3 then 5 then error")
# the result error is due to the addition of none and none


#7
def concatenate(b,c):
    return str(b)+str(c)
print(concatenate(2,5))
print("expected result is : 25")
# the result is a string


#8
def number_of_oceans_or_fingers_or_continents():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(number_of_oceans_or_fingers_or_continents())
print("expected result is : 100 then 10")


#9
def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
print("expected result is : 7 then 14 then 21")

#10
def addition(b,c):
    return b+c
    return 10
print(addition(3,5))
print("expected result is : 8")

#11
b = 500
print(b)
def foobar():
    b = 300
    print(b)
print(b)
foobar()
print(b)
print("expected result is : 500 then 500 then 300 then 500")


#12
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
foobar()
print(b)
print("expected result is : 500 then 500 then 300 then 500")
the return b does not work here


#13
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
b=foobar()
print(b)
print("expected result is : 500 then 500 then 300 then 300")
# here the value b became the value returned by the function thats why the last print(b) is 300


#14
def foo():
    print(1)
    bar()
    print(2)
def bar():
    print(3)
foo()
print("expected result is : 1 then 3 then 2")


#15
def foo():
    print(1)
    x = bar()
    print(x)
    return 10
def bar():
    print(3)
    return 5
y = foo()
print(y)
print("expected result is : 1 then 3 then 5 then 10")