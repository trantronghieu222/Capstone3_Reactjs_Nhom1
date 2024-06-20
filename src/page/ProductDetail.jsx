import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { addToCart } from '../redux/reducers/CartReducer';
import { useDispatch } from 'react-redux';
const ProductDetail = () => {
    const [prodDetail, setProductDetail] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();

    const getProductDetail = async () => {
        const res = await axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${params['id-product']}`);
        setProductDetail(res.data.content);
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    const handleAddToCart = () => {
        const product = {
            id: prodDetail.id,
            img: prodDetail.image,
            name: prodDetail.name,
            price: prodDetail.price,
            quantity: quantity
        };
        dispatch(addToCart(product));
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); 
    };

    return (
        <div>
            {showAlert && (
                <div className="alert alert-success d-flex align-items-center alert-fixed" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
                        <use xlinkHref="#check-circle-fill" />
                    </svg>
                    <div>
                        Sản phẩm đã được thêm vào giỏ hàng
                    </div>
                </div>
            )}
            <section className='prodDetail container'>
                <div className="row">
                    <div className="col-5">
                        <div className="prodDetail__img">
                            <img src={prodDetail.image} alt="" />
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="prodDetail__content">
                            <h3>{prodDetail.name}</h3>
                            <p>{prodDetail.description}</p>
                            <p className='sizeTitle'>Available size</p>
                            <div className="size-btn">
                                {
                                    prodDetail.size?.map((size) => {
                                        return <button>{size}</button>

                                    })
                                }
                            </div>

                            <p className='prod-price'>{prodDetail.price}$</p>
                            <div className="quantity-box">
                                <button onClick={() => {
                                    const newQuan = quantity + 1;
                                    setQuantity(newQuan);
                                }}>+</button>
                                <span>{quantity}</span>
                                <button onClick={() => {
                                    if (quantity > 1) {
                                        const newQuan = quantity - 1;
                                        setQuantity(newQuan);
                                    }
                                    else {
                                        setQuantity(1);
                                    }
                                }}>-</button>
                            </div>
                            <button className='btn-add-to-cart' onClick={
                                handleAddToCart
                            }>Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='realateProduct'>
                <div className="realateProduct-content">
                    <h1 className='realateProduct-title'>-Realate Product -</h1>
                    {/* <p>param = {params['id-product']}</p> */}
                </div>
            </section>
        </div>
    )
}

export default ProductDetail