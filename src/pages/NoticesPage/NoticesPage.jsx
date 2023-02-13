import { NoticesList } from 'components/NoticesList/NoticesList';
import { useEffect, useState, CSSProperties } from 'react';
import {
  SectionList,
  Container,
  NavContainer,
  AddBtnPosition,
  NavLinkPosition,
  BtnPosition,
  Text,
  ErrorPosition,
  Img,
} from './NoticesPage.styled';
import Modal from '../../components/Modal';
import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { Section } from '../../components/Section/Section';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import {
  getNoticeByCategory,
  removeNotice,
  getFavoriteNotices,
  addNoticeToFavorite,
  removeNoticeFromFavorite,
} from 'services/api/notices';
import { useParams } from 'react-router-dom';
import { CategoryBtn } from 'components/CategoryBtn/CategoryBtn';
import { selectIsAuth } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PuffLoader from 'react-spinners/PuffLoader';
import { AddNoticeForm } from 'components/AddNoticeForm/AddNoticeForm';
import DancingBear from '../../../src/icons/dancingBear_min.gif';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
};

const NoticesPage = () => {
  const isLoggedIn = useSelector(selectIsAuth);
  const [notices, setNotices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [loadNotices, setLoadNotices] = useState(false);

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

  useEffect(() => {
    if (!isLoggedIn) return;
    (async () => {
      const allFavorite = await getFavoriteNotices();
      setFavorite(allFavorite.map(({ _id }) => _id));
    })();
  }, [isLoggedIn]);

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
      setFavorite(prev => prev.filter(el => el !== id));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  //filter function
  const [titleRequest, setTitleRequest] = useState('');
  const [filter, SetFilter] = useState(true);
  const [search, SetSearch] = useState('');

  const onInputChange = e => {
    const titleRequest = e.currentTarget.value;
    setTitleRequest(titleRequest);
    if (titleRequest === '') {
      SetSearch('');
    }
    SetFilter(true);
  };

  const onDeleteRequest = value => {
    if (!filter) {
      setTitleRequest('');
      SetFilter(true);
    }
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
    onDeleteRequest(titleRequest);
    SetSearch(titleRequest);
    if (!filter) {
      SetSearch('');
    }
  };

  useEffect(() => {
    const getNotices = async () => {
      try {
        setLoadNotices(true);
        setIsLoading(true);
        const noticesByCategory = await getNoticeByCategory({
          category: categoryName,
          filter: search,
        });
        setNotices(noticesByCategory.data.data.result);
        setLoadNotices(false);
        setIsLoading(false);
      } catch (error) {
        setNotices([]);
        console.log(error);
        setLoadNotices(false);
        setIsLoading(false);
      }
    };
    getNotices();
  }, [categoryName, search]);

  useEffect(() => {
    SetSearch('');
    setTitleRequest('');
    SetFilter(true);
  }, [categoryName]);

  return (
    <>
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
              to={'/notices/lost found'}
            ></CategoryBtn>
            <CategoryBtn
              title={'in good hands'}
              to={'/notices/in good hands'}
            ></CategoryBtn>
            <CategoryBtn title={'sell'} to={'/notices/sell'}></CategoryBtn>
            {isLoggedIn && <CategoryBtn title={'favorite ads'}></CategoryBtn>}
            {isLoggedIn && <CategoryBtn title={'my ads'}></CategoryBtn>}
          </NavLinkPosition>
          {!showModal && (
            <AddBtnPosition>
              <AddPetBtn onClick={toggleModal}></AddPetBtn>
            </AddBtnPosition>
          )}
        </BtnPosition>
      </NavContainer>
      {showModal && (
        <Modal onClose={toggleModal}>
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
          {!notices.length && !filter && (
            <Container>
              <ErrorPosition>
                <Text> Oops, Notices Not Found</Text>
                <Img src={DancingBear} alt="dancing bear" />
              </ErrorPosition>
            </Container>
          )}
        </Container>
      </SectionList>
      <ToastContainer />
    </>
  );
};

export default NoticesPage;
