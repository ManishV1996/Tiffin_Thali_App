import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import style from "./Home.module.css";
import banner from "/public/banner.png";

const Home = () => {
  const productData = useSelector((state) => state.order.products);

  return (
    <>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mahaprasadbhandar.files.wordpress.com/2021/11/blogbanner-2.jpg"
            alt="First slide"
            style={{height:"400px"}}
          />
          <Carousel.Caption>
            <h4>"Delight your taste buds! Explore a world of culinary delights with our food app."</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://4.bp.blogspot.com/-5849kAtNVbo/UourQ47zFTI/AAAAAAAAAA0/gjgjOlHFa2k/s1600/slide5.jpg"
            alt="Second slide"
            style={{height:"400px"}}
          />

          <Carousel.Caption>
            <h4>"Your one-stop food destination. Order, indulge, and experience food paradise with our app."</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Third slide"
            style={{height:"400px"}}
          />

          <Carousel.Caption>
            <h4>
            "Unlock a world of culinary possibilities. Embrace the joy of eating with our food app."
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2 style={{ marginBottom: "20px", marginTop: "20px", color: "green" }}>
        To Order Food Select Your Food Below!
      </h2>

      <div id="product-section" className={style.cont}>
        {productData.map((ele, i) => (
          <div key={i}>
            <Product data={ele} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;











