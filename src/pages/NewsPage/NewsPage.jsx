import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import { Section } from '../../components/Section/Section';
import { NewsList } from 'components/News/NewsList/NewsList';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { ErrorSearch } from 'components/ErrorSearch/ErrorSearch';
import { Container } from 'pages/NoticesPage/NoticesPage.styled';
// Services
import { getAllNews } from 'services/api/news';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [isNewsLoading, setIsNewsLoading] = useState(true);
  
  const [titleRequest, setTitleRequest] = useState('');
  const [filter, SetFilter] = useState(true);
  
  const onInputChange = e => {
    const titleRequest = e.currentTarget.value;
    setTitleRequest(titleRequest);
    SetFilter(true);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (titleRequest.trim() === '') {
      setTitleRequest('');
      return toast.error('Please enter a request');
    }
    if (titleRequest) {
      SetFilter(prevState => {
        return !prevState;
      });
    }
    const lowerQuery = titleRequest.trim().toLowerCase();
    const result = news.filter(
      el =>
        el.description.toLowerCase().includes(lowerQuery) ||
        el.title.toLowerCase().includes(lowerQuery)
    );
    
    setFilteredNews(result);

    if (!filter) { 
      setFilteredNews(news)
      setTitleRequest('');
      SetFilter(true);
    }
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
      <Searchbar
            filter={filter}
            onSubmit={onSubmit}
            onChange={onInputChange}
            titleRequest={titleRequest}
          ></Searchbar>
       
      </Section>
      {isNewsLoading && <Loader />}
     
       <NewsList data={filteredNews} /> 
   
      {!filteredNews.length && !filter && (
            <Container>
              <ErrorSearch />
            </Container>
          )}
      <ToastContainer />
    </main>
  );
};

export default NewsPage;
