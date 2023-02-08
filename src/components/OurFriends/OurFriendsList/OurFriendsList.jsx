import { OurFriendsItem } from '../OurFriendsItem/OurFriendsItem';


export const OurFriendsList = ({ data }) => {
	return (
		<ul >
			{data.map(({ _id, ...info }) => {
				return <OurFriendsItem key={_id} data={info} />;
			})}
		</ul>
	);
};