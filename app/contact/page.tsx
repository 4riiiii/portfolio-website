import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Arika Kashyap: email, GitHub, LinkedIn and CV.",
};

export default function ContactPage() {
  return <Contact asPage />;
}
