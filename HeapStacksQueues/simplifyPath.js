function simplifyPath(path) {
  const directories = path.split("/");
  const stack = [];

  for (const dir of directories) {
    if (dir === "." || dir === "") {
      continue;
    } else if (dir === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(dir);
    }
  }

  const shortenedPath = "/" + stack.join("/");

  return shortenedPath;
}
