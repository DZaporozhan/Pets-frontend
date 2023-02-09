import { Section } from "../../components/Section/Section";
import { Searchbar } from '../../components/Searchbar/Searchbar';

const NewsPage = () => {
  return(
    <Section title={'News'}>
        <Searchbar></Searchbar>
      </Section>
  );
};

export default NewsPage;
