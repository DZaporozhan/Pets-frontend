export const OurFriendsInfo = ({
	addressUrl,
	address,
	email,
	phone,
	sliceAdress,
	workDays,
}) => {
	return (
		<div >
			
			<div>
				<p>Address:</p>

				<a  href={addressUrl}>
					{address ? address : '_*************_'}
				</a>
			</div>
			<p>Email:</p>

			<a  href={email}>
				{email ? `${email}` : '_*************_'}
			</a>

			<p>Phone: </p>

			<a  href={phone}>
				{phone ? `${phone}` : '_*************_'}
			</a>
		</div>
	);
};