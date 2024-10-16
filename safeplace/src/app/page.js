import Image from "next/image";

export default function Home() {
  return (
    <div id="top" className="bg-gradient-to-r from-primary to-secondary min-h-screen flex flex-col items-center justify-center text-center text-white p-6 sm:p-8">
      <div className="h-screen flex flex-col items-center justify-center gap-6">
        <header className="w-full flex justify-center">
          <div className="bg-primary rounded-full py-2 px-4 text-xs sm:text-sm font-medium text-white shadow-md">
            Safe Place est en phase beta 🚀
          </div>
        </header>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          <span className="block text-5xl sm:text-6xl">Safe Place</span> Le Réseau Social Sain et Sécurisé
        </h1>
        <p className="text-base sm:text-xl max-w-2xl sm:max-w-3xl leading-relaxed">
          Safe Place vous offre une expérience saine et bienveillante, conçue pour protéger votre santé mentale et limiter les risques d&apos;addiction. Découvrez une plateforme où la transparence et la sécurité sont nos priorités.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#"
            className="bg-white text-primary font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:bg-primary hover:text-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
          >
            Commencer Maintenant
          </a>
          <a
            href="#features"
            className="bg-transparent border border-white text-white font-semibold py-3 px-6 sm:px-8 rounded-full hover:bg-white hover:text-primary hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            En savoir plus
          </a>
        </div>
      </div>

      {/* Section Caractéristiques */}
      <section id="features" className="min-h-screen py-10 flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 sm:mb-12">Caractéristiques de Safe Place</h2>
        <p className="text-base sm:text-lg text-white mb-12 sm:mb-16 max-w-lg sm:max-w-xl mx-auto">
          Découvrez comment Safe Place améliore votre expérience en ligne à travers des fonctionnalités uniques, conçues pour votre bien-être et votre sécurité.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          <div className="bg-primary p-6 sm:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Réduction des Addictions</h3>
            <p className="text-sm sm:text-lg text-white">
              Notre interface est spécialement conçue pour limiter l&apos;usage excessif et favoriser une utilisation modérée des réseaux sociaux.
            </p>
          </div>

          <div className="bg-primary p-6 sm:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Protection de la Vie Privée</h3>
            <p className="text-sm sm:text-lg text-white">
              Safe Place s&apos;engage à vous offrir une transparence totale sur la gestion et l&apos;utilisation de vos données personnelles.
            </p>
          </div>

          <div className="bg-primary p-6 sm:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Sécurité Renforcée</h3>
            <p className="text-sm sm:text-lg text-white">
              Nous intégrons des mesures de sécurité avancées pour limiter les comportements malveillants et protéger nos utilisateurs.
            </p>
          </div>

          <div className="bg-primary p-6 sm:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Impact Positif sur la Santé Mentale</h3>
            <p className="text-sm sm:text-lg text-white">
              Safe Place encourage une utilisation responsable et positive des réseaux sociaux, aidant à protéger votre bien-être mental.
            </p>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section id="how-it-works" className="min-h-screen py-10 flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 sm:mb-12">Comment ça marche ?</h2>
        <p className="text-base sm:text-lg text-white mb-12 sm:mb-16 max-w-lg sm:max-w-xl mx-auto">
          Découvrez en trois étapes simples comment Safe Place vous offre une expérience sécurisée et bienveillante.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <div className="bg-primary p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl font-bold text-white bg-secondary rounded-full h-14 sm:h-16 w-14 sm:w-16 flex items-center justify-center">1</div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Inscription Rapide</h3>
            <p className="text-sm sm:text-lg text-white">
              Créez un compte en quelques clics et rejoignez la communauté Safe Place en toute simplicité.
            </p>
          </div>

          <div className="bg-primary p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl font-bold text-white bg-secondary rounded-full h-14 sm:h-16 w-14 sm:w-16 flex items-center justify-center">2</div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Personnalisation</h3>
            <p className="text-sm sm:text-lg text-white">
              Ajustez vos paramètres pour une expérience entièrement adaptée à vos besoins et à votre bien-être.
            </p>
          </div>

          <div className="bg-primary p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl font-bold text-white bg-secondary rounded-full h-14 sm:h-16 w-14 sm:w-16 flex items-center justify-center">3</div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Interactions Sécurisées</h3>
            <p className="text-sm sm:text-lg text-white">
              Participez aux discussions et partagez des moments en toute sécurité avec une communauté bienveillante.
            </p>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section id="testimonials" className="min-h-screen flex py-10 flex-col justify-center max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 sm:mb-12">Témoignages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          <div className="bg-primary p-6 sm:p-8 rounded-lg shadow-lg">
            <p className="text-lg sm:text-xl italic mb-4">
              &quot;Safe Place a complètement changé ma façon d&apos;utiliser les réseaux sociaux. Je me sens plus en sécurité et moins stressé par les interactions en ligne.&quot;
            </p>
            <h3 className="text-lg sm:text-xl font-semibold">Marie D.</h3>
          </div>
          <div className="bg-primary p-6 sm:p-8 rounded-lg shadow-lg">
            <p className="text-lg sm:text-xl italic mb-4">
              &quot;Depuis que j&apos;utilise Safe Place, j&apos;ai retrouvé un équilibre dans ma consommation des réseaux sociaux. J&apos;apprécie vraiment l&apos;attention portée à la santé mentale.&quot;
            </p>
            <h3 className="text-lg sm:text-xl font-semibold">Lucas B.</h3>
          </div>
          <div className="bg-primary p-6 sm:p-8 rounded-lg shadow-lg">
            <p className="text-lg sm:text-xl italic mb-4">
              &quot;La transparence et la sécurité offertes par Safe Place me rassurent. C&apos;est une plateforme différente des autres, plus respectueuse.&quot;
            </p>
            <h3 className="text-lg sm:text-xl font-semibold">Sophie M.</h3>
          </div>
          <div className="bg-primary p-6 sm:p-8 rounded-lg shadow-lg">
            <p className="text-lg sm:text-xl italic mb-4">
              &quot;Je recommande Safe Place à tous ceux qui cherchent une expérience en ligne plus saine et bienveillante.&quot;
            </p>
            <h3 className="text-lg sm:text-xl font-semibold">Julien P.</h3>
          </div>
        </div>
      </section>
    </div>
  );
}