import React from 'react'
import CarouselShop from '../components/CarouselShop'

const Home = () => {
  return (
    <div>
      <CarouselShop></CarouselShop>
      <section className='feature'>
        <div className="feature__title">
          <p>Product Feature</p>
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
      </section>
    </div>
  )
}

export default Home