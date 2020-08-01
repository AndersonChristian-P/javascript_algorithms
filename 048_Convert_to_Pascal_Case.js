// capitalize each element in the list - change each element to Pascal Case

let listOfCities = ['denver', 'philadelphia', 'chicago', 'dallas', 'seattle'];

// ---------

const pascalCase = cityArr => {
  for (let i = 0; i < cityArr.length; i++) {
    let tempArr = cityArr[i].split('');
    tempArr[0] = tempArr[0].toUpperCase();
    cityArr[i] = tempArr.join('');
  }

  return cityArr;
}

console.log(pascalCase(listOfCities));