[![back to readme](https://img.shields.io/badge/⬅%20BACK-blue)](../README.md)

# Hash Tables

## groupingDishes

### Task

You are given a list dishes, where each element consists of a list of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes).

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

[![back to readme](https://img.shields.io/badge/⬅%20BACK-blue)](../README.md)
