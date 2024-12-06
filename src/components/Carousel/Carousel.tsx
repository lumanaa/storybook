import { useState } from "react";
import "../../main.scss";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type CarouselProps = {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
};

const Carousel = ({ image1, image2, image3, image4 }: CarouselProps) => {
  const [, setCurrentIndex] = useState(0);

  

  const images = [
    {
      src: image1,
      name: "Shinobu",
      desc: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      src: image2,
      name: "Shogun",
      desc: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      src: image3,
      name: "Zero Two",
      desc: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      src: image4,
      name: "Gojo",
      desc: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const handleNextClick = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide")?.appendChild(items[0]); // Move the first item to the end
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Update the state
  };

  const handlePrevClick = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide")?.prepend(items[items.length - 1]); // Move the last item to the start
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className='carousel-body'>
      <div className='car-one-body'>
        <div className='container'>
          <div className='slide'>
            {images.map((item, i) => (
              <div
                className='item'
                key={i}
                style={{
                  backgroundImage: `url(${item.src})`,
                }}
              >
                <div className='content'>
                  <div className='name'>{item.name}</div>
                  <div className='des'>{item.desc}</div>
                  <button>See More</button>
                </div>
              </div>
            ))}
          </div>
          <div className='button'>
            <button className='prev' onClick={handlePrevClick}>
              <FaArrowLeftLong />
            </button>
            <button className='next' onClick={handleNextClick}>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div id='heart'></div>
      </div>
    </div>
  );
};

export default Carousel;
