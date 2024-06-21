import React, { Fragment , useState} from 'react';
import img_1 from '../../assets/img_1.jpg'
import img_2 from '../../assets/img_2.jpg'
import img_3 from '../../assets/img_3.jpg'
import Carousel from 'react-bootstrap/Carousel'
import '../../styles/style.css'

//Carousel Component to display few pictures on our main page
const Card = () =>{

    function ControlledCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
            <div className="div_carousel" style={{maxWidth: "800px", margin: "auto"}} >
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
              <img
                className="d-block w-80"
                src={img_1}
                width="800px"
                height="600px"
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item > 
              <img
                className="d-block w-100"
                src={img_2}
                width="800px"
                height="600px"
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={img_3}
                width="800px"
                height="600px"
                alt="Third slide"
              />
      
             
            </Carousel.Item>
          </Carousel>
          </div>
        );
      }
      
      return(<ControlledCarousel />);





}
export default Card;