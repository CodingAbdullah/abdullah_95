import HomeInformation from '../HomeInformation/HomeInformation.jsx';
import HomeBillBoard from '../HomeBillBoard/HomeBillBoard.jsx';

import '../../css/home.css';

const HomePage = () => {
    return (
        <span>
            <HomeBillBoard />
            <HomeInformation />
        </span>
    )
}

export default HomePage;