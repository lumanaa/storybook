import "../../main.scss";

type CarouselProps = {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  image8?: string;
};

const CircularRotate = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
}: CarouselProps) => {
  return (
    <div className='img-rotate-body'>
      <div className='box'>
        <div className='img'>
          <div className='imgBx' style={{ "--i": 1 } as React.CSSProperties}>
            <img src={image1} alt='' />
          </div>
          <div className='imgBx' style={{ "--i": 2 } as React.CSSProperties}>
            <img src={image2} alt='' />
          </div>

          <div className='imgBx' style={{ "--i": 3 } as React.CSSProperties}>
            <img src={image3} alt='' />
          </div>
          <div className='imgBx' style={{ "--i": 4 } as React.CSSProperties}>
            <img src={image4} alt='' />
          </div>

          <div className='imgBx' style={{ "--i": 6 } as React.CSSProperties}>
            <img src={image5} alt='' />
          </div>

          <div className='imgBx' style={{ "--i": 7 } as React.CSSProperties}>
            <img src={image6} alt='' />
          </div>
          <div className='imgBx' style={{ "--i": 5 } as React.CSSProperties}>
            <img src={image7} alt='' />
          </div>
          <div className='imgBx' style={{ "--i": 8 } as React.CSSProperties}>
            <img src={image8} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularRotate;
