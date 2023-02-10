import { OurFriendsPopover } from '../OurFriendPopover/OurFriendPopover';
import { Info, Time, Links } from './OurFriendsInfo.styled';
export const OurFriendsInfo = ({
	addressUrl,
	address,
	email,
	phone,
	sliceAddress,
	workDays,
}) => {
	return (
		<Info>
			<div>
				{workDays?.length ? (
					<OurFriendsPopover workDays={workDays} />
				) : (
					<Time>
						Time: <br />
						--------------
					</Time>
				)}
			</div>
			<div>
				<p>Address:</p>

				<Links target="_blank" rel="noreferrer noopener"  href={addressUrl}>
					{address ? sliceAddress(address) : '------------'}
				</Links>
			</div>
			<p>Email:</p>

			<Links  href="mailto:{email}">
				{email ? `${email}` : '------------'}
			</Links>

			<p>Phone: </p>

			<Links  href="tel:{phone}" >
				{phone ? `${phone}` : '------------'}
			</Links>
		</Info>
	);
};
