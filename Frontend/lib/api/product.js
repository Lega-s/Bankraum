import {getJSON, BASE_URL, postJSON} from './index'

const productAPI = {
    getAll() {
        const data = getJSON(`${BASE_URL}/products`)
        return data;
    }
}

export default productAPI;