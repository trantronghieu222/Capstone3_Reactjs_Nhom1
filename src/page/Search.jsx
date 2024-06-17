import React from 'react'

const Search = () => {
    return (
        <div>
            <section className='search'>
                <div className="search__content">
                    <div className="search__box container">
                        <label for="" class="form-label">Search</label>
                        <form action="" className='d-flex'>
                            <input
                                type="text"
                                class=""
                                name="search"
                                id=""
                                aria-describedby="helpId"
                                placeholder="product name..."
                            />
                            <button
                                type="button"
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
                                name=""
                                id=""
                            >
                                <option selected>decrease</option>
                                <option value="">ascending</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className="product container">
                        <div className="row">
                            <div className="col-4">
                                <div className="product__item">
                                    <div className="item__img"><img src="/images/image5.png" alt="" /></div>
                                    <div className="item__content">
                                        <h5>Adidas Prophere</h5>
                                        <p>short descript ...</p>
                                    </div>
                                    <div className="item__btn">
                                        <button className='w-100'>Buy now</button>
                                        <button className='w-100'>85$</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="product__item">
                                    <div className="item__img"><img src="/images/image5.png" alt="" /></div>
                                    <div className="item__content">
                                        <h5>Adidas Prophere</h5>
                                        <p>short descript ...</p>
                                    </div>
                                    <div className="item__btn">
                                        <button className='w-100'>Buy now</button>
                                        <button className='w-100'>85$</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="product__item">
                                    <div className="item__img"><img src="/images/image5.png" alt="" /></div>
                                    <div className="item__content">
                                        <h5>Adidas Prophere</h5>
                                        <p>short descript ...</p>
                                    </div>
                                    <div className="item__btn">
                                        <button className='w-100'>Buy now</button>
                                        <button className='w-100'>85$</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="product__item">
                                    <div className="item__img"><img src="/images/image5.png" alt="" /></div>
                                    <div className="item__content">
                                        <h5>Adidas Prophere</h5>
                                        <p>short descript ...</p>
                                    </div>
                                    <div className="item__btn">
                                        <button className='w-100'>Buy now</button>
                                        <button className='w-100'>85$</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Search