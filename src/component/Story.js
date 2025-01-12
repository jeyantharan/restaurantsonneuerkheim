import React from 'react'

export default function Story() {
  return (
    <div className="max-w-md mx-auto bg-gray-300 mt-6 md:mt-28  pt-6 pb-6 mb-6 shadow-md overflow-hidden md:max-w-6xl rounded-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-72 ml-10 object-cover md:h-full md:w-96 "
              src="https://res.cloudinary.com/jeyanth/image/upload/v1717007432/293bfbe9-aecb-4835-b903-7f8938db4554-ezgif.com-webp-to-jpg-converter_hsjpmt.jpg"
              alt="Story Image"
            />
          </div>
          <div className="p-8 ml-2">
            <h2 className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
            UNSERE REISE
            </h2>
            <p className="mt-2 text-black-500">
            Unsere Geschichte begann in einer bescheidenen Küche mit dem Traum, die
              Aromen der Welt für unsere Gemeinschaft. Inspiriert von Familienrezepten
              und kulinarischen Abenteuern haben wir uns vorgenommen, einen Ort zu schaffen, an dem Essen
              bringt Menschen zusammen.
            </p>
            <p className="mt-2 text-black-500">
            Von unserem ersten Service an haben wir uns der Zubereitung von Gerichten verschrieben
              mit Liebe und feinsten Zutaten. Unsere Reise war gefüllt
              mit Herausforderungen und Triumphen, von denen jeder das Herz und die Seele formt
              unseres Restaurants.
            </p>
            <p className="mt-2 text-black-500">
            Heute sind wir stolz darauf, Sie in unserem Haus begrüßen zu dürfen, wo jede Mahlzeit
              ist eine Feier unseres Erbes und unserer Leidenschaft für außergewöhnliche
              Küche.
            </p>
            <p className="mt-2 text-black-500">
            Während wir weiter wachsen, sind wir weiterhin bestrebt, Ihnen Folgendes zu bieten
              ein unvergessliches kulinarisches Erlebnis, verwurzelt in Tradition und
              Innovation.
            </p>
            <p className="mt-2 text-black-500">
            Danke, dass Sie ein Teil unserer Geschichte sind. Wir freuen uns auf
              Schaffen Sie viele weitere köstliche Erinnerungen mit Ihnen.
            </p>
          </div>
        </div>
      </div>
  )
}
