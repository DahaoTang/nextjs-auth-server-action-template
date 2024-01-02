"use server";

import * as z from "zod";

import { RegisterSchema } from "@/schemas";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
	const validatedFields = RegisterSchema.safeParse(value);

	if (!validatedFields.success) {
		return { error: "Invalid fields!" };
	}

	return { success: "Email sent!" };
};
