# Javascript Part 2
1. The script will log `3`, since this is the last value of `i` in the for-loop above before it breaks
2. The script will log `150`, since this is the last value of `discountedPrice` (300 * 0.5)
3. The script will log `150`, since this is the last value of `finalPrice` (150 rounds to 150
4. The function returns `[50,100,150]`, since for each value in the input array `prices`, the function puts that value times `(1 - discount)` rounded to the nearest cent into the output array.
5. Error: Since `i` is being accessed out of the block it was defined (the for-loop) 
6. Error: Since `discountedPrice` is being accessed out of the block it was defined (also the for-loop)
7. The script will log `150`, since this is the last value of `finalPrice`. There is no error here since line 14 is still within the block where `finalPrice` was declared.
8. The function returns `[50,100,150]` as before, since in line 16 `discounted` is still in the block in which it was declared.
9. Error: Since `i` is being accessed outside of the block it was assigned (the for-loop)
10. The script will log `3`, since length is the `const` variable assigned to the length of `prices` (which is 3 in this case)
11. The function returns `[50,100,150]` as before, since `discounted` is still within scope and is only being modified, not reassigned.
12. A. `student.property` \
    B. `student['Grad Year']` \
    C. `student.greeting()` \
    D. `student['Favorite Teacher'].name`
    E. `student.courseLoad[0]`
13. A. `'32'`, since `2` gets converted to a string `'2'`\
    B. `1`, since `'3'` gets converted to an int `3`\
    C. `3`, since `null` gets converted to an int `0` \
    D. `'3null'`, since `null` gets converted to a string `'null'` \
    E. `4`, since `true` gets converted to an int `1` \
    F. `0`, since `false` and `null` get converted to ints `0` \
    G. `'3undefined'`, since `undefined` gets converted to a string `undefined`
    H. `NaN`, since `undefined` gets converted to an int `NaN`
14. A. `true`, since `'2'` gets converted to an int and `2 > 1` is `true` \
    B. `false`, since `'12'` comes before `'2'` in lexigraphical order \
    C. `true`, since `'2'` gets converted to an int and `2 == 2` is `true` \
    D. `false`, since `2` is not strictly equal to `'2'`
    E. `false`, since `true` gets converted to an int `1` and `1 == 2` is `false` \
    F. `true` since `Boolean(2)` evaluates to `true` and `true === true` is `true`
15. `==` is an equality check, and automatically converts its operands to numbers. On the other hand, `===` is a strict equality check, and does not convert its operands data types.
17. The function will return `[2,4,6]`. The function `modifyArray` will create a new array, and for every item in the given `array`, will call whatever function is stored in `callback` on that item, and push the new item to `newArray`. Since `callback` in this case returns its input doubled, each item in the given list `[1,2,3]` is doubled.
19. `1`\
    `4`\
    `3`\
    `2`