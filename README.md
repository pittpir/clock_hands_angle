![ga](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)


# Clock Hand Angle Calculator

---
Type: Morning Exercise<br>
Creator:<br>
    Original creators: WDI-Lettuce<br>
    Adapted by: Thom Page for WDIR-Panthalassa<br>
Competencies: Logic, Javascript<br>
Prerequisites: Javascript <br>

---

![clock](https://orpheogroup.com/wp-content/uploads/2014/10/grand-central-clock-crop.jpg)


## Setup
1. Navigate into your `student_examples` folder for today.
2. Create a file called `clock_hands.js` file to write your code for this morning's exercise.

# ToDo:

Write a function `clock` that takes two integers, `hour` and `minute`. The function should calculate the two angles in degrees between the **hour hand** and **minute hand** on a twelve-hour analog clock face.

Note that the hour hand has 'drift'. If the time is **6:30**, the hour hand will be halfway through its travel between **6** and **7**. If the time is **9:45**, the hour hand will be three quarters of the way between **9** and **10**.

Return an "out of range" message if an input is greater than the clock's range.


Expected output:

```js
clock(6, 00)

=> [180, 180]
```

```js
clock(12, 00)

=> [360, 0]
```

```js
clock(12, 15)

=> [277.5, 82.5]
```

```js
clock(9, 45)

=> [22.5, 337.5]
```

```js
clock(1, 59)

=> [294.5, 65.5]
```

```js
clock(500, 34)

=> "out of range"
```

Hint: Drawing the outputs with pencil and paper may help you understand and solve the problem.
