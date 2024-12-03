import "../../main.scss";

type ButtonTwoProps = {
  children: React.ReactNode;
  variant: "primary" | "one" | "two";
  color: string;
};

const ButtonTwoComponent = ({ children, color, variant }: ButtonTwoProps) => {
  return (
    <div
      className={`btn-two btn-${variant}`} // Add the variant class for styling
      style={{ "--clr": color } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default ButtonTwoComponent;
