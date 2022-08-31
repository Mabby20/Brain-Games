export default (roundingMethod = Math.ceil, index = 10) => {
  const randomNum = roundingMethod(Math.random() * index);
  return randomNum;
};
