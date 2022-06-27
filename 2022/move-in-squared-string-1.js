function vertMirror(strng) {
  // Your code
  if (!strng) {
    return "";
  }

  let splitted = strng.split("\n");

  for (let i = 0; i < splitted.length; i++) {
    splitted[i] = splitted[i].split("").reverse().join("");
  }
  return splitted.join("\n");
}

function horMirror(strng) {
  // Your code
  if (!strng) {
    return;
  }

  strng = strng.split("\n").reverse();

  return strng.join("\n");
}
function oper(fct, s) {
  // Your code
  console.log(s);
  return fct(s);
}
