import axios from "axios";
import { TOKEN_AUTHOR, getDataTextStorage, setDataTextStorage } from "./utilFuntion";
import { navigateHistory } from "../main";
import * as jwtDecode from 'jwt-decode';

// Hàm kiểm tra token hết hạn
function isTokenExpired(token) {
    try {
        const decodedToken = jwtDecode.jwtDecode(token);
        console.log(decodedToken)
        const expirationTime = new Date(decodedToken.exp * 1000); // Convert to milliseconds
        const currentTime = new Date();
        return expirationTime < currentTime;
    } catch (error) {
        // Xử lý lỗi nếu token không hợp lệ
        console.error('Invalid token:', error);
        return true; // Giả sử token hết hạn nếu không giải mã được
    }
}

// Sử dụng hàm kiểm tra
const accessToken = localStorage.getItem('accessToken'); // Lấy token từ local storage
if (accessToken && !isTokenExpired(accessToken)) {
    // Token hợp lệ
    console.log('Token is valid.');
} else {
    // Token đã hết hạn hoặc không hợp lệ
    console.log('Token has expired or is invalid.');
}



// Khai báo interceptor
const httpStore = axios.create({
    baseURL: 'https://apistore.cybersoft.edu.vn',
    timeout: 30 * 1000 // mili giây = 30s huỷ request nếu không có kết quả trả về
})

// Cấu hình interceptor gửi đi mở network để xem
httpStore.interceptors.request.use((req) => {
    // console.log('token',getDataTextStorage(TOKEN_AUTHOR));
    const token = getDataTextStorage(TOKEN_AUTHOR);
    req.headers = {
        ...req.headers,
        'Authorization': token
    }
    return req;
}, err => {
    return Promise.reject(err);
});

// Cấu hình interceptor reponse (kết quả nhận về)
httpStore.interceptors.response.use((res) => {
    return res;
}, err => {
    // console.log(err.response)
    // Handle xử lý lỗi
    if (err?.response?.status === 400 || err.response.status === 404) {
        alert('Đường dẫn không hợp lệ !');
        // window.location.href = '/'
        navigateHistory.push('/');
    } else if (err.response?.status === 401) {
        // Xử lý refeshtoken
        if (isTokenExpired(localStorage.getItem(TOKEN_AUTHOR))) {
            // Gọi api refesh token
            // console.log('Token hết hạn');
            const pro = httpStore.post('/api/Users/RefeshToken');
            pro.then(res => {
                setDataTextStorage(TOKEN_AUTHOR, res.data.content.accessToken);
            })
            pro.catch(err => {
                navigateHistory.push('/login');
            })
        };

        // 401 có 2 trường hợp (không có token | token hết hạn)
        alert('Không có quyền truy cập vào trang này! yêu cầu đăng nhập');
        // window.location.href = '/login'
        navigateHistory.push('/login');
    }
    return Promise.reject(err);
})

// Các status code thường code 
/*
    200: req nhận kết quả thành công
    201: req thành công tạo dữ liệu
    400: bad request (tham số không hợp lệ) (tham số gửi đi đúng nhưng không có dữ liệu)
    404: not found (không tìm thấy địa chỉ đường dẫn) (tham số gửi đi đúng nhưng không có dữ liệu)
    401: Unauthorize - không có quyền truy cập vào API này (Token không hợp lệ hoặc thiếu token hoặc sai token)
    403: Forbiden - (token chưa đủ quyền truy cập vao API này)
    500: Error inserver (lỗi này có thể do frontend truyền giá trị không đúng format dẫn đến code server xử lý lỗi
    hoặc do frontend truyền đúng dữ liệu tuy nhiên backend trong quá trình xử lý logic code bị lỗi tại server)

*/

export { httpStore }