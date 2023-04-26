function groupingDishes(dishes) {
  const ingredientObj = {};
  for (const dish of dishes) {
    const [dishName, ...ingredients] = dish;
    for (const ingredient of ingredients) {
      if (!ingredientObj[ingredient]) {
        ingredientObj[ingredient] = [];
      }
      ingredientObj[ingredient].push(dishName);
    }
  }

  const commonIngredients = Object.entries(ingredientObj)
    .filter(([ingredient, dishes]) => dishes.length > 1)
    .sort();

  const result = commonIngredients.map(([ingredient, dishes]) => {
    return [ingredient, ...dishes.sort()];
  });

  return result;
}
