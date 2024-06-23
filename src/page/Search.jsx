import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductApi } from '../redux/reducers/ProductReducer';
import { useFormik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
const Search = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [arrProduct, setArrProduct] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc');

    const frmSearch = useFormik({
        initialValues: {
            keywork: '',
        },
        onSubmit: (values) => {
            setSearchParam({
                k: values.keywork
            })
        }
    })


    const getAllProductByKeyword = async () => {
        const k = searchParam.get('k')
        const res = await axios.get(`https://shop.cyberlearn.vn/api/Product?keyword=${k}`);
        setArrProduct(res.data.content);
        // console.log(res.data.content)
    }

    useEffect(() => {
        // console.log(searchParam.get('k'))
        getAllProductByKeyword();
    }, [searchParam.get('k')])

    useEffect(() => {
        if (arrProduct.length > 0) {
            setArrProduct(_.orderBy(arrProduct, ['price'], [sortOrder]));
        }
    }, [sortOrder]);

    return (
        <div>
            <section className='search'>
                <div className="search__content">
                    <div className="search__box container">
                        <label for="" class="form-label">Search</label>
                        <form action="" className='d-flex' onSubmit={frmSearch.handleSubmit}>
                            <input
                                type="text"
                                class=""
                                name="keywork"
                                id=""
                                aria-describedby="helpId"
                                placeholder="product name..."
                                onInput={frmSearch.handleChange}
                            />
                            <button
                                type="submit"
                            >
                                SEARCH
                            </button>

                        </form>
                    </div>
                    <div className="search__title">
                        <h1>Search result</h1>
                    </div>
                    <div className="search__filter container">
                        <div class="mb-3 mt-5">
                            <label for="" class="form-label">Price</label>
                            <select
                                class="form-select form-select-lg"
                                name="sortOrder"
                                id="sortOrder"
                                onChange={(e) => setSortOrder(e.target.value)}
                                defaultValue="desc"
                            >
                                <option value="desc">decrease</option>
                                <option value="asc">ascending</option>
                            </select>
                        </div>

                    </div>
                    <div className="product container">
                        <div className="row">
                            {
                                arrProduct.map((prod, index) => {
                                    return (
                                        <div className="col-4" key={index}>
                                            <div className="product__item">
                                                <div className="item__img"><img src={prod.image} alt="" /></div>
                                                <div className="item__content">
                                                    <h5>{prod.name}</h5>
                                                    <p>{prod.shortDescription}</p>
                                                </div>
                                                <div className="item__btn">
                                                    <button className='w-100'><a className='' href={`/prodDetail/${prod.id}`}>Buy Now</a></button>
                                                    <button className='w-100'>{prod.price}$</button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Search