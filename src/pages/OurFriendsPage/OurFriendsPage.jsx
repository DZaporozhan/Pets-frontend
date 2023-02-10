import {OurFriendsList } from "../../components/OurFriends/OurFriendsList/OurFriendsList";
import { Container } from '@mui/material';
// import style from './OurFriendsPage.module.css';
import { useState } from "react";
import { useEffect } from "react";
// import axios from "axios";
import { FriendsSection } from "./OurFriendsPage.styled";
import { Section } from "components/Section/Section";
import {getAllServices} from "../../services/api/services"


const OurFriendsPage = () => {
const [services, setServices] = useState([])
const [isLoading, setIsLoading] = useState(true)
useEffect(() => {
  
    console.log("getting services...");
getAllServices().then(setServices).then(setIsLoading(false));
  }, []);

return(
  <FriendsSection >
			<Container>
				{/* <FriendsTitle >Our friends</FriendsTitle>  */}
        <Section title={"Our friends"} />
        {isLoading && (
					<div >
						Wait a minute, Team1 is trying to fetch...
           
					</div>
				)}
				<OurFriendsList data={services} />
			</Container>
	</FriendsSection>)
};

export default OurFriendsPage;
