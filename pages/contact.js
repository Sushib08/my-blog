import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useState } from "react";

export default function Contact() {
  const [submitStatus, setSumbitStatus] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [alertColor, setAlertColor] = useState("bg-green-500");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      firstName: event.target.firstName.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    const jsonData = JSON.stringify(data);

    const response = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });

    const result = await response.json();
    console.log(result.data);

    setSumbitStatus(true);
    setResponseMessage(result.data);

    if (!response.ok) {
      setAlertColor("text-red-500");
    } else {
      setAlertColor("text-green-500");
    }
  };

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="h-[50vh] min-h-[20rem] bg-[url('/home.jpg')] relative">
        <div className="absolute bg-slate-900 inset-0 z-0 opacity-40"></div>

        <div className="container lg:max-w-4xl mx-auto">
          <SiteHeader className="header-blog-home z-10 relative" />
        </div>

        <h1 className="text-6xl text-center text-slate-100 relative z-10 py-8">
          Contactez-Nous
        </h1>

        <p className="relative z-10 text-center text-slate-200 text-2xl">
          J'essaierais de Répondre à Tous vos Messages
        </p>
      </div>
      <section>
        <div className="container mx-auto lg:max-w-4xl mt-4">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">Nom/Prénom:</label>
            <input type="text" id="firstName" name="firstName" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>

            <button type="submit">Envoyer</button>
          </form>
          {submitStatus ? (
            <SubmissionAlert
              message={responseMessage}
              alertColor={alertColor}
            />
          ) : null}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

const SubmissionAlert = ({ message, alertColor }) => {
  return (
    <div className={`${alertColor} py-2 px-4 text-center rounded-md`}>
      {message}
    </div>
  );
};
