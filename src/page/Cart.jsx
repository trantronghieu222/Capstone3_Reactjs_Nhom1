import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeQuantity, delProdCart, updateItems, clearCart } from '../redux/reducers/CartReducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios để gửi yêu cầu HTTP

const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.UserReducer.userLogin); // Khai báo lại userLogin
    const navigate = useNavigate();

    // Hàm thay đổi số lượng
    const handleQuantityChange = (id, quantity) => {
        dispatch(changeQuantity({ id, quantity }));
    };

    // Hàm xoá sp
    const handleDelCart = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?")) {
            dispatch(delProdCart(id));
        }
    }

    // Hàm xử lý chọn sản phẩm
    const handleSelectItem = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, selected: !item.selected };
            }
            return item;
        });
        dispatch(updateItems(updatedCartItems));
    };

    // Hàm gửi yêu cầu đặt hàng
    const handleCheckOut = async () => {
        if (userLogin) {
            // Lọc các sản phẩm đã được chọn (tích checkbox)
            const selectedItems = cartItems.filter(item => item.selected);

            if (selectedItems.length === 0) {
                alert("Vui lòng chọn ít nhất một sản phẩm để đặt hàng.");
                return;
            }

            // Tạo dữ liệu gửi đi
            const orderData = {
                orderDetail: selectedItems.map(item => ({
                    productId: item.id,
                    quantity: item.quantity
                })),
                email: userLogin.email
            };

            try {
                // Gửi yêu cầu POST tới API
                const response = await axios.post('https://shop.cyberlearn.vn/api/Users/order', orderData);
                alert("Đặt hàng thành công!");
                console.log(response.data);
                dispatch(clearCart());
            } catch (error) {
                console.error("Đặt hàng thất bại:", error);
                alert("Đặt hàng thất bại. Vui lòng thử lại sau.");
            }
        } else {
            alert("Bạn cần đăng nhập để có thể mua hàng!");
            navigate('/login');
        }
    }

    return (
        <div>
            <section className='cart container'>
                <div className="cart__title">
                    <h3>Carts</h3>
                </div>
                <div className="cart__content">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr className='table-title'>
                                    <th scope="col">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" checked/>
                                        </div>
                                    </th>
                                    <th scope="col">id</th>
                                    <th scope="col">img</th>
                                    <th scope="col">name</th>
                                    <th scope="col">price</th>
                                    <th scope="col">quantity</th>
                                    <th scope="col">total</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr className="table-item" key={index}>
                                        <td scope="row">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id=""
                                                    checked={item.selected || false}
                                                    onChange={() => handleSelectItem(item.id)} // Thay đổi trạng thái khi tick
                                                />
                                            </div>
                                        </td>
                                        <td>{item.id}</td>
                                        <td><img src={item.img} alt="" width={100} /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button className='btn-plus' onClick={() => handleQuantityChange(item.id, 1)}> + </button>
                                            <span className='quantity-val'> {item.quantity} </span>
                                            <button className='btn-minus' onClick={() => handleQuantityChange(item.id, -1)}> - </button>
                                        </td>
                                        <td>{item.price * item.quantity}</td>
                                        <td>
                                            <button className='btn-edit'>EDIT</button>
                                            <button className='btn-del' onClick={() => handleDelCart(item.id)}>DELETE</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Button submit */}
                        <button type='submit' className='btn-submit' onClick={handleCheckOut}>SUBMIT ORDER</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;
