import axios from 'axios'

export default axios.create({
    baseURL: 'https://quiet-lake-29855.herokuapp.com/api/cities'
});