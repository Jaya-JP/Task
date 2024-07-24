
# Q 1) Find Missing Number
def numbers(arr):
    n = len(arr) + 1  
    e = n * (n + 1) // 2
    a = sum(arr)
    return e - a

inputArray = [1, 3, 4, 5, 6, 7, 8, 9, 10]
missingNumber = numbers(inputArray)
print(f"Missing Number is :  {missingNumber}")

#2) Remove duplicates
def Duplicates(n):
    if not n:
        return 0  
    i = 0
    for j in range(1, len(n)):
        if n[j] != n[i]:
            i += 1
            n[i] = n[j]
    return i + 1
inputArray = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5]
newLength = Duplicates(inputArray)
print(f"Original input Array : {inputArray} ")
print(f"Removing duplicates from original : {inputArray[:newLength]}")
print(f"New Length: {newLength}")

'''
#3) Factorial of given number:
'''
num=int(input("Enter the Number : "))
fact=1
for i in range(1,1+num):
    fact=fact*i
print(f"The factorial of given Number is {fact}")


def Fact(n):
    if n == 0 or n == 1:
        return 1
    return n * Fact(n - 1)

n = 10
print(f"Factorial of {n} is : {Fact(n)}")  

#4)Reverse And Rotate a given list
def Reverse(n, start, end):
    while start < end:
        n[start], n[end] = n[end], n[start]
        start += 1
        end -= 1

def Rotate(num, k):
    n = len(num)
    k = k % n  
    Reverse(num, 0, n - 1)
    Reverse(num, 0, k - 1)
    Reverse(num, k, n - 1)

inputArray = [3, 8, 9, 2, 5]
k = 2
Rotate(inputArray, k)
print(f"Rotated Array: {inputArray}") 

