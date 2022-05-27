import { useRecoilState } from "recoil";
import { fullScreenState } from "atoms/states";
import { MdOutlineClose } from "react-icons/md";

function FullScreen() {
  // importing current state of fullscreen
  const [fs, setFs] = useRecoilState(fullScreenState);

  // if fullscreen is active
  if (!fs.active) return null;

  return (
    <div className="FullScreen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div
        className="FullScreen-close absolute"
        onClick={() => setFs({ active: false, image: "" })}
      >
        <MdOutlineClose />
      </div>
      <img
        src={`/assets/products/${fs.image}`}
        alt="fullscreen"
        className="FullScreen-image"
      />
    </div>
  );
}

export default FullScreen;
