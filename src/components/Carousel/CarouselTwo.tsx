import "../../main.scss";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const CarouselTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const images = [
    "https://i.pinimg.com/1200x/5c/30/4b/5c304b67227a148274ca4d8d91f1d02e.jpg",

    "https://i.pinimg.com/1200x/d6/71/68/d671684f9f6efe144501d1654910cefb.jpg",
    "https://i.pinimg.com/1200x/f1/df/94/f1df9473b3e7346903d583acbf88b3d1.jpg",

    "https://i.pinimg.com/1200x/c5/fe/2a/c5fe2a9f67a35bbec1fcd431e8bc0f37.jpg",
    "https://i.pinimg.com/1200x/74/fb/b6/74fbb66fcfb83a2a3eec152905e909ee.jpg",
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoplay(); // Reset autoplay interval
  };

  // Handle previous button
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetAutoplay(); // Reset autoplay interval
  };

  // Reset the autoplay interval
  const resetAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the current interval
    }
    intervalRef.current = setInterval(handleNext, 3000); // Restart interval
  };

  // Autoplay with useEffect
  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 3000); // Set autoplay
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Cleanup on component unmount
      }
    };
  });

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    resetAutoplay(); // Reset autoplay interval
  };

  return (
    <div className='carousel-two'>
      <header></header>
      <div className='slider'>
        <div className='list'>
          {images.map((img, i) => (
            <div
              className={`item ${i === activeIndex ? "active" : ""}`}
              key={i}
            >
              <img src={img} />
              <div className='content'>
                <p>design</p>
                <h2>Slider {i + 1}</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugit saepe eaque dignissimos in velit illum unde perferendis
                  commodi distinctio molestias! Tempora commodi id nisi, iusto
                  consequuntur tenetur pariatur illo quas.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='arrows'>
          <button id='prev' onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button id='next' onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
        <div className='thumbnails'>
          {images.map((thumb, i) => (
            <div
              className={`item ${i === activeIndex ? "active" : ""}`}
              key={i}
              onClick={() => handleThumbnailClick(i)}
            >
              <img src={thumb} />
              <div className='content'>Slider Name</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselTwo;
