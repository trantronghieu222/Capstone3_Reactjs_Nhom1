const TOKEN_AUTHOR = 'accessToken';
export const USER_LOGIN = 'userLogin';
// Lưu vào localStored
const getDataTextStorage = (storeName) => {
    if (localStorage.getItem(storeName)){
        return localStorage.getItem(storeName);
    }
    return null;
}

const getDataJsonStorage = (storeName) => {
    if (localStorage.getItem(storeName)){
        return JSON.parse(localStorage.getItem(storeName));
    }
    return null;
}

const setDataTextStorage = (storeName, data) => {
    localStorage.setItem(storeName, data);
}

const setDataJsonStorage = (storeName, data) => {
    localStorage.setItem(storeName, JSON.stringify(data));
}

export { getDataTextStorage, getDataJsonStorage, setDataTextStorage, setDataJsonStorage, TOKEN_AUTHOR }