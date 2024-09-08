import React, { useEffect, useState } from "react";
import { fileUploadToServer, insertProduct, productCategories, updateProduct } from "../services/productAction";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductCategories } from "../redux/actions/productActions";

export default function ProductForm({edit}) {

    // get data from navigetion
    const location = useLocation()

    const dispatch = useDispatch()
    const {categories } = useSelector(state => state.prodReducer)
    // local state
   // const [categories, setCategories] = useState([])
    const  [source,setSource] = useState("")
    const [product, setProduct] = useState({
        id: 0,
        title: "Hello",
        price: 0,
        description: "",
        categoryId: 1,
        images: [
            "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
        ]
    })
    const onChangehander = (e) => {
        const { name, value } = e.target
        setProduct(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        console.log(product)
    }
    const onPreviewImage = (e) => {
        console.log(e.target.files)
        setSource(e.target.files[0])
    }

    const onHandleSubmit = () => {
        console.log('submit')


        // create  image object as form data
        // const formData = new FormData()
        // formData.append("file" , source) 
        // function upload image to server
        // fileUploadToServer(formData)
        // .then(resp => {
        //     product.images = [resp.data.location]
        //     insertProduct(product)
        //     .then(res => res.json())
        //     .then(resp => console.log(resp))
        // })
        // insertProduct(product)
        // .then(resp => {
        //     resp.json()
        //     if(resp.status === 201){
        //         alert("Created successfully!")
        //     }

        //     console.log(resp)
        // }
        //     )

        if(edit){
             if(source === ""){
                console.log("Product id :" , product.id)
                updateProduct(product , product.id)
                .then(res => res.json())
                .then(res => console.log(res))
             }
             else{
                const image = new FormData()
                image.append("file", source)
                fileUploadToServer(image)
                .then(resp => {
                    product.images = [resp.data.location]
                    updateProduct(product, product.id)
                    .then(res => res.json())
                    .then(res => console.log(res))
                 })
             }
            
        }else{
              // Insert New Product
            // this will excecute when user insert new product 
            // no need to check image old or new because user must be upload new image
            // ---create image object as form data
            const image = new FormData()
            image.append("file", source)
            // ----- function to upload image data to server ---
            fileUploadToServer(image)
            .then(res => {
                product.images = [res.data.location]
                console.log(product.images)
                // --- insert product including image
                insertProduct(product)
                .then(res => res.json())
                .then(resp => console.log(resp))
            })
            // ----- end function
        }

    }

    useEffect(() => {
        console.log(edit)
        if(edit){
            console.log(location.state)
            const {id, title , price , description , images , category} = location.state
            product.id = id
            product.title = title 
            product.description = description
            product.categoryId = category
            product.price = price 
            product.images = images
        }

        dispatch(fetchProductCategories())
       // productCategories()
        //    .then(resp => setCategories(resp))
    }, [])
    return (
        <main className="container">
            <div className="mb-3">
                <label for="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    value={product.title}
                    className="form-control"
                    name="title"
                    placeholder="title"
                    onChange={onChangehander}
                />
            </div>
            <div className="mb-3">
                <label for="price" className="form-label">
                    Price
                </label>
                <input type="text" className="form-control" name="price" value={product.price} placeholder="300$" onChange={onChangehander} />
            </div>
            <div className="mb-3">
                <label for="" className="form-label">
                    Choose Category
                </label>
                <select className="form-select" name="categoryId" value={product.categoryId} aria-label="Default select example" onChange={onChangehander}>
                    <option selected>Open this select Category</option>
                    {
                        categories.map((cat) => (
                            <option value={cat.id}>{cat.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">
                    Description
                </label>
                <textarea className="form-control" name="description" value={product.description} rows="3" onChange={onChangehander}></textarea>
            </div>
             <div className="mb-3">
                   <img src={ source === "" ? product.images[0] :  URL.createObjectURL(source)} width={200} />
             </div>
            <div className="mb-3">
                <input type="file" onChange={onPreviewImage} ></input>
            </div>
            <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={() =>onHandleSubmit()}
            >{edit ? "updateProduct" : "Insert Product"}</button>
        </main>
    );
}
