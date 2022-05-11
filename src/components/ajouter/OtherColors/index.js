import { Button, Input } from "components";
import { useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";

function OtherColors({ pictures, setPictures }) {
  const [newPicture, setNewPicture] = useState({
    url: "",
    color: "",
  });
  return (
    <div className="Pictures w-full full flex flex-col items-center padding-x">
      {pictures.map((picture, index) => {
        return index === 0 ? (
          <></>
        ) : (
          <div className="Pictures-item w-full flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                window.location.replace(`/assets/products/${products[0]}`)
              }
            >
              <div className="Picture-item-image">
                <img src={`/assets/products/${picture[0]}`} alt="" />
              </div>
              <p className="text">{picture[1]}</p>
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
        );
      })}
      <div className="Pictures-add w-full flex items-end justify-between">
        <Input
          type="text"
          label="Image de la nouvelle couleur (ex. IMG_2312.jpg)"
          placeholder="URL de l'image *"
          minLength={4}
          maxLength={255}
          value={newPicture.url}
          onChange={(e) =>
            setNewPicture({ ...newPicture, url: e.target.value })
          }
          required={true}
        />
        <Input
          type="text"
          label="Nom de la nouvelle couleur"
          placeholder="Nom de la nouvelle couleur *"
          minLength={4}
          maxLength={255}
          value={newPicture.color}
          onChange={(e) =>
            setNewPicture({ ...newPicture, color: e.target.value })
          }
          required={true}
        />
        <div className="button w-full h-full">
          <a
            className="w-full no-line"
            href="#"
            onClick={() => {
              if (newPicture.url.length <= 4 || newPicture.color.length <= 4)
                return;
              setNewPicture({ url: "", color: "" });
              setPictures([...pictures, [newPicture.url, newPicture.color]]);
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
