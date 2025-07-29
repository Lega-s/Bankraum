function createFetchFunction(method) {
    return async (url, params) => {
        const _params = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            ...params
        }

        if (_params.body !== null && _params.body !== undefined) {
            _params.body = JSON.stringify(_params.body)
        }

        const response = await fetch(url, _params)

        if (!response.ok) {
            const text = await response.text();
            const error = new Error(`Request failed with status ${response.status}: ${text}`);
            error.response = response;
            throw error;
        }

        const contentType = response.headers.get("content-type");
        if (response.status === 204 || !contentType || !contentType.includes("application/json")) {
            return null;
        }

        const data = await response.json();
        return data;
    }
}



export const postJSON = createFetchFunction("POST")
export const putJSON = createFetchFunction("PUT")
export const deleteJSON = createFetchFunction("DELETE")
export const getJSON = createFetchFunction("GET")
export const BASE_URL = "http://localhost:3001"