const getSausage = function () {
  return 'hotdog sausage';
};
const frySausage = function () {
  return 'fried sausage';
};
const getBuns = function () {
  return 'dressed hotdog bun';
};
const placeHotDogSausageOnBuns = function () {
  return 'yummy hotdog';
};
const serve = function (hotdog) {
  console.log(`Et voila - a ${hotdog} is now served. Bon Appétit!!!`);
};

const cookHotDog = () => {
  try {
    let sausage = getSausage();
    console.log(`We have a ${sausage}`);

    let friedSausage = frySausage(sausage);
    console.log(`Now we have a ${friedSausage}`);

    let buns = getBuns();
    console.log(`We have a ${buns}`);

    let hotdog = placeHotDogSausageOnBuns(buns, sausage);
    console.log(`We have now prepared a ${hotdog} to be served`);

    return hotdog;
  } catch (error) {
    console.log(error);
  }
};

const wrapHotDog = async () => {
  try {
    let myHotdog = await cookHotDog();
    serve(myHotdog);
  } catch (error) {
    console.log(error);
  }
};

wrapHotDog();
