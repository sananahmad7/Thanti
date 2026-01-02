import React from "react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Thanti Snacking Bar",
  description: "Get in touch regarding reservations, events, or inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}
