import React, { useState } from "react";
import { SparklesIcon } from "./icons/icons";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAiGenerate = async () => {
    if (!formData.name) {
      setStatus("Please enter your name first to use the AI assistant.");
      return;
    }
    setIsLoading(true);
    setStatus("Generating with AI...");

    const prompt = `You are a friendly AI assistant for a frontend developer named Nilber Mota. A person named "${formData.name}" is writing a message to him. Generate a single, friendly, and professional introductory sentence for their message. It should be concise and serve as a good starting point for them to continue writing. Do not add placeholders like "[Your Message Here]". Just provide the opening sentence.`;

    const chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = ""; // API key is handled by the environment
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const result = await response.json();

      const aiText = result?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

      if (aiText) {
        setFormData((prev) => ({ ...prev, message: aiText + " " }));
        setStatus("AI suggestion added! Feel free to edit.");
        const textarea = document.getElementById(
          "message"
        ) as HTMLTextAreaElement | null;
        if (textarea) textarea.focus();
      } else {
        throw new Error("Unexpected API response structure.");
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      setStatus("Sorry, the AI assistant is currently unavailable.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In the future: here you would integrate with an email API or serverless function.
    console.log("Form submitted:", formData);
    setStatus("Message sent successfully! (Simulated)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-100/70 dark:bg-slate-900/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 md:mb-12 text-center text-slate-900 dark:text-slate-50 animated-element">
          Get In Touch
        </h2>
        <p className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-400 mb-10 md:mb-16 max-w-2xl mx-auto animated-element">
          Have a project in mind, a question, or just want to say hi? Let’s
          build something great together!
        </p>
        <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 animated-element">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                autoComplete="name"
                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                onClick={handleAiGenerate}
                disabled={isLoading}
                className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <SparklesIcon
                  className={`h-4 w-4 ${
                    isLoading ? "animate-spin" : ""
                  } transition-transform`}
                />
                {isLoading ? "Generating..." : "Generate with AI"}
              </button>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-slate-900 dark:focus:ring-blue-700 transition-colors"
              aria-label="Send contact form"
            >
              Send Message
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
