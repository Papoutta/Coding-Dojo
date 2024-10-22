# 1
def countdown(a):
    array=[]
    for i in range(a, -1 , -1):
        array.append(i)
    return array
print (countdown(5))

# 2
def print_and_return(arr):
    print(arr[0])
    return arr[1]
print (print_and_return([3,5]))

#3
def first_plus_length(arr):
    return arr[0] + len(arr)
print (first_plus_length([2,3,5,9,6,7,8]))

#4 
def values_greater_than_second(arr): 
        if(len(arr) < 2):
            return False
        else :
            greater = []
            for i in range(0, len(arr),1):
                if (arr[1] < arr[i]):
                    greater.append(arr[i])
            print (len(greater))
            return greater
print (values_greater_than_second([6,2,1,3,5]))


# 5
def length_and_value(a,b):
    arr = []
    for i in range(a):
        arr.append(b)
    return arr
print (length_and_value(5,10))

#5
def length_and_value(size,num):
    return [num]*size
print (length_and_value(4,7))