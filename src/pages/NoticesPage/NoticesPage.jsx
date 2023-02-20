import { NoticesList } from 'components/NoticesList/NoticesList';
import { useEffect, useState } from 'react';
import {
  SectionList,
  Container,
  NavContainer,
  AddBtnPosition,
  NavLinkPosition,
  BtnPosition,
  IconAdd,
  TextAddBtn,
  MobileAddBtn,
  NoAdsInThisCategory,
} from './NoticesPage.styled';
import Modal from '../../components/Modal';
import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { Section } from '../../components/Section/Section';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { SuccessSearch } from 'components/SuccessSearch/SuccessSearch';
import {
  getNoticeByCategory,
  removeNotice,
  getFavoriteNotices,
  addNoticeToFavorite,
  removeNoticeFromFavorite,
} from 'services/api/notices';
import { useParams, useSearchParams } from 'react-router-dom';
import { CategoryBtn } from 'components/CategoryBtn/CategoryBtn';
import { selectIsAuth } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PuffLoader from 'react-spinners/PuffLoader';
import { AddNoticeForm } from 'components/AddNoticeForm/AddNoticeForm';
import { PaginationComponent } from 'components/Pagination/Pagination';
import { ErrorSearch } from 'components/ErrorSearch/ErrorSearch';
import useMediaQuery from '@mui/material/useMediaQuery';

const override = {
  display: 'block',
  margin: '0 auto',
};

