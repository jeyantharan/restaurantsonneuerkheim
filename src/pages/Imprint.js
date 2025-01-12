import React from "react";

function Imprint() {
  return (
    <div className="mt-16">
      <div className="relative flex items-center justify-center">
        <hr className="absolute left-0 w-full border-t border-gray-500" />
        <h1 className="relative z-10 px-4 bg-black text-white text-3xl md:text-4xl font-bold text-center  w-64 md:w-80 p-2 md:p-4 pr-5 pl-5 rounded-full md:pt-3 md:pb-3 md:pr-14 md:pl-14">
          Impressum
        </h1>
      </div>
      <div className="container mx-auto p-6 mt-8 md:mt-16 md:text-lg">
        <p className="mb-4">
          In den meisten Ländern der Welt ist gesetzlich vorgeschrieben, dass Websites, die nicht ausschließlich privaten oder persönlichen Zwecken dienen, ein rechtsgültiges Impressum enthalten müssen. Das gilt auch für Websites, die einen Blog oder journalistische Texte veröffentlichen.
        </p>
        <p className="mb-4">
          Der Name der für den Inhalt verantwortlichen Person muss im Impressum genannt werden, mit Adresse und einer Möglichkeit der Kontaktaufnahme. Das kann zum Beispiel eine Telefonnummer oder eine Emailadresse sein. Darüberhinaus können je nach Rechtslage in deinem Land weitere Informationen nötig sein. Bitte ziehe einen lokalen Experten zurate, um dich zu informieren, wie dein Impressum genau aussehen muss.
        </p>
      </div>
    </div>
  );
}

export default Imprint;
