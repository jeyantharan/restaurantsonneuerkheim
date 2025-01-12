// src/pages/PrivacyPolicy.js
import React from "react";

function Privacy() {
  return (
    <div className="mt-16">
      <div className="relative flex items-center justify-center">
        <hr className="absolute left-0 w-full border-t border-gray-500" />
        <h1 className="relative z-10 px-4 bg-black text-white text-2xl md:text-3xl font-bold text-center md:w-96 p-4 md:p-2 pr-5 pl-5 rounded-full md:pt-3 md:pb-3 md:pr-6 md:pl-6">
          Datenschutzerklärung
        </h1>
      </div>
      <div className="container mx-auto p-6 mt-8 md:mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Wichtiger Hinweis zu der Datenschutzrichtlinie
        </h2>
        <p className="mb-4">
          Herzlich Willkommen zu deiner Datenschutzrichtlinie. Bitte beachte,
          dass der Inhalt dieser Seite lediglich als Platzhalter dient und keine
          gültige Datenschutzrichtlinie darstellt. Es liegt in deiner
          Verantwortung, eine Datenschutzrichtlinie für deine Website zu
          erstellen und zu veröffentlichen, die den geltenden Gesetzen und
          Vorschriften entspricht.
        </p>
        <p className="mb-4">
          Eine klare und transparente Datenschutzrichtlinie ist wichtig, um das
          Vertrauen deiner Website-Besucher zu gewinnen und dir einen Ruf als
          verantwortungsbewusstes und vertrauenswürdiges Unternehmen aufzubauen.
          Stelle klar dar, welche Informationen du sammelst, wie du sie
          verwendest, mit wem du sie teilst und wie du sie schützt. Auf diese
          Weise kannst du dich vor rechtlichen Problemen schützen und
          sicherstellen, dass deine Website-Besucher über ihre Rechte und die
          Verwendung ihrer persönlichen Daten informiert sind.
        </p>
        <p className="mb-4">
          Obwohl es im Internet viele gute Quellen gibt, die dir bei der
          Erstellung einer Datenschutzrichtlinie helfen können, sind diese
          nicht immer auf deine spezifischen Bedürfnisse oder die rechtlichen
          Anforderungen deines Landes zugeschnitten. Eine professionelle
          Beratung ist oft der beste Weg, um sicherzustellen, dass deine
          Datenschutzrichtlinie vollständig ist, deine Datenerfassung genau
          widerspiegelt und die Datenschutzrechte der Besucher deiner Website
          wirksam schützt.
        </p>
        <p className="mb-4">
          Falls dir die Erstellung einer Datenschutzrichtlinie zu aufwendig ist,
          bietet Jimdo eine Lösung an. Jimdo hat sich mit Trusted Shops
          zusammengetan und bietet das Add-On "Impressum-Generator" an. Mit dem
          Impressum-Generator kannst du individuelle Rechtstexte für deine
          Website und deinen Shop erstellen. Die Texte werden automatisch in
          deine Website eingebunden und bei jeder Gesetzesänderung
          aktualisiert. Falls doch einmal etwas schiefgehen sollte, bist du
          durch den hervorragenden Abmahnschutz von Trusted Shops abgesichert.
          <a
            href="https://www.jimdo.com"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Klicke hier für weitere Informationen
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Privacy;
