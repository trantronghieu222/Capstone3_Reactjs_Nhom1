import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeQuantity, delProdCart } from '../redux/reducers/CartReducer'
const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();
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
    return (
        <div>
            <section className='cart container'>
                <div className="cart__title">
                    <h3>Carts</h3>
                </div>
                <div className="cart__content">
                    <div
                        class="table-responsive"
                    >
                        <table
                            class="table"
                        >
                            <thead>
                                <tr className='table-title'>
                                    <th scope="col">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="" checked />
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
                                {
                                    cartItems.map((item, index) => {
                                        return (
                                            <tr class="table-item" key={index}>
                                                <td scope="row">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="" />
                                                    </div>
                                                </td>
                                                <td>{item.id}</td>
                                                <td><img src={item.img} alt="" width={100} /></td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <button className='btn-plus' onClick={() => {
                                                        handleQuantityChange(item.id, 1)
                                                    }}> + </button>
                                                    <span className='quantity-val'> {item.quantity} </span>
                                                    <button className='btn-minus' onClick={() => {
                                                        handleQuantityChange(item.id, -1)
                                                    }}> - </button>
                                                </td>
                                                <td>{item.price * item.quantity}</td>
                                                <td>
                                                    <button className='btn-edit'>EDIT</button>
                                                    <button className='btn-del' onClick={() => {
                                                        handleDelCart(item.id)
                                                    }}>DELETE</button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        {/* Button submit */}
                        <button type='submit' className='btn-submit'>SUBMIT ORDER</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart