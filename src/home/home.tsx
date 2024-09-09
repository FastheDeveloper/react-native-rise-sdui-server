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
	InputField,
} from "@rise-tools/kitchen-sink/server";
import { Svg } from "@rise-tools/kit-svg/server";
import { response } from "@rise-tools/react";
import {
	UserIcon,
	Hamburger,
	SearchIcon,
	MicIcon,
	SmallFork,
	RightIcon,
	ClockIcon,
	StarIcon,
	CarIcon,
} from "~/components/UserIcon";

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
							F.A.S
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
		<XStack alignItems={"center"}>
			<SearchIcon width={20} height={20} />
			<RiseForm onSubmit={() => {}} flex={1} justifyContent={"center"}>
				<InputField
					id="searchInput"
					backgroundColor={"#fff"}
					borderWidth={0}
					borderRadius={0}
					height={40}
					style={{ marginTop: -14 }}
					placeholder={"Where are you going?"}
					placeholderTextColor={"#838282"}
					color={"black"}
				/>
			</RiseForm>
			<MicIcon width={20} height={20} />
		</XStack>
	);
}

function NearbyUi() {
	return (
		<YStack marginTop={"$4"} gap={"$2"}>
			<XStack alignItems={"flex-end"} justifyContent={"space-between"}>
				<H3 color={"black"} fontWeight={"500"}>
					Nearby resturants
				</H3>
				<H5 ccolor={"#838282"} fontSize={12}>
					See all
				</H5>
			</XStack>

			<XStack justifyContent={"space-between"} alignItems={"center"}>
				<XStack gap={"$2"} alignItems={"center"}>
					<SmallFork width={34} height={34} />
					<YStack gap={"$2"}>
						<H6 color={"#000"}>The Place Restaurant</H6>
						<XStack gap={"$4"} alignItems={"center"}>
							<XStack gap={"$2"}>
								<ClockIcon width={16} height={16} />
								<Text color={"#838282"}>5mins drive</Text>
							</XStack>
							<XStack gap={"$2"}>
								<StarIcon width={16} height={16} />
								<Text color={"#838282"}>4.5</Text>
							</XStack>
						</XStack>
					</YStack>
				</XStack>
				<RightIcon width={24} height={24} />
			</XStack>
		</YStack>
	);
}

function BannerUi() {
	return (
		<XStack
			backgroundColor={"#24B229"}
			alignItems={"center"}
			justifyContent={"space-between"}
			paddingHorizontal={"$4"}
			marginVertical={"$4"}
			borderRadius={15}>
			<YStack>
				<Text fontSize={20} color={"white"} fontWeight={"500"}>
					Ride with us.
				</Text>
				<Text fontSize={20} color={"white"} fontWeight={"500"}>
					Earn Points.
				</Text>
				<Text fontWeight={"500"} color={"white"}>
					Get Started {"->"}
				</Text>
			</YStack>
			<CarIcon width={187} height={118} />
		</XStack>
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
		<YStack paddingHorizontal={"$4"}>
			<HeaderUI />
			<SearchUI />
			<NearbyUi />
			<BannerUi />
			<ProductUi />
			<TripUi />
		</YStack>
	);
}
