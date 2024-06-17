import React, { useEffect } from 'react'
import CarouselShop from '../components/CarouselShop'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductApi } from '../redux/reducers/ProductReducer';
const Home = () => {
  const { arrProd } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  // console.log(arrProd);
  useEffect(() => {
    dispatch(getAllProductApi());
  }, [])
  return (
    <div>
      <CarouselShop></CarouselShop>
      <section className='feature'>
        <div className="feature__title">
          <p>Product Feature</p>
        </div>
        <div className="product container">
          <div className="row">
            {
              arrProd.map((prod, index) => {
                return (
                  <div className="col-4" key={index}>
                    <div className="product__item">
                      <div className="item__img"><img src={prod.image} alt="" /></div>
                      <div className="item__content">
                        <h5>{prod.name}</h5>
                        <p>{prod.shortDescription}</p>
                      </div>
                      <div className="item__btn">
                        <button className='w-100'>Buy now</button>
                        <button className='w-100'>{prod.price}$</button>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>

        </div>
      </section>
    </div>
  )
}

export default Home