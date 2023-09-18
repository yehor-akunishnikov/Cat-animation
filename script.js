const catParts = document.querySelectorAll('.cat-part');
const main = document.getElementById('main');

const paintCat = () => {
  let availableNumbers = ('' + Array(20)).split(',').map(
    function () {
      return this[0]++;
    },
    [1]
  );
  availableNumbers = [1, ...availableNumbers];

  catParts.forEach((catPart) => {
    const currentClass = catPart.getAttribute('class');
    const splittedCurrentClass = currentClass.split('cp');
    const cpNumber = Math.abs(
      parseInt(splittedCurrentClass[splittedCurrentClass.length - 1])
    );
    const cpNumberIndex = availableNumbers.findIndex((num) => num === cpNumber);
    const newCpNumber = Math.floor(
      Math.random() * (availableNumbers.length - 1 - 0) + 0
    );

    availableNumbers.splice(cpNumberIndex, 1);

    catPart.classList.remove(`cp-${cpNumber}`);
    catPart.classList.add(`cp-${availableNumbers[newCpNumber]}`);
  });
};

setInterval(() => {
  paintCat();
}, 100);
