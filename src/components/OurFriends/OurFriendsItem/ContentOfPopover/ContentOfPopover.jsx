import { nanoid } from 'nanoid';
import { Li, Day, Ul, Time } from './ContentOfPopover.styled';
const weekDays = ["Mo","Tu","We","Th","Fr","Sa","Su"]
export const ContentOfPopover = ({ workDays }) => {
	workDays.map( (el, i) => {return el.weekday = weekDays[i] })
	const Item = workDays.map(({ isOpen, from, to, weekday }) => (
		<Li key={nanoid()} >
			<Day > {weekday}</Day>

			{isOpen ? (
				<Time >
					{from} - {to}
				</Time>
			) : (
				<Time >------------------</Time>
			)}
		</Li>
	));

	return <Ul >{Item}</Ul>;
};