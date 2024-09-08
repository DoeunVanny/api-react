import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { productAPI } from '../services/productAction';
import {  useNavigate } from 'react-router-dom';

export default function Dashboard () {

    const navigate = useNavigate()
    const [filterProducts , setProducts] =  useState([])
    const [search,setSearch] = useState("")
    const columns = [
        {
            name: "ID",
            selector: row => row.id
        },
        {
            name: "Title",
            selector: row => row.title
        },
        {
            name: "Price",
            selector: row => row.price
        },
        {
            name: "photos",
            selector: row =>  <img src={ row.images[0]} width={100} height={50} alt='product'></img>
        },
        {
            name: "Action",
            selector: row =>  <button type='button' onClick={() => navigate("/edit",{
                state: row
            })}>Edit</button>
        },
    ];

    useEffect(() => {
        productAPI()
        .then(resp => setProducts(resp))
    },[])

    useEffect(() => {
         const result = filterProducts.filter(pro => {
            return pro.title && pro.title.toLowerCase().match(search.toLowerCase())
         })
         setProducts(result)
    },[search])
  return (
     <main className='container'>
          <DataTable

             columns={columns}
             data={filterProducts}
             pagination

             subHeader
             subHeaderComponent={
                <input
                      type='text'
                      placeholder='search  here'
                      className='form-control'
                      value={search}
                      onChange={ 
                        (e) =>  {setSearch(e.target.value) 
                            console.log(search)
                        }}
                />
             }
          
          />
     </main>
  )
}
