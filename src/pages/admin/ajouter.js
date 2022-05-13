import { useEffect } from "react";
import { Logo } from "components";
import { AjouterForm } from "components/ajouter";
import Head from "next/head";

function Ajouter() {
  // remove header on page render
  useEffect(() => {
    // hiding both headers
    const headers = document.querySelectorAll(".Header");
    headers.forEach((header) => {
      header.style.display = "none!important";
    });

    // hiding footer
    document
      .querySelector("footer.Footer")
      .classList.add("display-none-important");
  }, []);

  return (
    <div className="Ajouter Page wrapper padding-x flex flex-col items-start row-gap">
      <Head>
        <title>Ajouter un produit - GroupeBazarette</title>
      </Head>
      <Logo />
      <h1 className="title primary">Ajouter un produit</h1>
      <AjouterForm />
    </div>
  );
}

export default Ajouter;
