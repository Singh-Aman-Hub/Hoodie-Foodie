import API from '../utils/axiosConfig';



// POST dish
export const recommendDish = (dishData) => API.post('/menu/recommend', dishData);

// GET all dishes
export const fetchMenuItems = () => API.get('/menu');

export default API;