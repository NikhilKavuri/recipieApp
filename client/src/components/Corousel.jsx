import chicken from "../images/chicken.jpg"
import maggie from "../images/maggie.jpg";
import veg from "../images/veg.jpeg";
import Carousel from "react-bootstrap/Carousel";
import "../css/corusel.css"

const Corousel = () => {
  return (
    <Carousel style={{ width: "38vw", height:"50vh" }}>
      <Carousel.Item interval={3000}>
        <img className="carousel-image" src={maggie}  alt="maggie recipe"/>
        <Carousel.Caption>
          <h3>Maggie</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="carousel-image" src={chicken} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="carousel-image" src={veg} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Corousel;