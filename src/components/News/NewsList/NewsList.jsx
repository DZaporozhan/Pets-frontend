import { NewsItem } from '../NewsItem/NewsItem'
import { Wrapper, List } from './NewsList.styled'


export const NewsList = ({data}) => {
    return (
        <Wrapper >
            <List>
                {data.map(({ _id, ...details }) => {
                    return <NewsItem key={_id} data={details} />
                })}
            </List>
        </Wrapper>
    )
}
