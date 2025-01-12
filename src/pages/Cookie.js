import React from 'react';

function Cookie() {
  return (
    <div className="mt-16">
      <div className="relative flex items-center justify-center">
        <hr className="absolute left-0 w-full border-t border-gray-500" />
        <h1 className="relative z-10 px-4 bg-black text-white text-3xl md:text-4xl font-bold text-center md:w-96 p-4 pr-5 pl-5 rounded-full md:pt-3 md:pb-3 md:pr-6 md:pl-6">
          Cookie-Richtlinie
        </h1>
      </div>
      <div className="container mx-auto p-6 mt-8 md:mt-16">
        <p className=' text-2xl'>
          Diese Website verwendet Cookies. Weitere Informationen zu den Cookie-Arten finden sich unter den jeweiligen Kategorien. Dort lassen sich auch einzelne Cookies aktivieren. Die Cookie-Einstellungen können jederzeit über den Link im Footer dieser Website angepasst werden.
        </p>
        
        <h2 className="text-2xl font-bold mt-8">Unbedingt erforderlich</h2>
        <p>
          Unbedingt erforderliche Cookies ermöglichen grundlegende Funktionen und sind für die einwandfreie Funktion der Website erforderlich. Daher kann man sie nicht deaktivieren. Diese Art von Cookies wird ausschließlich von dem Betreiber der Website verwendet (First-Party-Cookie) und sämtliche Informationen, die in den Cookies gespeichert sind, werden nur an diese Website gesendet.
        </p>
        <h3 className="text-xl font-semibold mt-4">Cloudflare</h3>
        <p>
          Cloudflare ist ein Dienst, der die Sicherheit und Geschwindigkeit von Webseiten erhöht. Cloudflare bietet ein Content Delivery Network ("CDN"), um die Ladezeiten der Website zu verbessern. Die Nutzung eines CDN ermöglicht es dem Nutzer, Inhalte mit Hilfe regional oder international verteilter Server zum schnelleren Abruf bereitzustellen.
          <br/>
          Anbieter: Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107 USA
          <br/>
          Cookie-Namen und Speicherdauer: __cfruid (Speicherdauer: Session), __cf_bm (Speicherdauer: 30 Minuten), __cf_clearance (Speicherdauer: 30 Minuten)
        </p>

        <h2 className="text-2xl font-bold mt-8">Funktionell</h2>
        <p>
          Funktionelle Cookies ermöglichen dieser Website, bestimmte Funktionen zur Verfügung zu stellen und Informationen zu speichern, die vom Nutzer eingegeben wurden – beispielsweise bereits registrierte Namen oder die Sprachauswahl. Damit werden verbesserte und personalisierte Funktionen gewährleistet.
        </p>
        <h3 className="text-xl font-semibold mt-4">Google Maps</h3>
        <p>
          Diese Cookies sind Teil von Google Maps.
          <br/>
          Anbieter: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA oder Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, wenn Sie in der EU ansässig sind.
          <br/>
          Cookie-Namen und Lebensdauer: UULE (Lebensdauer: 1 Tag), OTZ (Lebensdauer: 2 Wochen), 1P_JAR (Lebensdauer: 1 Monat), SIDCC (Lebensdauer: 1 Jahr), _Secure-3PAPISID (Lebensdauer: 2 Jahre), _Secure-APSID (Lebensdauer: 2 Monate), _Secure-SSID (Lebensdauer: 2 Jahre), HSID (Lebensdauer: 2 Jahre), _Secure-3PSID (Lebensdauer: 2 Jahre), ANID (Lebensdauer: 1 Jahr), SID (Lebensdauer: 2 Jahre) APISID (Lebensdauer: 2 Jahre), _Secure-HSID (Lebensdauer: 2 Monate), SAPISID (Lebensdauer: 2 Jahre), NID (Lebensdauer: 6 Monate)
        </p>

        <h2 className="text-2xl font-bold mt-8">Marketing / Third Party</h2>
        <p>
          Marketing- / Third Party-Cookies stammen unter anderem von externen Werbeunternehmen und werden verwendet, um Informationen über die vom Nutzer besuchten Websites zu sammeln, um z. B. zielgruppenorientierte Werbung für den Benutzer zu erstellen.
        </p>
        <p className="italic">Keine Cookies in dieser Kategorie</p>

        <h2 className="text-2xl font-bold mt-8">Performance</h2>
        <p>
          Die Performance-Cookies sammeln Informationen darüber, wie diese Website genutzt wird. Der Betreiber der Website nutzt diese Cookies um die Attraktivität, den Inhalt und die Funktionalität der Website zu verbessern.
        </p>
        <p className="italic">Keine Cookies in dieser Kategorie</p>
      </div>
    </div>
  );
}

export default Cookie;
