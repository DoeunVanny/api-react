import { useEffect, useState } from 'react';
import Card from '../components/Card';
import LoadingView from '../components/LoadingView';
import { Link } from 'react-router-dom';
import { productAPI } from '../services/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, fetchProductCategories } from '../redux/actions/productActions';


export default function Home() {

  const dispatch = useDispatch()
  const {products} = useSelector(state => state.prodReducer)
  const {isLoading} = useSelector(state => state.prodReducer)

  useEffect(() => {
    // subscribe to store
    dispatch(fetchAllProducts())
    console.log(products)
}, [])

  // local state
    // const [product , setProduct] = useState([])
    // const  [isLoading , setLoading] = useState(true)
   

    // useEffect(() =>{
    //     productAPI()
    //     .then(resp => {
    //       setLoading(false)
    //       setProduct(resp)}) 
    // }, [])
     
    const [count , setCount ] = useState(0);
  return (
      <>
          {/* <h1>You Clicked { count }  time </h1>
          <button onClick={() => setCount(count + 1)} >Click me</button> */}
          
          
      
      <main  className='container'>
            <h2>Product list</h2>
           <div className='row g-4'>
                {  
                       isLoading   ?  

                        <div className='col-12 col-md-3'>
                           <LoadingView/>
                        </div>

                       :
                    
                  products.map((p) => (
                      <div 
                          key={p.id}
                          className='col-12 col-sm-6 col-md-3 col-lg-2'>
                          <Link 
                              to={`/read/${p.id}`}
                              className='text-decoration-none'
                          >
                              <Card 
                                  imageURL={p.images[0]}
                                  title={p.title}
                              />
                          </Link>
                      </div>
                  ))
                  
                }
           </div>
           
        </main>
         
      </>
  )
}
