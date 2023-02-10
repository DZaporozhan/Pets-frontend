import { OurFriendsInfo } from './OurFriendsInfo/OurFriendsInfo';
import friend from "./Friend.png";
import {Item, Title, Wrap, ImageWrap, Image} from "./OurFriendsItem.styled"

export const OurFriendsItem = ({ data }) => {
	const { title, address, addressUrl, email, imageUrl, phone, url, workDays } =
		data;

		const sliceAddress = address => {
			if (address.length > 25) {
				return address.slice(0, 25) + '...';
			} else {
				return address;
			}
		};


	return (
		<Item>
			<Title target="_blank" rel="noreferrer noopener"  href={url}>
				{title}
			</Title>
			<Wrap>
				<ImageWrap>
					{imageUrl ? (
						<Image
							src={imageUrl}
							alt="Partner Logo"
													/>
					) : (
						<Image 
							src={friend }
							alt="Partner Logo"
						/>
					)}
				</ImageWrap>
				<OurFriendsInfo
					addressUrl={addressUrl}
					address={address}
					email={email}
					phone={phone}
					sliceAddress={sliceAddress}
					workDays={workDays}
				/>
			</Wrap>
		</Item>
	);
};