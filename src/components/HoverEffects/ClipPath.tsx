import "../../main.scss";
import CursorManager from "./components/Cursormanager";
import CustomCursor from "./components/CustomCursor";
import Gallery from "./components/Gallery";

type HoverProps = {
  image1?: string;
  image2?: string;
  image3?: string;
  height?: string;
};

const ClipPath = ({ image1, image2, image3, height='600px' }: HoverProps) => {
  const images = [image1, image2, image3].filter(Boolean) as string[];
  return (
    <CursorManager>
      <CustomCursor />
      <div className='hover-one-container'>
        <div className='hover-one'>
          <Gallery images={images} height={height} />
        </div>
      </div>
    </CursorManager>
  );
};

export default ClipPath;
