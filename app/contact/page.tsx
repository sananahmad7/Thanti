import React from "react";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
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
