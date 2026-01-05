import axios from "axios";

const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
    return res.data;
}

export default getData;
