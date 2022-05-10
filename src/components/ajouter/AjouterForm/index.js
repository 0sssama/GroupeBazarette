import { useState } from "react";
import { Form } from "components";
import axios from "axios";

function AjouterForm() {
  // formData
  const [formData, setFormData] = useState({
    title: "",
    reference: "",
    price: 0,
    description: "",
    matiere: "",
    collection: "Vasco de Gama",
    mainPic: "",
  });

  // form submission
  const submitForm = () => {
    return new Promise((resolve, reject) => {
      const data = {
        title: formData.title,
        reference: formData.reference,
        price: formData.price,
        description: formData.description,
        matiere: formData.matiere,
        collection: formData.collection,
        pictures: [[formData.mainPic, "main"]],
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
      />
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
    type: "description",
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
    name: "collection",
    label: "Collection:",
    HTMLtype: "select",
    type: "select",
    options: ["Vasco de Gama", "Antonio Ferre"],
    minLength: 3,
    required: true,
    maxLength: 20,
  },
  {
    name: "mainPic",
    label: "Image principale: (juste le nom de l'image, ex. IMG_2312.jpg)",
    HTMLtype: "text",
    type: "text",
    placeholder: "Image principale *",
    required: true,
    twoColumn: true,
  },
];

export default AjouterForm;
