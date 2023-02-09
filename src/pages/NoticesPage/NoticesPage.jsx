import { NoticesList } from 'components/NoticesList/NoticesList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Section, Contaainer } from './NoticesPage.styled';

axios.defaults.baseURL = 'https://pets-api-team1.onrender.com/api/';

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const category = 'sell';

  useEffect(() => {
    const getNotices = async category => {
      try {
        const noticeByCategory = await axios.get(
          `notices/?category=${category}`
        );

        setNotices(noticeByCategory);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getNotices(category);
  }, []);

  return (
    <Section>
      <Contaainer>
        {notices.length !== 0 && <NoticesList notices={notices} />}
      </Contaainer>
    </Section>
  );
};

export default NoticesPage;
