import { z } from "zod";

export const Form = z.object({
  orii: z.boolean(),
  direction: z.enum(["OUTGOING_IN_PERSON", "INCOMING_IN_PERSON",
    "OUTGOING_VIRTUAL", "INCOMING_VIRTUAL"]), // Ajusta los valores si hay otros posibles
  gender: z.string(),
  cta: z.number(),
  entryDate: z.string().refine(val => /^\d{2}-\d{2}-\d{4}$/.test(val), {
    message: "Invalid date format, expected DD-MM-YYYY"
  }),
  exitDate: z.string().refine(val => /^\d{2}-\d{2}-\d{4}$/.test(val), {
    message: "Invalid date format, expected DD-MM-YYYY"
  }),
  originProgram: z.string(),
  destinationProgram: z.string(),
  city: z.string(),
  country: z.string(),
  teacher: z.string(),
  faculty: z.string(),
  funding: z.number(),
  fundingSource: z.string(),
  destination: z.string(),
  origin: z.string(),
  agreementId: z.number(),
  event: z.object({
    description: z.string(),
    eventTypeId: z.number()
  }),
  person: z.object({
    identificationType: z.enum(["CC", "PS", "CE", "DE", "V"]), // Ajusta los valores según las opciones posibles
    personType: z.enum(["TEACHER", "STUDENT", "ADMIN"]),  // Ajusta los valores según las opciones posibles
    firstName: z.string(),
    lastName: z.string(),
    identification: z.string(),
    email: z.string().email().optional(),
  })
});