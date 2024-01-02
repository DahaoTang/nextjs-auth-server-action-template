"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

import bcrypt from "bcrypt";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
	const validatedFields = RegisterSchema.safeParse(value);

	if (!validatedFields.success) {
		return { error: "Invalid fields!" };
	}

	const { email, password, name } = validatedFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const exisingUser = await getUserByEmail(email);
	if (exisingUser) {
		return { error: "Email already in use!" };
	}

	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	});

	// TODO: Send verification token email

	return { success: "User created!" };
};
