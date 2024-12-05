function inputValidation(inputValue) {
  const arr = inputValue.split('');
  const stack = [];
  let matchingBracket = {
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < arr.length; i++) {
    if (['[', '{'].includes(arr[i])) stack.push(arr[i]);
    else if (
      stack.length > 0 &&
      stack[stack.length - 1] === matchingBracket[arr[i]]
    )
      stack.pop();
    else return 'Not Valid';
  }

  return stack.length == 0 ? 'Valid' : 'Not Valid';
}

const inputValidationValue1 = '{[]}';
const inputValidationValue2 = '{{{[]}}}';
const inputValidationValue3 = '[[{}]]';
const inputValidationValue4 = '{[[}]}';

console.log(inputValidation(inputValidationValue1));
console.log(inputValidation(inputValidationValue2));
console.log(inputValidation(inputValidationValue3));
console.log(inputValidation(inputValidationValue4));
