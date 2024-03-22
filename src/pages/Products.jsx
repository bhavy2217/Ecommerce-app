import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../App.css'

function Product() {
  const [product, setproduct] = useState([])
  const [search, setsearch] = useState("")
  const [limit,  setlimit]  = useState(10)
  useEffect(() => {
    getAllProducts();
  }, [search, limit])

  const getAllProducts = async () => {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${search}&limit=${limit}`)
    // console.log(response.data.products);
    setproduct(response.data.products);
    // console.log(search, 'search');
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="topnav">
        <Link className="active" to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <div className="search-container">
          <div style={{ display: 'inline-block', marginRight: '10px' }}>
            {/* <span style={{ backgroundColor: 'white', padding: '10px ' }}>Products Limit</span> */}
            <select value={limit} onChange={(e) => setlimit(e.target.value)} style={{ height: '39px' }}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          <input
            placeholder='Search here...'
            value={search}
            type='text'
            onChange={(e) => setsearch(e.target.value)}
          />
          <button type="submit"><i className="fa fa-search"></i></button>
        </div>
      </div>

      {/* <div className='container-fluid' style={{}}> */}
      <div className='' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: ' space-evenly', flexDirection: 'row' }}>
        {product.map((o) => (
          <div key={o.id} className="card" id="card" style={{ width: '300px', padding: '20px', marginBottom: '10px', marginTop: '10px' }}>
            <img src={o.thumbnail} id="card-image" alt="" style={{ width: '100%', aspectRatio: '3/2' }} />
            {/* <hr style={{ marginTop: '0px', marginBottom: '0px' }} /> */}
            <div style={{}}>
              <h4 style={{ height: '59px', margin: '0px', overflow: 'hidden' }}>{o.title}</h4>
              <span>Brand : {o.brand}</span><br />
              <span>Price : {o.price}$</span> <br />
              <span>Rating : {o.rating}/5</span><br />
              <span>Discount : {o.discountPercentage}% </span>
              <span style={{float:'right'}}><Link to={`/products/${o.id}`}>Cart</Link></span>
              {/* <span>{e.category}</span><br /> */}
              {/* <p style={{ marginTop: "0px", marginBottom: '0px' }}>{e.description}</p> */}
              {/* <Rating initialValue={e.rating} readOnly style={{}} /> */}
            </div>
            <div id='viewDetails' style={{ padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', justifyContent:'space-evenly' }}>
              <Link to={`/products/${o.id}`}>View More</Link>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  )
}

export default Product
