import React from 'react'

const CarouselShop = () => {
    return (
        <div className='container p-5'>
            <div className="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-7 carousel-img p-5">
                                <img src="/images/image5.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="col-5 carousel-content">
                                <h1>Product name</h1>
                                <p>Product description ....</p>
                                <button className='btn-purchase'>Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CarouselShop