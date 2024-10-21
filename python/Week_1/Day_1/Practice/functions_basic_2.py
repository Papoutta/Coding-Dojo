# 1
array=[]
def countdown(a):
    for i in range(a, -1 , -1):
        array.append(i)
    return array
print (countdown(5))

# 2
def print_and_return(a,b):
    print(a)
    return b
print (print_and_return(3,5))

#3
sum = 0
def first_plus_length(arr):
    sum = arr[0] + len(arr)
    return sum
print (first_plus_length([2,3,5,9,6,7,8]))

#4 
greater = []
def values_greater_than_second(arr): 
    for i in range(0, len(arr),1):
        if(len(arr) < 2):
            return False
        elif (arr[1] < arr[i]):
            greater.append(arr[i])
    print (len(greater))
    return greater
print (values_greater_than_second([6,2,1,3,5]))


#5
arr = []
def length_and_value(a,b):
    for i in range(a):
        arr.append(b)
    return arr
print (length_and_value(5,10))