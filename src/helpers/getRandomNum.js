export default (index = 10, method = 'ceil') => {
  if (method === 'ceil') {
    return Math.ceil(Math.random() * index);
  }
  if (method === 'floor') {
    return Math.floor(Math.random() * index);
  }
  return Math.ceil(Math.random() * index);
};
