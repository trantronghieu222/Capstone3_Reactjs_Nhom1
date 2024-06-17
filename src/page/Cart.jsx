import React from 'react'

const Cart = () => {
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
                                <tr class="table-item">
                                    <td scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="" />
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td><img src="./images/image5.png" alt="" width={50} /></td>
                                    <td>Product1</td>
                                    <td>1000</td>
                                    <td>
                                        <button className='btn-plus'> + </button>
                                        <span className='quantity-val'> 1 </span>
                                        <button className='btn-minus'> - </button>
                                    </td>
                                    <td>1000</td>
                                    <td>
                                        <button className='btn-edit'>EDIT</button>
                                        <button className='btn-del'>DELETE</button>
                                    </td>
                                </tr>
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