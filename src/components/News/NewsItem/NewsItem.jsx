import format from "date-fns/format";
import { Article,Heading, Link, DateSpan, Text, Details } from "./NewsItem.styled";

export const NewsItem = ({ data: { title, description, url, date } }) => {
const formatedDate = format(new Date(date), "dd/MM/yyyy");
// console.log(formatedDate)
	return (
		<div>
			<Article >
				<Heading >{title}</Heading>
				<Text >{description}</Text>
				
				<Details >
					<DateSpan >{formatedDate}</DateSpan>
					<Link
						href={url}
						target="_blank"
						rel="noopener noreferrer"
					>
						Read more
					</Link>
				</Details>
			</Article>
		</div>
	);
};