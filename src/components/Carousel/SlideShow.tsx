import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "../../main.scss";
import { useState } from "react";

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    const lists = document.querySelectorAll("#slide .item");

    document.getElementById("slide")?.appendChild(lists[0]);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex - 1
    );
    const lists = document.querySelectorAll("#slide .item");

    document.getElementById("slide")?.prepend(lists[lists.length - 1]);
  };

  const images = [
    "https://i.pinimg.com/736x/b2/60/b1/b260b1c586a8f2104b35b15d0a2e8f70.jpg",
    "https://i.pinimg.com/736x/c0/a0/8e/c0a08e9d641722feea7426c799af3b97.jpg",
    "https://i.pinimg.com/736x/4d/7f/e8/4d7fe80287cede5a9b036e866d354d26.jpg",
    "https://i.pinimg.com/736x/6c/80/e8/6c80e8130810423ad00a5f8f2c8b886b.jpg",
    "https://i.pinimg.com/736x/e6/38/2a/e6382a952b1676872bf86e5c43c07b93.jpg",
    "https://i.pinimg.com/736x/47/1f/5f/471f5f8a29e8a9026456b8dcad28a3b5.jpg",
  ];
  return (
    <div className='slide-show'>
      <div className='container'>
        <div id='slide'>
          {images.map((img, i) => {
            return (
              <div
                className={`item ${i === currentIndex ? "active" : ""}`}
                key={i}
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <div className='content'>
                  <div className='from'>Slide</div>
                  <div className='name'>Name</div>
                  <div className='type'>Type</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='buttons'>
          <button id='prev' onClick={handlePrev}>
            <FaArrowLeftLong />
          </button>
          <button id='next' onClick={handleNext}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
