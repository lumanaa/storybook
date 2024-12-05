import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import "../../main.scss";

type CardsProps = {
  backgroundColor?: string;
};

const Cards = ({ backgroundColor }: CardsProps) => {
  useEffect(() => {
    // Select all the card elements
    const tiltElements = document.querySelectorAll(
      ".card"
    ) as NodeListOf<HTMLElement>;

    // Apply Vanilla Tilt to each card element
    tiltElements.forEach((element) => {
      VanillaTilt.init(element, {
        max: 25, // Maximum tilt angle
        speed: 1000, // Speed of the tilt animation
        glare: true, // Enables glare effect
        "max-glare": 0.5, // Glare intensity
      });
    });

    // Cleanup function to destroy the tilt effect on unmount
    return () => {
      tiltElements.forEach((element) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (element as any).vanillaTilt?.destroy(); // Ensure proper typing for the vanillaTilt method
      });
    };
  }, []);

  return (
    <div className='card-body'>
      <div className='glass-body'>
        <div className='container'>
          <div
            className='card'
            style={{
              backgroundColor,
            }}
          >
            <div className='content'>
              <h2>01</h2>
              <h4>Card One</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum debitis corrupti aut unde ipsum similique aliquid
                saepe? Recusandae odio expedita maxime blanditiis.
              </p>
              <a href='#'>Read More</a>
            </div>
          </div>
          <div
            className='card'
            style={{
              backgroundColor,
            }}
          >
            <div className='content'>
              <h2>02</h2>
              <h4>Card Two</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum debitis corrupti aut unde ipsum similique aliquid
                saepe? Recusandae odio expedita maxime blanditiis.
              </p>
              <a href='#'>Read More</a>
            </div>
          </div>
          <div
            className='card'
            style={{
              backgroundColor,
            }}
          >
            <div className='content'>
              <h2>03</h2>
              <h4>Card Three</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum debitis corrupti aut unde ipsum similique aliquid
                saepe? Recusandae odio expedita maxime blanditiis.
              </p>
              <a href='#'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
