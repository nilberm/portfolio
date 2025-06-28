import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(
      language === "en"
        ? "Message sent successfully!"
        : "Mensagem enviada com sucesso!"
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-100/70 dark:bg-slate-900/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 md:mb-12 text-center text-slate-900 dark:text-slate-50">
          {language === "en" ? "Get In Touch" : "Entre em Contato"}
        </h2>
        <p className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-400 mb-10 md:mb-16 max-w-2xl mx-auto">
          {language === "en"
            ? "Have a project in mind, a question, or just want to say hi? Let’s build something great together!"
            : "Tem um projeto em mente, uma dúvida ou só quer bater um papo? Vamos construir algo incrível juntos!"}
        </p>
        <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {language === "en" ? "Full Name" : "Nome Completo"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                autoComplete="name"
                placeholder={language === "en" ? "John Doe" : "João da Silva"}
                required
                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {language === "en" ? "Email Address" : "Endereço de Email"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                placeholder="john.doe@example.com"
                required
                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {language === "en" ? "Message" : "Mensagem"}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder={
                  language === "en" ? "Your message..." : "Sua mensagem..."
                }
                required
                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-slate-900 dark:focus:ring-blue-700 transition-colors"
              aria-label={
                language === "en"
                  ? "Send contact form"
                  : "Enviar formulário de contato"
              }
            >
              {language === "en" ? "Send Message" : "Enviar Mensagem"}
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
