import { MainHeader } from "./MainHeader";
import { HeroSection } from "./HeroSection";
import { WelcomeSection } from "./WelcomeSection";
import { BlogSection } from "./BlogSection";
import { NearbySection } from "./NearbySection";
import  DonationShopSection  from "./DonationShopSection";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";
import styles from "./css/Home.module.css";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Home = () => {
  return (
    <main className={styles.homeMain}>
      <MainHeader />
      <HeroSection />
      <WelcomeSection />
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      <BlogSection />
      <NearbySection />
      <DonationShopSection className={styles.homeNearby} />
      <Newsletter ellipse18="ellipse-18.svg" phpaperPlane="phpaperplane.svg" />
      <Footer />
    </main>
  );
};
