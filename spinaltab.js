function spinalCase(str) {
  // Create a variable for the white space and underscores.
  // /\s for white spaces
  // g means global search in string
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  console.log('str : ' , str);
  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

