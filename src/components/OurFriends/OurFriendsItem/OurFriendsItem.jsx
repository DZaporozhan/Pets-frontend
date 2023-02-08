import { OurFriendsInfo } from './OurFriendsInfo/OurFriendsInfo';
import friend from "./Friend.png";

export const OurFriendsItem = ({ data }) => {
	const { title, address, addressUrl, email, imageUrl, phone, url, workDays } =
		data;



	return (
		<li >
			<a  href={url}>
				{title}
			</a>
			<div>
				<div >
					{imageUrl ? (
						<img
							src={imageUrl}
							alt="Partner Logo"
						/>
					) : (
						<img width={"110px"}
						
							src={friend }
							alt="Partner Logo"
						/>
					)}
				</div>
				<OurFriendsInfo
					addressUrl={addressUrl}
					address={address}
					email={email}
					phone={phone}
					workDays={workDays}
				/>
			</div>
		</li>
	);
};