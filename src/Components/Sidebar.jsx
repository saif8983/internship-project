import "../App.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// All icons are imported by constant file which variable have array of object
import { IconsSrc } from "../Constant"
//sidebar component
const Sidebar = () => {
  //usestate used for change icon background change in inline css
  const [homebackGroundColor,setHomeBackGroundColor]=useState('')
  const [customerBackGroundColor,setCustomerBackGroundColor]=useState('')
  const navigate = useNavigate()
  const handleHome = () => {
    navigate("/")
    setHomeBackGroundColor('#5541d7')
    setCustomerBackGroundColor('')
  }
  const handleCustomer = () => {
    navigate("/Customer")
    setHomeBackGroundColor('')
    setCustomerBackGroundColor('#5541d7')
  }
  return (
    <>

      <div className="main-sidebar" >
        <div>
          <ul className="sidebar">
            <li style={{backgroundColor:homebackGroundColor}} ><span><i className="fa fa-home" ></i></span><span ><img onClick={() => handleHome()} src={IconsSrc.Home} alt="no icon" ></img></span></li>
            <li><span><i className="fa fa-order"></i></span><span><img src={IconsSrc.Oders} alt="no icon"></img></span></li>
            <li style={{backgroundColor:customerBackGroundColor}}><span><i className="fa fa-users"></i></span><span><img onClick={() => handleCustomer()} src={IconsSrc.Customer} alt="no icon"></img></span></li>
            <li><span><i className="fa fa-shopping-cart"></i></span><span><img src={IconsSrc.Package} alt="no icon"></img></span></li>
            <li><span><i className="fa fa-bookmark"></i></span><span><img src={IconsSrc.Coupon} alt="no icon"></img></span></li>
            <li><span><i className="fa fa-gear"></i></span><span><img src={IconsSrc.User} alt="no icon"></img></span></li>


            <div className="setting"><img src={IconsSrc.Setting} alt="no icon"></img></div>
          </ul>
        </div>

      </div>
    </>

  );

}

export default Sidebar
