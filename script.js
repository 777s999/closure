//closure

function person1() {
  var name = "devo";
  function person2() {
    console.log(name);
  }
  person2();
}
person1();
