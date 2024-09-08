import { goBack } from "@rise-tools/kit-expo-router/server";
import { Image } from "@rise-tools/kit-tamagui/server";
import {
	Avatar,
	AvatarImage,
	H1,
	H3,
	H6,
	H5,
	H4,
	RiseForm,
	SubmitButton,
	Text,
	TextField,
	toast,
	XStack,
	YStack,
} from "@rise-tools/kitchen-sink/server";
import { Svg } from "@rise-tools/kit-svg/server";
import { response } from "@rise-tools/react";
import { UserIcon, Hamburger } from "~/components/UserIcon";

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
		<XStack
			alignItems={"center"}
			padding={"$2"}
			justifyContent={"space-between"}>
			<XStack>
				<UserIcon width={70} height={60} />
				<XStack alignItems={"center"}>
					<YStack>
						<Text color={"#838282"}>Hello,</Text>
						<H3 color={"#0F0F0F"} fontWeight={"700"}>
							Ayodamola Seriki
						</H3>
					</YStack>
				</XStack>
			</XStack>

			<Hamburger width={32} height={32} />
		</XStack>
	);
}

function SearchUI() {
	return (
		<YStack backgroundColor={"blue"}>
			<RiseForm onSubmit={() => {}}>
				<TextField
					id="noes"
					label="Additional comments"
					backgroundColor={"aqua"}
				/>
			</RiseForm>
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
