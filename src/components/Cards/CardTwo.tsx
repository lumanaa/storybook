import "../../main.scss";

const CardTwo = () => {
  const images = [
    "https://i.pinimg.com/736x/08/75/fd/0875fd3e2ae72921ec2c2632ecc175ca.jpg",
    "https://i.pinimg.com/736x/0a/e5/90/0ae5906c83d75d384a2ebb88db902adb.jpg",
    "https://i.pinimg.com/736x/25/2f/e1/252fe1b55c12dd20b21452228a5d50da.jpg",
  ];
  return (
    <div className='card-two'>
      <div className='list'>
        {images.map((img, i) => (
          <div className='item' key={i}>
            <img src={img} />
            <div className='content'>
              <h1>IMAGE</h1>
              <div className='des'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                labore quia voluptate deleniti repellendus aperiam quam
                voluptatem id repellat ab quaerat dolorem sapiente.
              </div>
            </div>
          </div>
        ))}
        )
      </div>
    </div>
  );
};

export default CardTwo;
