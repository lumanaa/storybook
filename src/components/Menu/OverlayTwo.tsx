import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../../main.scss";
import { useState } from "react";
import { RiCloseLargeFill, RiMenu3Line } from "react-icons/ri";

type OverlayTwoProps = {
  backgroundColor?: string; // Make backgroundColor optional
  color?: string;
  menuOverlayColor?: string;
};

const OverlayTwo = ({
  backgroundColor,
  color,
  menuOverlayColor,
}: OverlayTwoProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggle = () => {
    setOpenMenu((prevState) => !prevState);
  };

  useGSAP(() => {
    gsap.from(".menu-container", {
      x: 100,
      duration: 1,
      delay: 0.3,
    });
  });

  useGSAP(() => {
    if (openMenu) {
      // Opening animations with zIndex management
      gsap.set(".fullpage-menu", { display: "block", zIndex: 2 });
      gsap.set(".menu-container", { x: "5vw" });
      gsap.set(".menu-bg span", { x: "100%" });

      gsap.to(".menu-container", { x: 0, duration: 1, delay: 0.3 });
      gsap.to(".menu-bg span", {
        duration: 1.2,
        x: 0,
        stagger: 0.3,
        ease: "expo.inOut",
      });
      gsap.from(".menu-item", {
        duration: 1.5,
        opacity: 0,
        y: "100%",
        stagger: 0.2,
        ease: "expo.inOut",
        delay: 0.8,
      });
      gsap.from(".close-menu", { x: 100, duration: 1 });
    } else {
      // Closing animations
      gsap.to(".menu-bg span", {
        x: "100%",
        stagger: 0.3,
        duration: 1.2,
        ease: "expo.inOut",
      });
      gsap.to(".menu-item", {
        y: "100%",
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "expo.inOut",
      });

      // Delayed set to hide menu and change zIndex after animations complete
      gsap.delayedCall(1.6, () => {
        gsap.set(".fullpage-menu", { zIndex: 0 });
      });
    }
  }, [openMenu]);
  return (
    <div
      className='overlay-two'
      style={{
        backgroundColor,
      }}
    >
      <div className='menu-container'>
        {!openMenu && (
          <RiMenu3Line
            size={24}
            className='menu-toggle'
            onClick={handleToggle}
            color='white'
            style={{
              zIndex: 3,
              cursor: "pointer",
              color,
            }}
          />
        )}
      </div>

      <div className={`fullpage-menu ${openMenu ? "active" : ""}`}>
        <div className='fullpage-menu-inner'>
          <div
            className='menu-bg'
            style={{ "--bg": menuOverlayColor } as React.CSSProperties}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {openMenu && (
            <>
              <div className='close-menu'>
                <RiCloseLargeFill
                  size={24}
                  onClick={handleToggle}
                  color='white'
                  style={{
                    zIndex: 3,
                    cursor: "pointer",
                    color,
                  }}
                />
              </div>
              <nav>
                <div className='main-menu'>
                  <div
                    className='menu-item'
                    style={{ "--clr": color } as React.CSSProperties}
                  >
                    <h4 className='nav-menu-item'> Home</h4>
                  </div>
                  <div
                    className='menu-item'
                    style={{ "--clr": color } as React.CSSProperties}
                  >
                    <h4>About</h4>
                    <div className='products'>
                      <p className='product'>Menu Item 1</p>
                      <p className='product'>Menu Item 2</p>
                    </div>
                  </div>

                  <div
                    className='menu-item'
                    style={{ "--clr": color } as React.CSSProperties}
                  >
                    <h4>Contact</h4>
                  </div>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverlayTwo;
