import { PropsWithChildren, useEffect, useRef } from "react";
import "../../main.scss";

type ButtonProps = PropsWithChildren<{
  variant: "primary" | "example";
  backgroundColor?: string;
  color?: string;
  disabled: boolean;
  size: "small" | "medium" | "large";
  hoverColor?: string;
}>;

const ButtonOne = ({
  variant,
  children,
  disabled,
  size,

  hoverColor = "#0f0", // Default hover colo
}: ButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (btn) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position within the button
        const y = e.clientY - rect.top; // Y position within the button

        // Update custom properties for the hover effect
        btn?.style.setProperty("--x", x + "px");
        btn?.style.setProperty("--y", y + "px");
      }
    };

    if (btn) {
      btn.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  const status = disabled ? "disabled" : "";

  return (
    <div className='buttons-body'>
      <div
        ref={buttonRef}
        className={`btn-one btn-one-${variant} btn-one-${status} btn-one-${size}`}
        style={{ "--clr": hoverColor } as React.CSSProperties}
      >
        <span>{children}</span>
      </div>
    </div>
  );
};

export default ButtonOne;
