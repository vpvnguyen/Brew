import axios from 'axios'

export default axios.create({
    baseURL: 'http://ec2-3-14-27-130.us-east-2.compute.amazonaws.com/api/cities'
});