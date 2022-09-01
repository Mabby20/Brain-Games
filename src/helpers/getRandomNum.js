export default (index = 10, method = 'ceil') => (method === 'ceil' ? Math.ceil(Math.random() * index) : Math.floor(Math.random() * index));
