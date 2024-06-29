import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";
import type { PagesFunction } from "@cloudflare/workers-types";

export const onRequest: PagesFunction = (context) => {
	const data = context?.data;

	return mailChannelsPlugin({
		personalizations: [
			{
				to: [{ name: "Giulio Zanchetta", email: "giulio.zanchetta@majestico.co" }],
				dkim_domain: "majestico.co",
				dkim_selector: "mailchannels",
				dkim_private_key: (context as any).env.DKIM_PRIVATE_KEY as string,
				subject: `Website form submission from ${data?.name}`,
			},
		],
		from: {
			name: data?.name?.toString() ?? "Enquiry",
			email: "no-reply@majestico.co",
		},
		respondWith: () =>
			new Response(null, {
				status: 302,
				headers: { Location: "/thank-you" },
			}),
	})(context);
};
