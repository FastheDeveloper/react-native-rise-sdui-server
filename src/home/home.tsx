import {
	H1,
	H3,
	H6,
	Text,
	XStack,
	YStack,
} from "@rise-tools/kitchen-sink/server";

export const models = {
	HeaderUI,
	SearchUI,
	NearbyUi: NearbyUi,
	BannerUi,
	ProductUi,
	HomeScreen,
};

function HeaderUI() {
	return (
		<YStack backgroundColor={"red"}>
			<Text>Header Ui</Text>
		</YStack>
	);
}

function SearchUI() {
	return (
		<YStack backgroundColor={"blue"}>
			<H1 color={"black"}>Search Ui</H1>
		</YStack>
	);
}

function NearbyUi() {
	return (
		<YStack backgroundColor={"green"}>
			<H3>Nearby resturants</H3>

			<XStack gap="$12">
				<H6>Nearest resturants</H6>
			</XStack>
		</YStack>
	);
}

function BannerUi() {
	return (
		<YStack backgroundColor={"pink"}>
			<H1>Banner</H1>
		</YStack>
	);
}

function ProductUi() {
	return (
		<YStack backgroundColor={"purple"}>
			<Text>Our Top Product</Text>
			<XStack gap="$8">
				<Text>🌚</Text>
				<Text>🌚</Text>
				<Text>🌚</Text>
				<Text>🌚</Text>
				<Text>🌚</Text>
			</XStack>
		</YStack>
	);
}

function TripUi() {
	return (
		<YStack gap="$8" backgroundColor={"orange"}>
			<Text>Your Trips</Text>
			<Text>🌚</Text>
			<Text>🌚</Text>
			<Text>🌚</Text>
			<Text>🌚</Text>
			<Text>🌚</Text>
		</YStack>
	);
}

function HomeScreen() {
	return (
		<YStack>
			<HeaderUI />
			<SearchUI />
			<NearbyUi />
			<BannerUi />
			<ProductUi />
			<TripUi />
		</YStack>
	);
}
