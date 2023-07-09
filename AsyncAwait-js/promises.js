let sausage = 'hotdog sausage';
const getSausage = (sausage) => {
  return new Promise((resolve, reject) => {
    resolve('fried sausage');
    //for the errors
    reject('Error');
    console.log(`We have a ${sausage}`);
  });
};
const frySausage = (isFried) => {
  return new Promise((resolve, reject) => {
    resolve('dressed hotdog bun');
    reject('Error');
    console.log(`Now we have a ${isFried}`);
  });
};
const getBuns = (buns) => {
  return new Promise((resolve, reject) => {
    resolve('yummy hotdog');
    reject('Error');
    console.log(`We have a ${buns}`);
  });
};
const placeHotDogSausageOnBuns = (hotdog) => {
  return new Promise((resolve, reject) => {
    resolve('yummy hotdog');
    reject('Error');
    console.log(`We have now prepared a ${hotdog} to be served`);
  });
};

const serve = (plate) => {
  return new Promise((resolve, reject) => {
    resolve('');
    reject('Error');
    console.log(`Et voila - a ${plate} is now served. Bon Appétit!!!`);
  });
};

getSausage(sausage)
  .then(frySausage)
  .then(getBuns)
  .then(placeHotDogSausageOnBuns)
  .then(serve)
  .catch((error) => {
    console.log(error);
  });
