import { nanoid } from 'nanoid';
import { Li, Day, Ul, Time } from './ContentOfPopover.styled';

export const ContentOfPopover = ({ workDays }) => {
	const Item = workDays.map(({ isOpen, from, to, weekday }) => (
		<Li key={nanoid()} >
			<Day > {weekday}</Day>

			{isOpen ? (
				<Time >
					{from} - {to}
				</Time>
			) : (
				<Time >------------</Time>
			)}
		</Li>
	));

	return <Ul >{Item}</Ul>;
};