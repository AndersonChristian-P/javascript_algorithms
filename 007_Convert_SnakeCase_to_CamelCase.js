// convert snake case to camel case

const toCamelCase = snakeCase => {
  return snakeCase.replace(/([-_][a-z])/ig, $1 => {
    return $1.toUpperCase()
      .replace("-", "")
      .replace("_", "")
  })
}

/* First do a regex replace on the string, searching for either a dash or an underscore, followed by a letter a-z. The i at the end of the regex tells it to ignore case, so we match kebab-case as well as kebab-Case, converting both to kebabCase. If, for some reason you need to treat those differently, just remove the i and your regex is case sensitive.

We wrap our matches in parenthesis, ([-_][a-z]),which turns them into the matching group $1. If we were converting the string snake_case with this function, the variable $1 would be _c. We then use the JS built-in function toUpperCase to convert the matching substring to uppercase, and finally remove the dashes and underscores. */