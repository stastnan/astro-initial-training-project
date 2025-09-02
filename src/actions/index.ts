import { defineAction } from "astro:actions";
import { z } from "zod";

const fromForm = z.preprocess((v) => (v == null ? "" : v), z.string());

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: fromForm.pipe(z.string().trim().min(1, "Name is required.")),
      email: fromForm.pipe(
        z.string().trim().email("Please enter a valid email.")
      ),
      message: fromForm.pipe(
        z.string().trim().min(10, "Message must be at least 10 characters.")
      ),
      // Honeypot
      company: z
        .preprocess((v) => (v == null ? "" : v), z.string())
        .pipe(z.string().trim())
        .optional()
        .default(""),
    }),
    async handler({ name, email, message, company }) {
      // Honeypot - if exists, silently succeed
      if (company) return { ok: true };

      console.log("VALIDATED ACTION CALLED", { name, email, message });
      // TODO:  save to DB
      return { ok: true };
    },
  }),
};