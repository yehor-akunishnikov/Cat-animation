const main = document.getElementById('main');
const cat = document.querySelector('.cat');
const catParts = cat.querySelectorAll('.cat-part');

const getAvailableNumbers = () => {
  return [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];
};

const paintCat = () => {
  const availableNumbers = getAvailableNumbers();

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
