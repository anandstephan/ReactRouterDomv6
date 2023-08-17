import { useNavigate } from "react-router-dom"

const OrderSummary = () =>{
    const navigate = useNavigate()
return <>
<h1>OrderSummary</h1>
<button onClick={()=>navigate(-1)}>GoBack</button>
</>
}

export default OrderSummary