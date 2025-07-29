import {getJSON, BASE_URL, postJSON} from './index'

const blogAPI = {
    getAll() {
        const data = getJSON(`${BASE_URL}/blogs`)
        return data;
    }
}

export default blogAPI;