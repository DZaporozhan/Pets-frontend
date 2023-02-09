import { OurFriendsPopover } from '../OurFriendPopover/OurFriendPopover';

import styles from './OurFriendsInfo.module.css';

export const OurFriendsInfo = ({
	addressUrl,
	address,
	email,
	phone,
	sliceAddress,
	workDays,
}) => {
	return (
		<div className={styles.info}>
			<div>
				{workDays?.length ? (
					<OurFriendsPopover workDays={workDays} />
				) : (
					<p className={styles.time}>
						Time: <br />
						--------------
					</p>
				)}
			</div>
			<div>
				<p>Address:</p>

				<a target="_blank" rel="noreferrer noopener" className={styles.links} href={addressUrl}>
					{address ? sliceAddress(address) : '------------'}
				</a>
			</div>
			<p>Email:</p>

			<a className={styles.links} href={email}>
				{email ? `${email}` : '------------'}
			</a>

			<p>Phone: </p>

			<a className={styles.links} href={phone}>
				{phone ? `${phone}` : '------------'}
			</a>
		</div>
	);
};
