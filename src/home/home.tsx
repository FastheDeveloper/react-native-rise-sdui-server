import {
	H3,
	H6,
	H5,
	RiseForm,
	Text,
	XStack,
	YStack,
	InputField,
} from "@rise-tools/kitchen-sink/server";

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
	PackageIcon,
	ErrandIcon,
	Ridesicon,
	ResturantIcon,
} from "~/components/UserIcon";

export const models = {
	HeaderUI,
	SearchUI,
	NearbyUi: NearbyUi,
	BannerUi,
	ProductUi,
	HomeScreen,
};

const myProducts = [
	{
		name: "Package",
		icon: <PackageIcon width={32} height={32} />,
	},
	{
		name: "Rides",
		icon: <Ridesicon width={35} height={32} />,
	},
	{
		name: "Errands",
		icon: <ErrandIcon width={32} height={32} />,
	},
	{
		name: "Resturant",
		icon: <ResturantIcon width={32} height={32} />,
	},
];
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
					Nearby Resturants
				</H3>
				<H3 color={"#838282"} fontSize={20}>
					See all
				</H3>
			</XStack>

			<XStack justifyContent={"space-between"} alignItems={"center"}>
				<XStack gap={"$2"} alignItems={"center"}>
					<SmallFork width={34} height={34} />
					<YStack gap={"$2"}>
						<H6 color={"#000"} fontWeight={"500"}>
							The Place Restaurant
						</H6>
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
		<YStack gap={"$2"}>
			<XStack alignItems={"flex-end"} justifyContent={"space-between"}>
				<H5 color={"black"} fontWeight={"500"}>
					Our Products
				</H5>
				<H3 color={"#838282"} fontSize={20}>
					See all
				</H3>
			</XStack>
			<XStack marginBottom={"$4"}>
				{myProducts.map((item) => (
					<YStack
						key={item.name}
						justifyContent="space-between"
						alignItems="center"
						flex={1}>
						<YStack alignItems="center">
							<YStack
								backgroundColor="#ECECEC"
								borderRadius={"$4"}
								padding={"$4"}
								marginVertical={"$2"}>
								{item.icon}
							</YStack>
							<Text fontSize={14} color={"#0F0F0F"}>
								{item.name}
							</Text>
						</YStack>
					</YStack>
				))}
			</XStack>
		</YStack>
	);
}

function TripUi() {
	return (
		<YStack gap={"$2"}>
			<XStack alignItems={"flex-end"} justifyContent={"space-between"}>
				<H5 color={"black"} fontWeight={"500"}>
					Your trips
				</H5>
				<H3 color={"#838282"} fontSize={20}>
					See all
				</H3>
			</XStack>
			<XStack justifyContent={"space-between"} alignItems={"center"}>
				<XStack gap={"$2"} alignItems={"center"}>
					<SmallFork width={34} height={34} />
					<YStack gap={"$2"}>
						<H6 color={"#000"} fontWeight={"500"}>
							So Fresh
						</H6>
						<XStack gap={"$4"} alignItems={"center"}>
							<XStack gap={"$2"}>
								<ClockIcon width={16} height={16} />
								<Text color={"#838282"}>1hr drive</Text>
							</XStack>
							<XStack gap={"$2"}>
								<StarIcon width={16} height={16} />
								<Text color={"#838282"}>4</Text>
							</XStack>
						</XStack>
					</YStack>
				</XStack>
				<H6 color={"#000"} fontWeight={"500"}>
					₦12,000.00
				</H6>
			</XStack>
			<XStack
				justifyContent={"space-between"}
				alignItems={"center"}
				marginTop={"$4"}>
				<XStack gap={"$2"} alignItems={"center"}>
					<Ridesicon width={34} height={34} />
					<YStack gap={"$2"}>
						<H6 color={"#000"} fontWeight={"500"}>
							Film house cinema
						</H6>
						<XStack gap={"$4"} alignItems={"center"}>
							<XStack gap={"$2"}>
								<ClockIcon width={16} height={16} />
								<Text color={"#838282"}>15mins drive</Text>
							</XStack>
							<XStack gap={"$2"}>
								<StarIcon width={16} height={16} />
								<Text color={"#838282"}>2.5</Text>
							</XStack>
						</XStack>
					</YStack>
				</XStack>
				<H6 color={"#000"} fontWeight={"500"}>
					₦5,000.00
				</H6>
			</XStack>
			<XStack
				justifyContent={"space-between"}
				alignItems={"center"}
				marginTop={"$4"}>
				<XStack gap={"$2"} alignItems={"center"}>
					<Ridesicon width={34} height={34} />
					<YStack gap={"$2"}>
						<H6 color={"#000"} fontWeight={"500"}>
							iFitness Gym
						</H6>
						<XStack gap={"$4"} alignItems={"center"}>
							<XStack gap={"$2"}>
								<ClockIcon width={16} height={16} />
								<Text color={"#838282"}>10min drive</Text>
							</XStack>
							<XStack gap={"$2"}>
								<StarIcon width={16} height={16} />
								<Text color={"#838282"}>2.5</Text>
							</XStack>
						</XStack>
					</YStack>
				</XStack>
				<H6 color={"#000"} fontWeight={"500"}>
					₦3,000.00
				</H6>
			</XStack>
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
