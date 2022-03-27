import React from 'react'
import "./Product_Card.css"
import k20 from "./img/k20-pro.jpg"
import mix4 from "./img/mi-mix4.jpg"
import note8pro from "./img/note8-pro.jpg"
import note10 from "./img/note10.jpg"
import note11 from "./img/note11-promax.jpg"

const Product_Card = () => {
  return (
    <div className="product">
	    <div className="container">
		    <div className="product-items">
			    <div className="product-item">
				    <img src={k20} />
				    <div className="product-item-text">
					    <p><span>320.000</span><sup>đ</sup></p>
					    <h1 style={{fontWeight: "bold", fontSize:"18px" }}>Redmi K20 pro</h1>
				    </div>
				    <button>Thêm vào giỏ hàng</button>
			    </div>

			    <div className="product-item">
				    <img src={mix4} />
				    <div className="product-item-text">
					    <p><span>320.000</span><sup>đ</sup></p>
					    <h1 style={{fontWeight: "bold", fontSize:"18px" }}>Redmi K20 pro</h1>
				    </div>
				    <button>Thêm vào giỏ hàng</button>
			    </div>

			    <div className="product-item">
				    <img src={note8pro} />
				    <div className="product-item-text">
					    <p><span>320.000</span><sup>đ</sup></p>
					    <h1 style={{fontWeight: "bold", fontSize:"18px" }}>Redmi K20 pro</h1>
				    </div>
				    <button>Thêm vào giỏ hàng</button>
			    </div>

			    <div className="product-item">
				    <img src={note10} />
				    <div className="product-item-text">
					    <p><span>320.000</span><sup>đ</sup></p>
					    <h1 style={{fontWeight: "bold", fontSize:"18px" }}>Redmi K20 pro</h1>
				    </div>
				    <button>Thêm vào giỏ hàng</button>
			    </div>

			    <div className="product-item">
				    <img src={note11} />
				    <div className="product-item-text">
					    <p><span>320.000</span><sup>đ</sup></p>
					    <h1 style={{fontWeight: "bold", fontSize:"18px" }}>Redmi K20 pro</h1>
				    </div>
				    <button>Thêm vào giỏ hàng</button>
			    </div>
		    </div>
	    </div>
    </div>
  )
}

export default Product_Card