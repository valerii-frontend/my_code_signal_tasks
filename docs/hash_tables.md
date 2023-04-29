[![back to readme](https://img.shields.io/badge/⬅%20BACK-blue)](../README.md)

# Hash Tables

## groupingDishes

### Task

You are given a list dishes, where each elem ent consists of a list of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes).

Return an array where each element is a list beginning with the ingredient name, followed by the names of all the dishes that contain this ingredient. The dishes inside each list should be sorted alphabetically, and the result array should be sorted alphabetically by the names of the ingredients.

### Example

```
dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]
the output should be

 solution(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
                      ["Salad", "Salad", "Sandwich"],
                      ["Sauce", "Pizza", "Quesadilla", "Salad"],
                      ["Tomato", "Pizza", "Salad", "Sandwich"]]

```

## areFollowingPatterns

### Task

Given an array strings, determine whether it follows the sequence given in the patterns array. In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

### Example

```
For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
solution(strings, patterns) = true;
For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
solution(strings, patterns) = false.

```

## containsCloseNums

### Task

Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array where nums[i] = nums[j] and the absolute difference between i and j is less than or equal to k.

### Example

```
For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be
solution(nums, k) = true.

There are two 2s in nums, and the absolute difference between their positions is exactly 3.

For nums = [0, 1, 2, 3, 5, 2] and k = 2, the output should be
solution(nums, k) = false.

The absolute difference between the positions of the two 2s is 3, which is more than k.

```

## possibleSums

### Task

You have a collection of coins, and you know the values of the coins and the quantity of each type of coin in it. You want to know how many distinct sums you can make from non-empty groupings of these coins.

### Example

```
For coins = [10, 50, 100] and quantity = [1, 2, 1], the output should be
solution(coins, quantity) = 9.

Here are all the possible sums:

50 = 50;
10 + 50 = 60;
50 + 100 = 150;
10 + 50 + 100 = 160;
50 + 50 = 100;
10 + 50 + 50 = 110;
50 + 50 + 100 = 200;
10 + 50 + 50 + 100 = 210;
10 = 10;
100 = 100;
10 + 100 = 110.

As you can see, there are 9 distinct sums that can be created from non-empty groupings of your coins.

```

## swapLexOrder

### Task

Given a string str and array of pairs that indicates which indices in the string can be swapped, return the lexicographically largest string that results from doing the allowed swaps. You can swap indices any number of times.

---

<h3 style="text-align:center">Lexicographical Order (for strings)</h3>

A way of sorting strings, similar to alphabetical order but generalized to all kinds of characters.

When comparing two strings, `s` and `t`, we compare each pair of characters with equal indices (`s[i]` and `t[i]`), starting with `i = 0`:

`if s[i] < t[i] or if s[i]` is undefined, then we conclude that `s < t`,
`if s[i] > t[i] or if t[i]` is undefined, then we conclude that `s > t`,
`if s[i] = t[i]` then we repeat the process by comparing `s[i + 1] to t[i + 1]`.
If the two strings have equal length and `s[i] = t[i]` for every character, then we conclude that `s = t`

**_Examples:_**

- `"snow" > "snoring"` because the first string contains a greater character at index `i = 3`
- `"cat" < "caterpillar"` because the first string is undefined at index `i = 3`
- `"9" < "A"` because numbers are lexicographically smaller than uppercase English letters
- `"Z" < "a"` because uppercase English letters are lexicographically smaller than lowercase English letters

---

### Example

```
For str = "abdc" and pairs = [[1, 4], [3, 4]], the output should be
solution(str, pairs) = "dbca".

By swapping the given indices, you get the strings: "cbda", "cbad", "dbac", "dbca". The lexicographically largest string in this list is "dbca".

```

[![back to readme](https://img.shields.io/badge/⬅%20BACK-blue)](../README.md)
