import styles from './BrandsDetails.module.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';
export default function BrandsDetails() {

            
    let {id} =useParams();
    async function getBrandsDetails(){
    let {data} =await axios.get(`https://route-ecommerce.onrender.com/api/v1/brands/${id}`)
    setBrandsDetails(data.data);  
}
useEffect(()=>{
    getBrandsDetails()
}, [] )




const [Brand, setBrandsDetails] = useState([])
    return <>
     <Helmet>
            <title>Brands Details</title>
        </Helmet>
    {Brand.length!==0?<div className="container"> 
<div className="row justify-content-center text-center">
    <div className="col-md-4 col-3 ">
<img src={Brand.image} alt="" height={500}  className='w-100'/>
<h2 className='text-main'>{Brand.name}</h2>
    </div>
</div>
</div>
:<Loading/>}

    </>
}

