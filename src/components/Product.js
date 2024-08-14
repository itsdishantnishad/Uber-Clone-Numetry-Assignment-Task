import React from 'react'
import "./Product.css"
const Product = () => {
  return (
   <>
   <h2>Product Services</h2>
    <div className='product-container'>
       <div id="card-container-pro">
          <div className="card">
            <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKqzrE2hZnTGh65h_SlXd8X8V75HXdXC3Eg&s" alt="cones-img"></img>
           <strong className="title">Pizza</strong><br></br>
           <span className="price">Price <strong>:15-350</strong></span><br></br>
           <del>Discount <strong>:20%</strong></del><br></br>
           <span>voluptatem amet autem illum adipisci</span>
           <span>voluptatem amet autem illum adipisci</span>
          </div>
          <div className="card">
            <img className="img" src="https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg" alt="juices-img"></img>
           <strong className="title">Food</strong><br></br>
           <span className="price">Price <strong>:40-550</strong></span><br></br>
           <del>Discount <strong>:40%</strong></del><br></br>
           <span>voluptatem amet autem illum adipisci</span>
           <span>voluptatem amet autem illum adipisci</span>
          </div>
          <div className="card">
            <img className="img"src="https://t3.ftcdn.net/jpg/05/64/02/34/360_F_564023464_RaZb95D8yFPt2DnxbsYLQaQQ5BSrUImO.jpg" alt="cones-img"></img>
           <strong className="title">Ice-Cream</strong><br></br>
           <span className="price">Price<strong>:150-430</strong></span><br></br>
           <del>Discount <strong>:10%</strong></del><br></br>
           <span>voluptatem amet autem illum adipisci</span>
           <span>voluptatem amet autem illum adipisci</span>
          </div>
         
        </div>
    </div>
   </>
  )
}

export default Product
