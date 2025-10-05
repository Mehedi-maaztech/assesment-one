import Top from '../component/Top';
import Navbar from '../component/Navbar';
import Slider from '../component/Slider';
import Caro from '../component/Caro';
import Services from '../component/Services';
import LatestWork from '../component/LatestWork';
import WhyChooseMetro from '../component/WhyChooseMetro';
import HowToWorks from '../component/HowToWorks';
import ClientList from '../component/ClientList';
import WhatpeopleSay from '../component/WhatpeopleSay';
import Podcast from '../component/Podcast';
import Contact from '../component/Contact';
import QuestionAnswer from '../component/QuestionAnswer';
import Footer from '../component/Footer';
const HomeLayouts = () => {
    return (
        <div className='min-h-screen hero-bg'>
            <header className='max-w-7xl mx-auto'>
                <Top></Top>
                <Navbar></Navbar>
            </header>
            <section className="slider">
                <Slider></Slider>
            </section>
            <section>
                <Caro></Caro>
            </section>
            <section>
                <Services></Services>
            </section>
            <section>
                <LatestWork></LatestWork>
            </section>
            <section>
                <WhyChooseMetro></WhyChooseMetro>
            </section>
            <section>
                <HowToWorks></HowToWorks>
            </section>
            <section>
                <ClientList></ClientList>
            </section>
            <section>
                <WhatpeopleSay></WhatpeopleSay>
            </section>
            <section>
                <Podcast></Podcast>
            </section>
            <section>
                <Contact></Contact>
            </section>
            <section>
                <QuestionAnswer></QuestionAnswer>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayouts;