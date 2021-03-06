import { Input } from "components";
import { useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { fullScreenState } from "atoms/states";
import { useSetRecoilState } from "recoil";

function OtherColors({ pictures, setPictures, setNewColorName }) {
  const [newPicture, setNewPicture] = useState({
    url: "",
    color: "",
  });

  const setFullScreen = useSetRecoilState(fullScreenState);

  return (
    <div className="Pictures w-full full flex flex-col items-center padding-x">
      {pictures.map((picture, index) => (
        <div
          className="Pictures-item w-full flex items-center justify-between"
          key={index}
        >
          <div className="flex items-center cursor-pointer">
            <div
              className="Pictures-item-image"
              onClick={() =>
                setFullScreen({
                  active: true,
                  image: `${picture[0]}`,
                })
              }
            >
              <img
                src={`/assets/products/${picture[0]}`}
                alt=""
                className="covered-img"
              />
            </div>
            <Input
              type="text"
              placeholder="Nom de couleur"
              minLength={2}
              maxLength={255}
              value={picture[1]}
              onChange={(e) => setNewColorName(index, e.target.value)}
            />
          </div>
          <div
            className="remove-icon"
            onClick={() => {
              const newPictures = [...pictures];
              newPictures.splice(index, 1);
              setPictures(newPictures);
            }}
          >
            <AiFillMinusCircle />
          </div>
        </div>
      ))}
      <div className="Pictures-add w-full flex items-end justify-between">
        <Input
          type="text"
          label="Image de la nouvelle couleur (ex. IMG_2312.jpg)"
          placeholder="URL de l'image *"
          minLength={2}
          maxLength={255}
          value={newPicture.url}
          onChange={(e) =>
            setNewPicture({ ...newPicture, url: e.target.value })
          }
        />
        <Input
          type="text"
          label="Nom de la nouvelle couleur"
          placeholder="Nom de la nouvelle couleur *"
          minLength={2}
          maxLength={255}
          value={newPicture.color}
          onChange={(e) =>
            setNewPicture({ ...newPicture, color: e.target.value })
          }
        />
        <div className="button w-full h-full">
          <a
            className="w-full no-line"
            href="#"
            onClick={() => {
              if (newPicture.url.length <= 4 || newPicture.color.length <= 2)
                return;
              setPictures([
                ...pictures,
                [
                  newPicture.url.trim(),
                  newPicture.color.charAt(0).toUpperCase() +
                    newPicture.color.slice(1).toLowerCase(),
                ],
              ]);
              setNewPicture({ url: "", color: "" });
            }}
          >
            + Ajouter couleur
          </a>
        </div>
      </div>
    </div>
  );
}

export default OtherColors;
