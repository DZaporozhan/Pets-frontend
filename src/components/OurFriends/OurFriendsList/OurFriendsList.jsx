
import { OurFriendsItem } from '../OurFriendsItem/OurFriendsItem';
import {List} from "./OurFriendsList.styled"
// import style from './OurFriendsList.module.css';

export const OurFriendsList = ({ data }) => {
	return (
		<List>
			{data.map(({ _id, ...info }) => {
				return <OurFriendsItem key={_id} data={info} />;
			})}
		</List>
	);
};