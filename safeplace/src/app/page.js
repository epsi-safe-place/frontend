import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary min-h-screen flex flex-col items-center justify-center text-center text-white p-8">
      <div className="h-screen flex flex-col items-center justify-center gap-6 ">
        <header className="w-full flex justify-center">
          <div className="bg-primary rounded-full py-2 px-4 text-sm font-medium text-white shadow-md">
            Safe Place est en phase beta 🚀
          </div>
        </header>
        <h1 className="text-5xl font-bold leading-tight">
          <span className="block text-6xl">Safe Place</span> Le Réseau Social Sain et Sécurisé
        </h1>
        <p className="text-lg max-w-3xl leading-relaxed">
          Safe Place vous offre une expérience saine et bienveillante, conçue pour protéger votre santé mentale et limiter les risques d'addiction. Découvrez une plateforme où la transparence et la sécurité sont nos priorités.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#"
            className="bg-white text-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-secondary transition duration-300"
          >
            Commencer Maintenant
          </a>
          <a
            href="#features"
            className="bg-transparent border border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-primary transition duration-300"
          >
            En savoir plus
          </a>
        </div>
      </div>

      {/* Section Caractéristiques */}
      <section id="features" className=" min-h-screen flex flex-col justify-center max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Caractéristiques de Safe Place</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-primary p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Réduction des Addictions</h3>
            <p className="text-lg">
              Notre interface est spécialement conçue pour limiter l'usage excessif et favoriser une utilisation modérée des réseaux sociaux.
            </p>
          </div>
          <div className="bg-primary p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Protection de la Vie Privée</h3>
            <p className="text-lg">
              Safe Place s'engage à vous offrir une transparence totale sur la gestion et l'utilisation de vos données personnelles.
            </p>
          </div>
          <div className="bg-primary p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Sécurité Renforcée</h3>
            <p className="text-lg">
              Nous intégrons des mesures de sécurité avancées pour limiter les comportements malveillants et protéger nos utilisateurs.
            </p>
          </div>
          <div className="bg-primary p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Impact Positif sur la Santé Mentale</h3>
            <p className="text-lg">
              Safe Place encourage une utilisation responsable et positive des réseaux sociaux, aidant à protéger votre bien-être mental.
            </p>
          </div>
        </div>
      </section>

      {/* Section suivante */}
      <section className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Pourquoi choisir Safe Place ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-primary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Santé Mentale Prioritaire</h3>
            <p className="text-lg">
              Une interface étudiée pour réduire les risques d’addiction et favoriser votre bien-être.
            </p>
          </div>
          <div className="bg-primary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Transparence Totale</h3>
            <p className="text-lg">
              Vous avez le contrôle total sur la collecte et l’utilisation de vos données personnelles.
            </p>
          </div>
          <div className="bg-primary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Sensibilisation Responsable</h3>
            <p className="text-lg">
              Nous vous accompagnons pour une utilisation responsable des réseaux sociaux.
            </p>
          </div>
          <div className="bg-primary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Lutte contre le Cyberharcèlement</h3>
            <p className="text-lg">
              Une visibilité restreinte pour protéger nos utilisateurs contre le cyberharcèlement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}