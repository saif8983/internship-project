import "../App.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import IconsSrc from "../utils/icons"
//sidebar component 
const Sidebar = () => {
  //state variable to give background color to icons daynamically in inline css
  const [homebackGroundColor, setHomeBackGroundColor] = useState('')
  const [customerBackGroundColor, setCustomerBackGroundColor] = useState('')
  const navigate = useNavigate()
  //handlehome and handleCustomer function which will invoked press grid icon and usericons 
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
            <li style={{ backgroundColor: homebackGroundColor }} ><span><i className="fa fa-home" ></i></span><span ><img onClick={() => handleHome()} src={IconsSrc.Home} alt="no icon" ></img></span></li>
            <li><span><i ></i></span><span><img src={IconsSrc.Oders} alt="no icon"></img></span></li>
            <li style={{ backgroundColor: customerBackGroundColor }}><span><i className="fa fa-users"></i></span><span><img onClick={() => handleCustomer()} src={IconsSrc.Customer} alt="no icon"></img></span></li>
            <li><span><i></i></span><span><img src={IconsSrc.Package} alt="no icon"></img></span></li>
            <li><span><i></i></span><span><img src={IconsSrc.Coupon} alt="no icon"></img></span></li>
            <li><span><i></i></span><span><img src={IconsSrc.User} alt="no icon"></img></span></li>
            <div className="setting"><img src={IconsSrc.Setting} alt="no icon"></img></div>
          </ul>
        </div>

      </div>
    </>

  );

}

export default Sidebar
