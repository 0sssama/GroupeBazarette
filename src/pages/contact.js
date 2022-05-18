import Head from "next/head";
import { ContactForm } from "components/contact";

function Contact() {
  return (
    <div className="Contact Page wrapper padding-x">
      <Head>
        <title>Contactez nous - GroupeBazarette</title>
      </Head>
      <h2 className="title primary">Contactez GroupeBazarette</h2>
      <p className="text">
        Une question ? Vous pouvez nous écrire en remplissant notre formulaire
        de contact
      </p>
      <ContactForm />
    </div>
  );
}

export default Contact;
