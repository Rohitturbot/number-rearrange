### Demo of the solution

![2021-07-25_02-22-59 (1)](https://user-images.githubusercontent.com/40739903/126880854-eb577f52-6003-4fbc-9477-b3612d56bf55.gif)

### How to Test locally

1. Clone the repo using `git clone git@github.com:Rohitturbot/number-rearrange.git`
2. CD into that repo using `cd number-rearrange`
3. Run `npm i` to install decencies
4. Run `npm test` to run and see the code running.

### Problem

> We will be having an random ordered array, It will contain numbers can be positive, negative and decimals are also possible. We have to arrange these numbers in an form of `a1 <= a2 >= a3 <= a4 >= a5 <= a6 >=a7 ...etc` So it mean a kind of wave which start from down. In layman's terms we can think of a wave which goes like `low -> hight -> low -> hight -> low -> ...`

Note:- There can be `multiple arrangements` for the same array. This function should return any of the arrangements will be fine.
#### Example

- All positive random order numbers
```
Input Array - [19,1,78,345,090,87,234,12]
Output Array- [1,78,19,345,87,234,12,90]
Other possible outputs are:-
 1. [1,87,19,345,78,234,12,90]
 2. [1,87,19,234,78,345,12,90]
 3. [1,234,19,87,78,345,12,90]
 4. [1,90,19,87,78,345,12,234]
```

- All negative in random order numbers
```
Input Array - [-10,-90,-49,-2.1,-0.5,-5,-23]
Output Array- [-90,-10,-49,-0.5,-5,-2.1,-23]
```

- Mix of positive, negative and decimals numbers
```
Input Array - [10,-90,49,2.1,-0.5,-5,-23]
Output Array- [-90,49,2.1,10,-5,-0.5,-23]
```

- Sorted positive numbers
```
Input Array - [1,2,3,4,5,6,7,8]
Output Array- [1,3,2,5,4,7,6,8]
```

- Sorted negative numbers
```
Input Array - [-1,-2,-3,-4,-5,-6,-7,-8]
Output Array- [-2,-1,-4,-3,-6,-5,-8,-7]
```

### Approach to solve this problem

We can loop over all the element of the array, but as we know array is an indexed data structure and we can access its previous and next element with **a[i-1]** & **a[i+1]** with `O(1)`, and index start with `0` which is a even number. So if we go throw only even numbers then we can iterate over half of the elements which will reduce our number of iterations we can say it like `O(n/2)` but for very big number its not that much significant so when we will be calculating function's Big O it will be `O(n)` but we know its still fast and we are only iterating only half of the elements which are even.

So we will iterate through all the even numbers and check if current number is greater then the previous number [i-1] if so then we will swap these two numbers `i-1` and `i` and again we will check if current number is greater then the next number as well if that is the case then we will swap again but this time `i` and `i+1` will be swapped. if not then we will continue through all the elements.

Lets understand this by one example from one of our previous examples
```
Input Array -> [19,1,78,345,90,87,234,12]
```

as we are starting from index `0` and will go through only even indexes. so current element will be `19`

#### First iteration

```
previous = undefined
current = 19
next = 1
```
as there is no previous so we will skip first check and move to next check which is `if current is greater then next one` so that is true we will swap `19 and 1` so after first iteration array will look like
```
[1,19,78,345,90,87,234,12]
```

#### Second iteration

```
previous 19
current 78
next 345
```
Now we have 19 in the previous so we will check `if current is greater than previous` and which is true so we will swap `19 & 78` and lets check about `if current is greater then next one` which is not so we will skip that and after second iteration array will look like
```
[1,78,19,345,90,87,234,12]
```

#### Third iteration

```
previous 345
current 90
next 87
```
lets check `if current is greater than previous` no so lets skip and lets check `if current is greater then next one` which is true so we will swap `90 & 87` and after third iteration array will look like
```
[1,78,19,345,87,90,234,12]
```

#### Fouth iteration

```
previous 90
current 234
next 12
```
lets check `if current is greater than previous` yes so swap `90, 234` and and now current will be pointing to `90` and lets check `if current is greater then next one` which is true so we will swap `90 & 12` and after 4th iteration array will look like
```
[1,78,19,345,87,234,12,90]
```

Now there is no even number left in the array so at last our array will look like this. `[1,78,19,345,87,234,12,90]` which is
`a1 <= a2 >= a3 <= a4 >=a5...` format


### Time & Space complexity

The time complexity for this approach will be `O(n)` its not completely true its actually `O(n/2)` but in standard format we will say it like that.


The space complexity in this approach will be `O(1)` as we are not using any extra space for out computation here even for swapping the variables we are using `destructuring` concept of js.

Note:- `destructuring` will create a temporary array for us but after assignments to variables it will be vanished so we can ignore.
