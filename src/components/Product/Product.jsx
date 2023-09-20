import { useDispatch } from "react-redux";
import { addTothali } from "../../reducers/orderSlice";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const add = (item) => {
    item = JSON.parse(JSON.stringify(item));
    item.quantity = quantity;
    item.totalPrice = Number(item.quantity) * Number(item.price);
    dispatch(addTothali(item));
    console.log(addTothali(item));
  };

  const increment = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    console.log(quantity);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "block",
          marginBottom: "20px",
          marginRight: "20px",
          backgroundColor:"lightgray"
        }}
      >
        <table
          className="table"
         
        >
          <tbody>
            <tr>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  verticalAlign: "top",
                  display: "inline",
                  marginLeft: "20px",
                  backgroundColor:"lightgray"
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <img
                    variant="top"
                    src={data.image}
                    style={{height: "250px", width: "250px", padding:"30px"}}
                  />
                </div>
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "center",
                  paddingTop: "60px",
                  backgroundColor:"lightgray"
                }}
              ><div style={{textAlign:"center"}}>
                <h4>{data.name}</h4>
                <p style={{width:"100%",}}>{data.description}</p></div>
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  paddingTop: "60px",
                  textAlign: "center",
                  width:"20%",
                  backgroundColor:"lightgray"

                }}
              >
                <h5>Rs. {data.price}</h5>
                <Button variant="primary"  onClick={() => add(data)} style={{width:"100%", backgroundColor: "rgba(230,148,0,255)"}}>
                  Add to cart
                </Button>
                <div style={{ marginTop: "10px", marginBottom: "15px" }}>
                  <Button
                    variant="secondary"
                    style={{ marginRight: "10px" }}
                    onClick={decrement}
                  >
                    -
                  </Button>
                  <Button variant="light">{quantity}</Button>
                  <Button
                    variant="secondary"
                    style={{ marginLeft: "10px" }}
                    onClick={increment}
                  >
                    +
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
