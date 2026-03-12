import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Insideout Automation. Have questions about our 3D Services or want to upgrade your home? Contact us via email, phone, or visit our location in XYZ Street Road, Accra. We're here to help you start your smart living journey.",
  openGraph: {
    title: "Contact Insideout Automation",
    description: "Get in touch with Insideout Automation. Have a question or want to schedule a consultation? Contact us via email, phone, or visit our location.",
    images: ["/images/contact.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
