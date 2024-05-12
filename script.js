function toCase(text) {
  // Handle empty string case
  if (!text) {
    return "-";
  }

  // Convert the string to lowercase and uppercase
  const lowerCaseText = text.toLowerCase();
  const upperCaseText = text.toUpperCase();

  // Concatenate the lowercase and uppercase versions with a hyphen as the delimiter
  const result = lowerCaseText + "-" + upperCaseText;

  // Return the result
  return result;
}

// Test cases
console.log(toCase('Mthatha')); // 'mthatha-MTHATHA'
console.log(toCase('HelloWorld')); // 'helloworld-HELLOWORLD'
console.log(toCase('OpenAI')); // 'openai-OPENAI'
console.log(toCase('')); // '-'


// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
