import Top from '../component/Top';
import Navbar from '../component/Navbar';
import AboutHeroSect from '../component/AboutHeroSect';
import ClientList from '../component/ClientList';
import AboutMissionStory from '../component/AboutMissionStory';
import AboutAgents from '../component/AboutAgents';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

const AboutPage = () => {
    return (
        <div className='min-h-screen hero-bg'>
            <header className='max-w-7xl mx-auto'>
                <Top></Top>
                <Navbar></Navbar>
            </header>
            <section className="slider">
                <AboutHeroSect></AboutHeroSect>
            </section>
            <section>
                <ClientList></ClientList>
            </section>
            <section>
                <AboutMissionStory></AboutMissionStory>
            </section>
            <section>
                <AboutAgents></AboutAgents>
            </section>
            <section>
                <Contact></Contact>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AboutPage;