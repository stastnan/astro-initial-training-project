import { defineAction } from "astro:actions";
import { z } from "astro:schema";

async function sendContactEmail({
  name, email, message,
}: { name: string; email: string; message: string }) {
  console.log("[contact]", { name, email, message });
}

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1),
      email: z.string().email(),
      message: z.string().min(1),
      company: z.string().max(0).optional().default(""),
      locale: z.string().optional(),
    }),
    async handler({ name, email, message, company }) {
      if (company && company.trim().length > 0) {
        return { ok: true };
      }
      await sendContactEmail({ name, email, message });
      return { ok: true };
    },
  }),
};