import { getCollection } from "astro:content";

export async function getCollectionStaticPaths(collectionName: string) {
	const collection = await getCollection(collectionName);

	const visibleItems = collection.filter((item) => !item.data.hidden);

	const paths = visibleItems.map((item) => {
		const slugParts = item.slug.split("/");

		const slug =
			slugParts[0] === "homepage" || slugParts[0] === "index"
				? undefined
				: slugParts.join("/");

		return {
			params: {
				slug,
			},
			props: {
				data: item,
			},
		};
	});

	return paths;
}
