[![back to readme](https://img.shields.io/badge/⬅%20BACK-blue)](../README.md)

# Heap, Stacks, Queues

## 💎kthLargestElement

### Task

Note: Avoid using built-in `std::nth_element` (or analogous built-in functions in languages other than C++) when solving this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

Find the `kth` largest element in an unsorted array. This will be the kth largest element in sorted order, not the kth distinct element.

### Example

```
For nums = [7, 6, 5, 4, 3, 2, 1] and k = 2, the output should be
solution(nums, k) = 6;
For nums = [99, 99] and k = 1, the output should be
solution(nums, k) = 99.
```

## 💎simplifyPath

### Task

Given an absolute file path (Unix-style), shorten it to the format `/<dir1>/<dir2>/<dir3>/...`.

Here is some info on Unix file system paths:

- `/` is the root directory; the path should always start with it even if it isn't there in the given `path`;
- `/` is also used as a directory separator; for example, `/code/fights` denotes a `fights` subfolder in the `code` folder in the root directory;
  - this also means that `//` stands for "change the current directory to the current directory"
- `.` is used to mark the current directory;
- `..` is used to mark the parent directory; if the current directory is root already, `..` does nothing.

### Example

For path = `"/home/a/./x/../b//c/"`, the output should be
`solution(path) = "/home/a/b/c"`.

Here is how this path was simplified:

- `/./` means "move to the current directory" and can be replaced with a single `/`;
- `/x/../` means "move into directory `x` and then return back to the parent directory", so it can replaced with a single `/`;
- `//` means "move to the current directory" and can be replaced with a single `/`.

---

[![back to readme](https://img.shields.io/badge/⬅%20BACK-blue)](../README.md)