const NoticesPage = () => {
  const className = 'notice';
  //react-router-dom hooks
  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  //state
  const isLoggedIn = useSelector(selectIsAuth);
  const [notices, setNotices] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadNotices, setLoadNotices] = useState(false);
  const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1);
  const [totalPage, setTotalPage] = useState(0);

  const mobile = useMediaQuery('(max-width:666px)');
  //search
  const [titleRequest, setTitleRequest] = useState('');
  const [filter, SetFilter] = useState(true);
  const [search, SetSearch] = useState(searchParams.get('search') || '');

  useEffect(() => {
    let categiryForRequest = 'sell';

    switch (categoryName) {
      case 'lost-found':
        categiryForRequest = 'lost found';
        break;

      case 'for-free':
        categiryForRequest = 'in good hands';
        break;
      default:
        categiryForRequest = categoryName;
        break;
    }

    const getNotices = async () => {
      try {
        setLoadNotices(true);
        setIsLoading(true);

        const noticesByCategory = await getNoticeByCategory({
          category: categiryForRequest,
          filter: search,
          page,
        });

        if (['favorite', 'owner'].includes(categoryName)) {
          setTotalPage(Math.ceil(noticesByCategory.data.total / 8));
          setNotices(noticesByCategory.data.data);
        } else {
          setTotalPage(Math.ceil(noticesByCategory.data.data.total / 8));
          setNotices(noticesByCategory.data.data.result);
        }

        setLoadNotices(false);
        setIsLoading(false);
      } catch (error) {
        setTotalPage(0);
        setPage(1);
        setNotices([]);
        console.log(error);
        setLoadNotices(false);
        setIsLoading(false);
      }
    };
    getNotices();
  }, [categoryName, search, page, showModal, reFetch]);

  useEffect(() => {
    if (!isLoggedIn) return;
    (async () => {
      const allFavorite = await getFavoriteNotices();

      setFavorite(allFavorite.data.map(el => el._id));
    })();
  }, [isLoggedIn]);

  const toggleModal = () => {
    if (!isLoggedIn) {
      return toast.error('Please, log in to add notice', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    setShowModal(prevState => {
      return !prevState;
    });
  };

  const onDeleteNotice = async id => {
    try {
      const { id: elId } = await removeNotice(id);
      if (elId) {
        const newNotices = notices.filter(({ _id }) => elId !== _id);
        setNotices(newNotices);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavoriteAndRemove = async id => {
    try {
      if (!favorite.includes(id)) {
        setIsLoading(true);
        await addNoticeToFavorite(id);
        setFavorite(prev => [...prev, id]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      await removeNoticeFromFavorite(id);
      if (categoryName === 'favorite') {
        if (notices.length === 1 && favorite.length !== 1) {
          setReFetch(prev => !prev);
          setPage(page === Math.ceil(favorite.length / 8) ? page - 1 : page);
        }

        setNotices(prev => prev.filter(({ _id }) => _id !== id));
      }
      setFavorite(prev => prev.filter(el => el !== id));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  //filter function

  const onInputChange = e => {
    const titleRequest = e.currentTarget.value;
    setTitleRequest(titleRequest);
    setSearchParams({ search: titleRequest });
    if (titleRequest === '') {
      SetSearch('');
      setSearchParams({});
    }
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
    setPage(1);

    setSearchParams({ search: titleRequest });
    SetSearch(titleRequest);

    if (!filter) {
      setSearchParams({});
      setTitleRequest('');
      SetFilter(true);
      SetSearch('');
    }
  };

  useEffect(() => {
    SetSearch('');
    setTitleRequest('');
    SetFilter(true);
  }, [categoryName]);
  return (
    <main>
      <NavContainer>
        <Section title={`Find your favorite pet`}>
          <Searchbar
            filter={filter}
            onSubmit={onSubmit}
            onChange={onInputChange}
            titleRequest={titleRequest}
          ></Searchbar>
        </Section>
        <BtnPosition>
          <NavLinkPosition>
            <CategoryBtn
              title={'lost/found'}
              to={'/notices/lost-found'}
              onClick={() => setPage(1)}
            ></CategoryBtn>
            <CategoryBtn
              title={'in good hands'}
              to={'/notices/for-free'}
              onClick={() => setPage(1)}
            ></CategoryBtn>
            <CategoryBtn
              title={'sell'}
              to={'/notices/sell'}
              onClick={() => setPage(1)}
            ></CategoryBtn>
            {isLoggedIn && (
              <CategoryBtn
                title={'favorite ads'}
                to={'/notices/favorite'}
                onClick={() => setPage(1)}
              ></CategoryBtn>
            )}
            {isLoggedIn && (
              <CategoryBtn
                title={'my ads'}
                to={'/notices/owner'}
                onClick={() => setPage(1)}
              ></CategoryBtn>
            )}
          </NavLinkPosition>
          {!showModal && (
            <AddBtnPosition>
              {mobile && (
                <MobileAddBtn type="button" onClick={toggleModal}>
                  <IconAdd />
                  <TextAddBtn>Add pet</TextAddBtn>
                </MobileAddBtn>
              )}
              {!mobile && <AddPetBtn onClick={toggleModal}></AddPetBtn>}
            </AddBtnPosition>
          )}
        </BtnPosition>
      </NavContainer>
      {showModal && (
        <Modal onClose={toggleModal} className={className}>
          <AddNoticeForm onClose={toggleModal} />
        </Modal>
      )}
      <SectionList>
        <Container>
          <PuffLoader
            color="#FF6101"
            size={150}
            loading={isLoading && loadNotices}
            aria-label="Loading Spinner"
            cssOverride={override}
          />
          {notices.length !== 0 && !loadNotices && (
            <NoticesList
              notices={notices}
              favorite={favorite}
              onDeleteNotice={onDeleteNotice}
              addToFavoriteAndRemove={addToFavoriteAndRemove}
              isLoading={isLoading}
            />
          )}
          {notices.length === 0 && filter && !isLoading && search === '' && (
            <NoAdsInThisCategory>
              There are no ads in this category
            </NoAdsInThisCategory>
          )}
          {notices.length !== 0 && search && <SuccessSearch />}
          {!notices.length && !filter && (
            <Container>
              <ErrorSearch />
            </Container>
          )}
          {totalPage >= 2 && (
            <PaginationComponent
              paginateData={{ totalPage, setPage, page, titleRequest }}
            />
          )}
        </Container>
      </SectionList>
      <ToastContainer />
    </main>
  );
};

export default NoticesPage;
