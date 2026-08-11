import Link from "next/link";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { contact } from "@/lib/contact";

export function WhatsappFloatButton() {
  return (
    <Link
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <SiWhatsapp size={28} color="#ffffff" />
    </Link>
  );
}
