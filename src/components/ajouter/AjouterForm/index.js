import { useState } from "react";
import { Form } from "components";
import axios from "axios";
import { OtherColors } from "components/ajouter";

function AjouterForm() {
  // formData
  const [formData, setFormData] = useState({
    title: "",
    type: "Lunettes de vue",
    reference: "",
    price: 0,
    description: "",
    matiere: "",
    collectionName: "Vasco de Gama",
    mainPic: "",
    mainPicName: "",
    gender: "Homme",
    pictures: [],
  });

  // form resetting
  const resetForm = () => {
    setFormData({
      title: "",
      type: "Lunettes de vue",
      reference: "",
      price: 0,
      description: "",
      matiere: "",
      collectionName: "Vasco de Gama",
      mainPic: "",
      mainPicName: "",
      gender: "Homme",
      pictures: [],
    });
  };

  // form submission
  const submitForm = () => {
    return new Promise((resolve, reject) => {
      const data = {
        title: formData.title,
        type: formData.type,
        reference: formData.reference,
        price: formData.price,
        description: formData.description,
        matiere: formData.matiere,
        collectionName: formData.collectionName,
        gender: formData.gender,
        pictures: [
          [formData.mainPic, formData.mainPicName],
          ...formData.pictures,
        ],
      };
      axios
        .post("/api/product", data)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  return (
    <div className="AjouterForm w-full flex flex-col items-center">
      <Form
        formName="FormAjouter"
        form={form}
        messages={messages}
        formData={formData}
        setFormData={setFormData}
        submit={submitForm}
        reset={resetForm}
      >
        <OtherColors
          pictures={formData.pictures}
          setPictures={(newValue) => {
            setFormData({ ...formData, pictures: newValue });
          }}
        />
      </Form>
    </div>
  );
}

const messages = {
  fail: {
    title: "Il semble qu'il y ait eu un problème",
    content:
      "Veuillez essayer à nouveau d'ajouter le produit. Si cela continue à se produire, veuillez contacter le développeur.",
    retry: true, // displays a Try Again in failure
  },
  success: {
    title: "Produit ajouté avec succès",
    content: `Appuyer sur le bouton si dessous pour ajouter un autre.`,
    retry: true,
  },
  button: {
    submitting: `Veuillez patienter...`,
    normal: "Ajouter produit",
  },
  accept: <></>,
};

const form = [
  {
    name: "title",
    label: "Titre du produit:",
    type: "text",
    HTMLtype: "text",
    placeholder: "Titre du produit *",
    required: true,
    minLength: 2,
    maxLength: 50,
    twoColumn: true,
  },
  {
    name: "type",
    label: "Type de produit:",
    type: "select",
    HTMLtype: "select",
    options: ["Lunettes de vue", "Lunettes solaires"],
    required: true,
  },
  {
    name: "gender",
    label: "Genre:",
    type: "select",
    HTMLtype: "select",
    options: ["Homme", "Femme"],
    required: true,
  },
  {
    name: "reference",
    label: "Reference:",
    type: "text",
    HTMLtype: "text",
    placeholder: "Reference *",
    minLength: 2,
    maxLength: 40,
    required: true,
  },
  {
    name: "price",
    label: "Prix: (en Euros)",
    type: "number",
    HTMLtype: "number",
    placeholder: "Prix *",
    required: true,
  },
  {
    name: "description",
    label: "Description:",
    type: "textarea",
    placeholder: "Description *",
    minLength: 8,
    maxLength: 1000,
    required: true,
    twoColumn: true,
  },
  {
    name: "matiere",
    label: "Matiere :",
    HTMLtype: "text",
    placeholder: "Matiere *",
    type: "text",
    minLength: 2,
    required: true,
    maxLength: 40,
  },
  {
    name: "collectionName",
    label: "Collection:",
    HTMLtype: "select",
    type: "select",
    options: ["Vasco de Gama", "Antonio Ferre"],
    required: true,
  },
  {
    name: "mainPic",
    label: "Image principale: (juste le nom de l'image, ex. IMG_2312.jpg)",
    HTMLtype: "text",
    type: "text",
    placeholder: "Image principale *",
    required: true,
  },
  {
    name: "mainPicName",
    label: "Couleur de l'image principale:",
    HTMLtype: "text",
    type: "text",
    placeholder: "Couleur de l'image principale *",
    required: true,
  },
];

export default AjouterForm;
