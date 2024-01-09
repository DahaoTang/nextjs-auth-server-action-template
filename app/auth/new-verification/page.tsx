"use client";

import { useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { BeatLoader } from "react-spinners";

import { CardWrapper } from "@/components/auth/card-wrapper";

const NewVerificationForm = () => {
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const onSubmit = useCallback(() => {
		console.log(token);
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
					<BeatLoader />
				</div>
			</CardWrapper>
		</div>
	);
};

export default NewVerificationForm;
