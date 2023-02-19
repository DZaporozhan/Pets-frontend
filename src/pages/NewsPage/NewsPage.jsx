import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import { Section } from '../../components/Section/Section';
import { NewsList } from 'components/News/NewsList/NewsList';
import { NewsSearch } from 'components/News/NewsSearch/NewsSearch';
import { Loader } from 'components/Loader/Loader';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

// Services
import { getAllNews } from 'services/api/news';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [isNewsLoading, setIsNewsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Show error message on empty query
    if (query.trim() === '') {
      return toast.error(
        'Trying to find some news? Enter the search query first!'
      );
    }

    // Filter all news based on query
    const lowerQuery = query.trim().toLowerCase();
    const result = news.filter(
      el =>
        el.description.toLowerCase().includes(lowerQuery) ||
        el.title.toLowerCase().includes(lowerQuery)
    );

    // Set results
    result.length === 0 ? setNotFound(true) : setNotFound(false);
    setFilteredNews(result);
    setQuery('');
  };

  useEffect(() => {
    getAllNews()
      .then(news => {
        setNews(news);
        setFilteredNews(news);
      })
      .then(() => setIsNewsLoading(false));
  }, []);

  return (
    <main>
      <Section title={'News'}>
        {/* <Searchbar ></Searchbar> */}
        <NewsSearch
          setQuery={setQuery}
          handleSubmit={handleSubmit}
          query={query}
        ></NewsSearch>
      </Section>
      {isNewsLoading && <Loader />}
      {!notFound ? <NewsList data={filteredNews} /> : <NotFoundPage />}
      <ToastContainer />
    </main>
  );
};

export default NewsPage;
