import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeJournal from '../HomeJournal/HomeJournal';
import HomeResearch from '../HomeResearch/HomeResearch';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeJournal></HomeJournal>
            <HomeAbout></HomeAbout>
            <HomeResearch></HomeResearch>
        </div>
    );
};

export default Home;