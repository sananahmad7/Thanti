"use client";

import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaSpinner, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  // =======================
  // 1. LOGIC & STATE
  // =======================
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setStatus("error");
      setErrorMessage("Please complete the check to prove you are human.");
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        recaptchaRef.current?.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  // =======================
  // 2. THE UI (Layout + Form)
  // =======================
  return (
    <section className="relative w-full py-32 px-6 md:px-12 flex items-center justify-center min-h-screen overflow-hidden bg-[#181816]">
      {/* Background Texture (Moved Inside Component) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="n">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#n)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        {/* LEFT SIDE: CONTEXT & INFO */}
        <div className="space-y-12 pt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div>
            <span className="text-[#FF9F2E] text-xs tracking-[0.3em] uppercase block mb-6">
              Get in Touch
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#E0E0E0] leading-none">
              Write to <br /> the room.
            </h1>
          </div>

          <p className="text-[#8C8681] text-lg font-light leading-relaxed max-w-md border-l border-[#4A3B32] pl-6 delay-100">
            Whether you're looking to book a large table, ask about tonight's
            roast, or suggest a musician for Acoustic Fridays.
          </p>

          <div className="space-y-6 pt-8 delay-200">
            <div className="flex items-center gap-4 text-[#E0E0E0]">
              <div className="w-10 h-10 border border-[#4A3B32] rounded-full flex items-center justify-center text-[#FF9F2E]">
                <FaPhoneAlt size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#8C8681] uppercase tracking-widest">
                  Call Us
                </span>
                <span className="font-serif text-xl">+977 980-0000000</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#E0E0E0]">
              <div className="w-10 h-10 border border-[#4A3B32] rounded-full flex items-center justify-center text-[#FF9F2E]">
                <FaEnvelope size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#8C8681] uppercase tracking-widest">
                  Email Us
                </span>
                <span className="font-serif text-xl">hello@thanti.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div className="bg-[#141412] border border-[#4A3B32]/50 p-8 md:p-12 relative shadow-2xl animate-in fade-in zoom-in-95 duration-1000 delay-300">
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#FF9F2E]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#FF9F2E]" />

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-xs text-[#8C8681] uppercase tracking-widest group-focus-within:text-[#FF9F2E] transition-colors">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#4A3B32] py-2 text-[#E0E0E0] outline-none focus:border-[#FF9F2E] transition-colors placeholder:text-[#4A3B32]/50"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-xs text-[#8C8681] uppercase tracking-widest group-focus-within:text-[#FF9F2E] transition-colors">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#4A3B32] py-2 text-[#E0E0E0] outline-none focus:border-[#FF9F2E] transition-colors placeholder:text-[#4A3B32]/50"
                  placeholder="+977..."
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="space-y-2 group">
              <label className="text-xs text-[#8C8681] uppercase tracking-widest group-focus-within:text-[#FF9F2E] transition-colors">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#4A3B32] py-2 text-[#E0E0E0] outline-none focus:border-[#FF9F2E] transition-colors placeholder:text-[#4A3B32]/50"
                placeholder="john@example.com"
              />
            </div>

            {/* Row 3 */}
            <div className="space-y-2 group">
              <label className="text-xs text-[#8C8681] uppercase tracking-widest group-focus-within:text-[#FF9F2E] transition-colors">
                Subject *
              </label>
              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#141412] border-b border-[#4A3B32] py-2 text-[#E0E0E0] outline-none focus:border-[#FF9F2E] transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="Table Reservation">Table Reservation</option>
                <option value="Private Event">Private Event</option>
                <option value="Musician Inquiry">Musician Inquiry</option>
                <option value="General Question">General Question</option>
              </select>
            </div>

            {/* Row 4 */}
            <div className="space-y-2 group">
              <label className="text-xs text-[#8C8681] uppercase tracking-widest group-focus-within:text-[#FF9F2E] transition-colors">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#4A3B32] py-2 text-[#E0E0E0] outline-none focus:border-[#FF9F2E] transition-colors placeholder:text-[#4A3B32]/50 resize-none"
                placeholder="How can we help?"
              />
            </div>

            {/* reCAPTCHA */}
            <div className="pt-4 overflow-hidden">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                theme="dark"
              />
            </div>

            {/* Feedback Messages */}
            {status === "error" && (
              <div className="text-red-400 text-sm animate-in fade-in">
                {errorMessage}
              </div>
            )}
            {status === "success" && (
              <div className="text-green-400 text-sm animate-in fade-in">
                Message sent successfully.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full bg-[#E0E0E0] text-[#181816] py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#FF9F2E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <FaSpinner className="animate-spin" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
