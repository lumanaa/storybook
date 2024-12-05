import { useEffect } from "react";
import "../../main.scss";

type TooltipProps = {
  backgroundColor?: string;
  color?: string;
  image1?: string;
  image2?: string;
  image3?: string;
};

const MovingTooltip = ({
  backgroundColor,
  color,
  image1,
  image2,
  image3,
}: TooltipProps) => {
  useEffect(() => {
    const tooltips = document.querySelectorAll<HTMLElement>(".tooltip");

    tooltips.forEach((tooltip) => {
      tooltip.style.backgroundColor = backgroundColor || "white"; // Fallback to transparent if no color is passed
    });

    tooltips.forEach((tooltip) => {
      tooltip.style.color = color || "black"; // Fallback to transparent if no color is passed
    });

    const handleMouseMove = (e: MouseEvent) => {
      const x = `${e.clientX + 10}px`;
      const y = `${e.clientY + 10}px`;
      tooltips.forEach((tooltip) => {
        tooltip.style.top = y;
        tooltip.style.left = x;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div className='tooltip-body'>
      <div className='box'>
        <img src={image1} alt='' />
        <span className='tooltip'>pink</span>
      </div>
      <div className='box'>
        <img src={image2} alt='' />
        <span className='tooltip'>green</span>
      </div>
      <div className='box'>
        <img src={image3} alt='' />
        <span className='tooltip'>blue</span>
      </div>
    </div>
  );
};

export default MovingTooltip;
