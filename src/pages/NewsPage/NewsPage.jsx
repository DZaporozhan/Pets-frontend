import { Section } from "../../components/Section/Section";
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { useEffect, useState } from "react";
import { getAllNews } from "services/api/news";
import { NewsList } from "components/News/NewsList/NewsList";


const NewsPage = () => {
  const [news, setNews] = useState([])
  const [isNewsLoading, setIsNewsLoading] = useState(true)

  useEffect(() => {
 
    console.log("getting news...");
getAllNews().then(setNews).then(setIsNewsLoading(false));
  }, []);

  return(
    <>
    <Section title={'News'}>
        <Searchbar></Searchbar>
    </Section>
    {isNewsLoading && (
      <div >
        Wait a minute, Team1 is trying to fetch...
      </div>
    )}
    <NewsList data={news} />
    </>
  );
};

export default NewsPage;


// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
// 	getNews,
// 	getQueryParams,
// 	getTotalPages,
// 	getNewsLoading,
// } from '../../redux/news/news-selectors';
// import { getAllNews } from '../../redux/news/news-operations';

// import { NewsList } from 'components/News/NewList/NewsList';
// import { Container } from 'components/Reuse/Container/Container';
// import { Title } from 'components/Reuse/Title/Title';
// import { Search } from 'components/News/Search/Search';
// import { PaginationList } from 'components/Reuse/Pagination/PaginationList/PaginationList';
// import { NewsEmpty } from 'components/News/NewsEmpty/NewsEmpty';
// import { BigSpinner } from 'components/Reuse/Loaders/Spinner/BigSpinner';

// import styles from './NewsPage.module.scss';

// const NewsPage = () => {
// 	const dispatch = useDispatch();
// 	const news = useSelector(getNews);
// 	const totalPages = useSelector(getTotalPages);
// 	const queryParams = useSelector(getQueryParams);
// 	const isLoading = useSelector(getNewsLoading);

// 	const noResults = !news.length && !isLoading;

// 	useEffect(() => {
// 		dispatch(getAllNews(queryParams));
// 	}, [dispatch, queryParams]);

// 	return (
// 		<section className={styles.section}>
// 			<Container>
// 				<Title text="News" />
// 				<Search />
// 				{isLoading ? (
// 					<div className={styles.spinner}>
// 						<BigSpinner />
// 					</div>
// 				) : (
// 					<NewsList data={news} />
// 				)}
// 				{noResults && <NewsEmpty />}

// 				{totalPages > 1 && <PaginationList pages={totalPages} />}
// 			</Container>
// 		</section>
// 	);
// };

// export default NewsPage;