[![back to readme](https://img.shields.io/badge/⬅%20BACK-blue)](../README.md)

# Trees: basic

## 💎hasPathWithGivenSum

### Task

Given a binary tree t and an integer s, determine whether there is a root to leaf path in t such that the sum of vertex values equals s.

### Example

```
For

t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}
and
s = 7,
the output should be solution(t, s) = true.

This is what this tree looks like:

      4
     / \
    1   3
   /   / \
  -2  1   2
    \    / \
     3  -2 -3
Path 4 -> 3 -> 2 -> -2 gives us 7, the required sum.

For

t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -4,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}
and
s = 7,
the output should be solution(t, s) = false.

This is what this tree looks like:

      4
     / \
    1   3
   /   / \
  -2  1   2
    \    / \
     3  -4 -3
There is no path from root to leaf with the given sum 7.
```

## 💎isTreeSymmetric

### Task

Given a binary tree t, determine whether it is symmetric around its center, i.e. each side mirrors the other.

### Example

For

```
t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}

```

the output should be solution(t) = true.

Here's what the tree in this example looks like:

```

    1
   / \
  2   2
 / \ / \
3  4 4  3

```

As you can see, it is symmetric.

For

```
t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}

```

the output should be solution(t) = false.

Here's what the tree in this example looks like:

```
    1
   / \
  2   2
   \   \
   3    3
```

As you can see, it is not symmetric.

## 💎findProfession

### Task

Consider a special family of Engineers and Doctors. This family has the following rules:

Everybody has two children.
The first child of an Engineer is an Engineer and the second child is a Doctor.
The first child of a Doctor is a Doctor and the second child is an Engineer.
All generations of Doctors and Engineers start with an Engineer.
We can represent the situation using this diagram:

                E
           /         \
          E           D
        /   \        /  \
       E     D      D    E
      / \   / \    / \   / \
     E   D D   E  D   E E   D

Given the level and position of a person in the ancestor tree above, find the profession of the person.
Note: in this tree first child is considered as left child, second - as right.

### Example

```
For level = 3 and pos = 3, the output should be
solution(level, pos) = "Doctor".
```

## 💎kthSmallestInBST

### Task

Note: Your solution should have only one BST traversal and O(1) extra space complexity, since this is what you will be asked to accomplish in an interview.

A tree is considered a binary search tree (BST) if for each of its nodes the following is true:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and the right subtrees must also be binary search trees.
Given a binary search tree t, find the kth smallest element in it.

Note that kth smallest element means kth element in increasing order. See examples for better understanding.

### Example

For

        t = {
            "value": 3,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 5,
                "left": {
                    "value": 4,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": 6,
                    "left": null,
                    "right": null
                }
            }
        }

and k = 4, the output should be
solution(t, k) = 5.

Here is what t looks like:

           3
         /   \
        1     5
             / \
            4   6

The values of t are [1, 3, 4, 5, 6], and the 4th smallest is 5.

For

        t = {
            "value": 1,
            "left": {
                "value": -1,
                "left": {
                    "value": -2,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": 0,
                    "left": null,
                    "right": null
                }
            },
            "right": null
        }

and k = 1, the output should be
solution(t, k) = -2.

Here is what t looks like:

             1
            /
          -1
          / \
        -2   0

The values of t are [-2, -1, 0, 1], and the 1st smallest is -2.

## 💎isSubtree

### Task

Given two binary trees t1 and t2, determine whether the second tree is a subtree of the first tree. A subtree for vertex v in a binary tree t is a tree consisting of v and all its descendants in t. Determine whether or not there is a vertex v (possibly none) in tree t1 such that a subtree for vertex v (possibly empty) in t1 equals t2.

### Example

For

        t1 = {
            "value": 5,
            "left": {
                "value": 10,
                "left": {
                    "value": 4,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": 2,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": 6,
                    "left": null,
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                }
            },
            "right": {
                "value": 7,
                "left": null,
                "right": null
            }
        }

and

        t2 = {
            "value": 10,
            "left": {
                "value": 4,
                "left": {
                    "value": 1,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": 2,
                    "left": null,
                    "right": null
                }
            },
            "right": {
                "value": 6,
                "left": null,
                "right": {
                    "value": -1,
                    "left": null,
                    "right": null
                }
            }
        }

the output should be solution(t1, t2) = true.

This is what these trees look like:

              t1:             t2:
               5              10
              / \            /  \
            10   7          4    6
           /  \            / \    \
          4    6          1   2   -1
         / \    \
        1   2   -1

As you can see, t2 is a subtree of t1 (the vertex in t1 with value 10).

For

        t1 = {
            "value": 5,
            "left": {
                "value": 10,
                "left": {
                    "value": 4,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": 2,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": 6,
                    "left": {
                        "value": -1,
                        "left": null,
                        "right": null
                    },
                    "right": null
                }
            },
            "right": {
                "value": 7,
                "left": null,
                "right": null
            }
        }

and

        t2 = {
            "value": 10,
            "left": {
                "value": 4,
                "left": {
                    "value": 1,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": 2,
                    "left": null,
                    "right": null
                }
            },
            "right": {
                "value": 6,
                "left": null,
                "right": {
                    "value": -1,
                    "left": null,
                    "right": null
                }
            }
        }

the output should be solution(t1, t2) = false.

This is what these trees look like:

                t1:            t2:
                 5             10
               /   \          /  \
             10     7        4    6
           /    \           / \    \
          4     6          1   2   -1
         / \   /
        1   2 -1

As you can see, there is no vertex v such that the subtree of t1 for vertex v equals t2.

For

        t1 = {
            "value": 1,
            "left": {
                "value": 2,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        }

and

        t2 = {
            "value": 2,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": null
        }

the output should be solution(t1, t2) = false.

`Return true if t2 is a subtree of t1, otherwise return false.`

## 💎restoreBinaryTree

### Task

Note: Your solution should have O(inorder.length) time complexity, since this is what you will be asked to accomplish in an interview.

Let's define inorder and preorder traversals of a binary tree as follows:

Inorder traversal first visits the left subtree, then the root, then its right subtree;
Preorder traversal first visits the root, then its left subtree, then its right subtree.
For example, if tree looks like this:

            1
           / \
          2   3
         /   / \
        4   5   6

then the traversals will be as follows:

Inorder traversal: `[4, 2, 1, 5, 3, 6]`
Preorder traversal: `[1, 2, 4, 3, 5, 6]`
Given the inorder and preorder traversals of a binary tree t, but not t itself, restore t and return it.

Example

For inorder = [4, 2, 1, 5, 3, 6] and preorder = [1, 2, 4, 3, 5, 6], the output should be

        solution(inorder, preorder) = {
            "value": 1,
            "left": {
                "value": 2,
                "left": {
                    "value": 4,
                    "left": null,
                    "right": null
                },
                "right": null
            },
            "right": {
                "value": 3,
                "left": {
                    "value": 5,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": 6,
                    "left": null,
                    "right": null
                }
            }
        }

For inorder = [2, 5] and preorder = [5, 2], the output should be

        solution(inorder, preorder) = {
            "value": 5,
            "left": {
                "value": 2,
                "left": null,
                "right": null
            },
            "right": null
        }

## 💎findSubstrings

### Task

You have two arrays of strings, words and parts. Return an array that contains the strings from words, modified so that any occurrences of the substrings from parts are surrounded by square brackets [], following these guidelines:

If several parts substrings occur in one string in words, choose the longest one. If there is still more than one such part, then choose the one that appears first in the string.

### Example

```
For words = ["Apple", "Melon", "Orange", "Watermelon"] and parts = ["a", "mel", "lon", "el", "An"], the output should be
solution(words, parts) = ["Apple", "Me[lon]", "Or[a]nge", "Water[mel]on"].

While "Watermelon" contains three substrings from the parts array, "a", "mel", and "lon", "mel" is the longest substring that appears first in the string.
```

[![back to readme](https://img.shields.io/badge/⬅%20BACK-blue)](../README.md)
