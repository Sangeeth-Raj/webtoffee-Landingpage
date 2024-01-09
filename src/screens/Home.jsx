import Blocked from "../components/home/Blocked";
import Categories from "../components/home/Categories";
import Consent from "../components/home/Consent";
import CookieTab from "../components/home/CookieTab";
import Customization from "../components/home/Customization";
import EUVisitors from "../components/home/EUVisitors";
import Footer from "../components/home/Footer";
import GranularOption from "../components/home/GranularOption";
import HassleFree from "../components/home/HassleFree";
import MultiLingual from "../components/home/MultiLingual";
import OtherPlugins from "../components/home/OtherPlugins";
import Purchase from "../components/home/Purchase";
import Questions from "../components/home/Questions";
import Review from "../components/home/Review";
import Scan from "../components/home/Scan";
import SetUp from "../components/home/SetUp";
import Spotlight from "../components/home/Spotlight";
import TrustpilotReview from "../components/home/TrustpilotReview";
import WordpressFeatures from "../components/home/WordpressFeatures";

export default function Home() {
    return (
        <>
            <CookieTab />
            <Spotlight />
            <Purchase />
            <WordpressFeatures />
            <SetUp />
            <Scan />
            <Blocked />
            <Categories />
            <Customization />
            <EUVisitors />
            <HassleFree />
            <Consent />
            <GranularOption />
            <MultiLingual />
            <Review />
            <OtherPlugins />
            <TrustpilotReview />
            <Questions />
            <Footer />
        </>
    );
}
