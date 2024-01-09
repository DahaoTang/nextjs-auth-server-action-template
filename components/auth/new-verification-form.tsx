"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { BeatLoader } from "react-spinners";

import { newVerification } from "@/actions/new-verification";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-sucess";

const NewVerificationForm = () => {
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");

	const onSubmit = useCallback(() => {
		if (!token) {
			setError("Missing token!");
			return;
		}
		newVerification(token)
			.then((data) => {
				setSuccess(data.success);
				setError(data.error);
			})
			.catch(() => {
				setError("Something went wrong!");
			});
	}, [token]);

	useEffect(() => {
		onSubmit();
	}, [onSubmit]);

	return (
		<div>
			<CardWrapper
				headerLabel="Confirming your verification"
				backButtonLabel="Back to login"
				backButtonHref="/auth/login"
			>
				<div className="w-full flex items-center justify-center">
					{!success && !error && <BeatLoader />}
					<FormSuccess message={success} />
					<FormError message={error} />
				</div>
			</CardWrapper>
		</div>
	);
};

export default NewVerificationForm;
