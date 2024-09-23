import { z } from "zod";

export const Convenio = z.object({
  institution: z.string(),
  agreementNumber: z.string(),
  status: z.enum(['ACTIVE', 'INACTIVE']), // Asumí que pueden haber otros valores como 'INACTIVE'
  country: z.string(),
  description: z.string(),
  scope: z.enum(['NATIONAL', 'INTERNATIONAL']), // Asumí que pueden haber otros valores como 'NATIONAL'
  startDate: z.string().refine(date => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
});
