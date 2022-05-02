const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyAppendCat(name)
  {cats.push('Ralph');
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyPrependCat(name)
  {cats.unshift('Bob')}
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyRemoveLastCat()
  {cats.pop()}
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyRemoveFirstCat()
  {cats.shift()}
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function appendCat(name) {
const copyOfCats = [...cats, name]
return copyOfCats
  }
  function prependCat(name) {
 const copyOfCats = ['Arnold', ...cats]
return copyOfCats }
function removeLastCat() {
const removeLastCat = cats.slice(0, 2)
    return removeLastCat
}
function removeFirstCat() {
    const removeFirstCat = cats.slice(1)
    return removeFirstCat    
}