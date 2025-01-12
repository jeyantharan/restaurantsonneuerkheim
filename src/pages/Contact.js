import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false, // Default value for newsletter subscription
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      phone,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add form submission logic here
  };

  return (
    <div className="mt-16">
      <div className="relative flex items-center justify-center">
        <hr className="absolute left-0 w-full border-t border-gray-500" />
        <h1 className="relative z-10 px-4 bg-black text-white text-3xl md:text-5xl font-bold text-center md:w-72 p-4 pr-5 pl-5 rounded-full md:pt-3 md:pb-3 md:pr-14 md:pl-14">
          Kontakt
        </h1>
      </div>
      <div className="container mx-auto p-6 mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" col-span-2 w-full h-96">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.5459931056566!2d8.020732677021094!3d47.3036711711637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47902497acb88157%3A0xe1d1a6d7dbc53b0e!2sAlte%20Dorfstrasse%204%2C%204813%20Uerkheim%2C%20Switzerland!5e0!3m2!1sen!2slk!4v1717093846251!5m2!1sen!2slk"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:flex mt-6 md:mt-0 md:space-x-44">
          <div>
            <h2 className="text-2xl font-bold mb-4">Unsere Kontaktdetails</h2>
            <p className="mb-2">
              <strong>Adresse:</strong> Alte Dorfstrasse, 44813 Uerkheim AG.
              Schweiz
            </p>
            <p className="mb-2">
              <strong>Telefon:</strong> 062 721 40 00
            </p>
            <p className="mb-2">
              <strong>Email:</strong> Restaurantsonne1@gmail.com
            </p>
            <p className="mb-2">
              <strong>Website:</strong> WWW.Restaurantsonneuerkheim.ch
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mt-4 md:mt-0 mb-4">Öffnungszeiten</h2>
            <p className="mb-2">
              <strong>Mo - </strong>Fr 08.30 - 22.30
            </p>
            <p className="mb-2">
              <strong>Di -</strong> Ruhetag
            </p>
            <p className="mb-2">
              <strong>Sa -</strong> 09.30 - 22.30
            </p>
            <p className="mb-2">
              <strong>So -</strong> 09.30 - 21.00
            </p>
          </div>
        </div>

        <div className="col-span-2 w-full">
          <p className="text-lg">
            Für Reservierungen oder Fragen können Sie uns jederzeit erreichen.
            Wir freuen uns auf Ihren Besuch!
          </p>
        </div>
      </div>
      <div className="flex justify-center  m-10 md:ml-40 md:mr-40">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Kontaktieren Sie uns</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telefonnummer
            </label>
            <PhoneInput
              country={"ch"}
              value={formData.phone}
              onChange={handlePhoneChange}
              containerStyle={{ width: "100%" }}
              inputStyle={{ width: "100%" }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nachricht
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Newsletter abonnieren
            </label>
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="mt-1 rounded"
            />
            <span className="ml-2 text-gray-500">
              Ja, ich möchte per E-Mail über Marketing-Updates, Neuigkeiten
              sowie Sonderangebote von Euch informiert werden. Ich kann meine
              Einwilligung jederzeit widerrufen, indem ich auf den
              "Abmelden"-Link in einer beliebigen Marketing-Mail klicke oder
              Euch dazu eine E-Mail schicke.
            </span>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Absenden
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
