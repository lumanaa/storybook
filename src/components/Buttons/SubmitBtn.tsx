import { useState } from "react";
import "../../main.scss";

type ButtonProps = {
  children?: React.ReactNode; // Include children explicitly
  color?: string;
};

const SubmitBtn = ({ children, color }: ButtonProps) => {
  const [buttonState, setButtonState] = useState<
    "idle" | "onclic" | "validate"
  >("idle");

  const handleClick = () => {
    setButtonState("onclic");

    setTimeout(() => {
      setButtonState("validate");
      setTimeout(() => {
        setButtonState("idle");
      }, 1250);
    }, 2250);
  };

  const btnText = children;
  return (
    <div
      className='submit-container'
      style={
        {
          "--clr": color,
        } as React.CSSProperties
      }
    >
      <button
        className={buttonState}
        onClick={handleClick}
        data-btn-text={btnText?.toString()}
        data-icon={buttonState === "validate" ? "✔" : ""}
      ></button>
    </div>
  );
};

export default SubmitBtn;
