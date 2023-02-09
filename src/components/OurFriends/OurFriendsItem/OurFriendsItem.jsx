import { OurFriendsInfo } from './OurFriendsInfo/OurFriendsInfo';
import friend from "./Friend.png";
import styles from './OurFriendsItem.module.css';

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
		<li className={styles.item}>
			<a target="_blank" rel="noreferrer noopener" className={styles.item__title} href={url}>
				{title}
			</a>
			<div className={styles.item__wrap}>
				<div className={styles.item__img_wrap}>
					{imageUrl ? (
						<img
							src={imageUrl}
							alt="Partner Logo"
							className={styles.item__img}
						/>
					) : (
						<img 
							className={styles.item__img}
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
					sliceAddress={sliceAddress}
					workDays={workDays}
				/>
			</div>
		</li>
	);
};