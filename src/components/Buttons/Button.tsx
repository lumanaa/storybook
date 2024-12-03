import { PropsWithChildren } from "react";
import "../../main.scss";

type ButtonProps = PropsWithChildren<{
  variant: "primary" | "one" | "two";
  backgroundColor?: string;
  color: string;
  disabled: boolean;
  size: "small" | "medium" | "large";
}>;

export const ButtonComponent = ({
  variant,
  backgroundColor = "white",
  children,
  color,
  disabled,
  size,
}: ButtonProps) => {
  const status = disabled ? "disabled" : "";
  return (
    <button
      type='button'
      className={`button button-${variant}  button-${status} button-${size}`}
      style={{ backgroundColor, color }}
    >
      {children}
    </button>
  );
};
