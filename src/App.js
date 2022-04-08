import {
	Flex,
	Heading,
	MapView,
	View,
	Text,
	Image,
} from '@aws-amplify/ui-react'
import { useState } from 'react'
import { Marker, Popup } from 'react-map-gl'

const locationData = [
	{
		id: 1,
		title: 'Amplify Team Dinner',
		description:
			"It's not everyone, but I'm grateful I was able to see folks in real life and bond over food, drinks and laughs!",
		image:
			'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_20220330_204113.jpeg',
		longitude: -122.3098577,
		latitude: 47.6248646,
	},
	{
		id: 2,
		title: 'Pike Place Market',
		description:
			"I went to this farmer's market everyday and after 5 days I was still finding new things! Plus the food is amazing🤤",
		image:
			'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_4767.jpeg',
		longitude: -122.3443816,
		latitude: 47.6097236,
	},
	{
		id: 3,
		title: 'Seattle Underground Tour',
		description:
			"Seattle has so much history! I was able to walk through an old bootlegger's hole from prohibition days.",
		image:
			'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_4826.jpg',
		longitude: -122.3358691,
		latitude: 47.6023561,
	},
	{
		id: 4,
		title: 'Amazon Spheres',
		description:
			'This botanical workspace is a nice way to escape the Seattle weather.',
		image:
			'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_4904.jpeg',
		longitude: -122.3415544,
		latitude: 47.6158954,
	},
	{
		id: 5,
		title: 'Bainbridge Island Ferry',
		description:
			'I took my very first ferry ride! My wife and I spent a day away from the city by visting the quaint island of Bainbridge',
		image:
			'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_4951.jpeg',
		longitude: -122.3402124,
		latitude: 47.6025113,
	},
	{
		id: 6,
		title: 'My first day in the office (Blackfoot)',
		description:
			'Rachel Lee goes down in history as the first in-person coworker I met💜',
		image:
			'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_7282.jpeg',
		longitude: -122.3381659,
		latitude: 47.615686,
	},
]

function MarkerWithPopup({ latitude, longitude, title, description, image }) {
	const [showPopup, setShowPopup] = useState(false)

	const handleMarkerClick = ({ originalEvent }) => {
		originalEvent.stopPropagation()
		setShowPopup(true)
	}

	return (
		<>
			<Marker
				latitude={latitude}
				longitude={longitude}
				onClick={handleMarkerClick}
				scale={0.8}
				color={'blue'}
			/>
			{showPopup && (
				<Popup
					latitude={latitude}
					longitude={longitude}
					offset={{ bottom: [0, -40] }}
					onClose={() => setShowPopup(false)}
				>
					<Heading level={5}>{title}</Heading>
					<Text>{description}</Text>
					<Flex justifyContent={'center'}>
						<Image
							objectFit={'contain'}
							width="200px"
							height="200px"
							src={image}
						/>
					</Flex>
				</Popup>
			)}
		</>
	)
}

function App() {
	return (
		<View>
			<Flex direction={'column'} alignItems={'center'}>
				<Heading level={3}>Amplify Seattle Visit</Heading>
				<MapView
					initialViewState={{
						longitude: -122.3381659,
						latitude: 47.615686,
						zoom: 12,
					}}
					style={{ width: '600px', height: '600px' }}
				>
					{locationData.map((loc) => (
						<MarkerWithPopup
							key={loc.id}
							latitude={loc.latitude}
							longitude={loc.longitude}
							title={loc.title}
							description={loc.description}
							image={loc.image}
						/>
					))}
				</MapView>
			</Flex>
		</View>
	)
}

export default App
