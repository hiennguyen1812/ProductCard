import React from 'react'
import k20 from "./img/k20-pro.jpg"
import "./Card.css"


const Card = () => {
  return (
    <div className='card'>
	    <form action=''>
		    <table>
			    <thead>
				    <tr>
					    <th>Sản phẩm</th>
					    <th>Giá</th>
					    <th>SL</th>
					    <th>Chọn</th>
				    </tr>
			    </thead>
			    <tbody>
				    <tr>
					    <td style={{display:"flex", alignItems: "center"}}><img style={{width: "70px"}} src={k20}/>Mi k20</td>
					    <td><p><span>320.000</span><sup>đ</sup></p></td>
					    <td><input style={{width: "30px", outline:"none"}} type="number" value="1" min="0"></input></td>
					    <td style={{cursor: "pointer"}}>Xóa</td>
				    </tr>
			    </tbody>
		    </table>
	    </form>
    </div>
  )
}

export default Card