import { env } from "@/lib/env";

export function whatsappUrl(message: string) {
  const number = env.NEXT_PUBLIC_WHATSAPP_NUMBER.replace(/[^\d]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
