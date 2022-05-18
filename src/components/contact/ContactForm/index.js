import { Form } from "components";
import { useState } from "react";

function ContactForm() {
  // This state is used to store form data.
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // submit form function
  const submitForm = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(formData);
        axios
          .post("/api/contact", formData)
          .then((res) => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      }, 1000);
    });
  };

  return (
    <div className="ContactForm Section w-full padding-x">
      <Form
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
    title: "Oups.. Quelque chose s'est mal passé.",
    content:
      "Malheureusement, une erreur s'est produite. Veuillez réessayer dans quelques instants.",
    retry: true, // displays a Try Again in failure
  },
  success: {
    title: "Message envoyé avec succès",
    content:
      "Merci pour votre message. Nous avons bien reçu votre message et nous vous répondrons dès que possible !",
    retry: false,
  },
  button: {
    submitting: "Veuillez patienter...",
    normal: "Envoyer",
  },
  accept: <></>,
};

const form = [
  {
    type: "text",
    name: "fullName",
    label: "Nom complet :",
    HTMLtype: "text",
    placeholder: "Entrez votre nom complet *",
    minLength: 6,
    maxLength: 40,
    twoColumn: true,
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "Adresse Email :",
    HTMLtype: "email",
    required: true,
    placeholder: "Entrez votre adresse email *",
    minLength: 6,
    maxLength: 40,
  },
  {
    type: "phone",
    name: "phone",
    label: "Numéro de téléphone :",
    HTMLtype: "phone",
    required: true,
    placeholder: "80 000 000 0000 *",
    minLength: 2,
    maxLength: 20,
  },
  {
    type: "textarea",
    name: "message",
    label: "Message :",
    HTMLtype: "textarea",
    required: true,
    placeholder: "Entrez votre message *",
    minLength: 20,
    maxLength: 500,
    twoColumn: true,
  },
];

export default ContactForm;
