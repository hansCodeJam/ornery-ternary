function isHot(temp) {
  let temp1 = (temp >= 80) ? "Yes, it is indeed hot." : "No, it is not hot.";
  return temp1;
}


function helloThere(name) {
  let name1 = (name.length < 6) ? `Hello, ${name}` : `Hi, ${name}`;
  return name1;
}


function goodbyeYou(name) {
  let name1 = (typeof(name) === 'string') ? `Goodbye, ${name}` : `Goodbye, stranger`;
  return name1;
}



module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}