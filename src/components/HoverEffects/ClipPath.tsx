import "../../main.scss";
import CursorManager from "./components/Cursormanager";
import CustomCursor from "./components/CustomCursor";
import Gallery from "./components/Gallery";

type HoverProps = {
  image1?: string;
  image2?: string;
  image3?: string;
};

const ClipPath = ({ image1, image2, image3 }: HoverProps) => {
  const images = [image1, image2, image3].filter(Boolean) as string[];
  return (
    <CursorManager>
      <CustomCursor />
      <div className='hover-one-container'>
        <div className='hover-one'>
          <Gallery images={images} />
        </div>
      </div>
    </CursorManager>
  );
};

export default ClipPath;
