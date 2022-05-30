import Head from "next/head";

function About() {
  return (
    <div className="About Page wrapper padding-x">
      <Head>
        <title>Qui sommes nous? - GroupeBazarette</title>
      </Head>
      <h2 className="title primary">Qui sommes nous?</h2>
      <p className="text">
        Qui sommes GroupeBazarette? Qu'est ce que nous offrons?
      </p>
      <div className="content Section w-full">
        <p className="text">
          Nous sommes des vendeurs de lunettes situé au cœur du sud de la{" "}
          <b>France</b>. Nous vendons une grande variété de lunettes de{" "}
          <b>haute qualité</b> parmi les meilleures marques.{" "}
          <b>Antonio Ferre</b> et <b>Vasco De Gamma</b> ne sont que deux des
          marques avec lesquelles nous sommes fiers de nous associer. Ils ont
          créé de <b>magnifiques lunettes</b> avec un style et une qualité
          exceptionnels. Chez <b>Bazarette</b>, nous avons une équipe de
          professionnels expérimentés en optique qui peuvent vous aider à
          choisir les lunettes qui conviennent le mieux à votre visage.
        </p>
      </div>
    </div>
  );
}

export default About;
