let val1 =10
let val2 =20

function addTwoNumbers(num1, num2) {
    let total = num1 + num2;
    return total;
}


let result1 = addTwoNumbers(val1, val2)
let result2 = addTwoNumbers(100, 200)
console.log(result1);

/*


### 1. First two variables are created

```javascript
let val1 = 10;
let val2 = 20;
```

So now:

* `val1` = 10
* `val2` = 20

---

### 2. A function is defined

```javascript
function addTwoNumbers(num1, num2) {
    let total = num1 + num2;
    return total;
}
```

This function means:

* take 2 numbers
* add them
* return the answer

Here:

* `num1` is the first input
* `num2` is the second input
* `total` stores the sum

---

### 3. First function call

```javascript
let result1 = addTwoNumbers(val1, val2);
```

This becomes:

```javascript
addTwoNumbers(10, 20)
```

Inside the function:

```javascript
let total = 10 + 20;   // total = 30
return 30;
```

So:

* `result1 = 30`

---

### 4. Second function call

```javascript
let result2 = addTwoNumbers(100, 200);
```

Inside the function:

```javascript
let total = 100 + 200;   // total = 300
return 300;
```

So:

* `result2 = 300`

---

### 5. Printing the values

```javascript
console.log(result1);
console.log(result2);
```

Output will be:

```javascript
30
300
```

---

## Full flow in simple words

1. JavaScript stores `10` in `val1`
2. JavaScript stores `20` in `val2`
3. It creates the function `addTwoNumbers`
4. It calls the function with `10` and `20`
5. The function returns `30`
6. That `30` is stored in `result1`
7. Then it calls the function with `100` and `200`
8. The function returns `300`
9. That `300` is stored in `result2`
10. Both values are printed

---
*/
