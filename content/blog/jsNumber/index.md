---
title: JavaScript[number]
date: "2015-05-28T22:40:32.169Z"
description: "test"
tag: "JavaScript"
---

Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.
The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.

The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, like double in Java or C#. This means it can represent fractional values, but there are some limits to what it can store. A Number only keeps about 17 decimal places of precision; arithmetic is subject to rounding. The largest value a Number can hold is about 1.8×10308. Numbers beyond that are replaced with the special Number constant Infinity.

```
  Number('123')  // returns the number 123
  Number('123') === 123  // true

  Number("unicorn")  // NaN
  Number(undefined)  // NaN
```
