import { OurFriendsList } from '../../components/OurFriends/OurFriendsList/OurFriendsList';
import { Container } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { FriendsSection } from './OurFriendsPage.styled';
import { Section } from 'components/Section/Section';
import { getAllServices } from '../../services/api/services';
import { Loader } from 'components/Loader/Loader';

const OurFriendsPage = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAllServices().then(setServices).then(setIsLoading(false));
  }, []);

  return (
    <FriendsSection>
      <Container>
        {/* <FriendsTitle >Our friends</FriendsTitle>  */}
        <Section title={'Our friends'} />
        {isLoading && <Loader />}
        <OurFriendsList data={services} />
      </Container>
    </FriendsSection>
  );
};

export default OurFriendsPage;
