import { useSelector, useDispatch } from 'react-redux';
import { RemoveItem, RemoveAllItems} from '../../reducers/orderSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const thali = useSelector((state) => state.order.thali);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Remove = (id) => {
    dispatch(RemoveItem(id));
  };

  const orders = () => {
    if (thali.length < 2) {
      Swal.fire({
        icon: "error",
        title: "Oops...😥😫 </br> Order at least 2 items",
      });
    } else {
      Swal.fire({
        title: 'Your Order is Successfully placed',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff ',
        backdrop: `
          rgba(0,0,123,0.4)
          url("../../../public/giphy (1).gif")
          center bottom
          no-repeat
        `
      }).then(() => {
        // Redirect to home page
        navigate('/');
      });
      
      // Clear thali
      dispatch(RemoveAllItems());
    }
  };

  var sum = 0;
  for (const item of thali) {
    sum = sum + item.totalPrice;
  }

  return (
    <>
      <div className="container mx-7" style={{textAlign: "center"}}>
        <h1 className="text-center text-danger" style={{marginTop: "20px", marginBottom: "20px"}}>Food Items In Your Cart</h1>
        <h3 className="text-center text-danger">{thali.length}</h3>
        <div className="row">
          {thali.map((ele, ind) => (
            <div className="col-4" key={ind}>
              <div className="card">
                <img
                  src={ele.image}
                  className="card-img-top"
                  alt="..."
                  width="100px"
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">Quantity: {ele.quantity}</p>
                  <p>Price: ₹ {ele.price}</p>
                  <p>TotalPrice: ₹ {ele.totalPrice}</p>
                  <button
                    onClick={() => Remove(ind)}
                    className="btn btn-primary"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="container text-center  m-2 p-2">
            <button className="btn btn-warning" style={{width:"15%"}} onClick={orders}>
              Order Now<br/><span className="text-dark" > ₹ {sum} Rs/-</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
