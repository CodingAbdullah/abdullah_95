import HorizontalRule from '../HorizontalRule/HorizontalRule';
import Programming from '../Programming/Programming.jsx';
import Hockey from '../Hockey/Hockey.jsx';
import Chess from '../Chess/Chess.jsx';
import '../../css/leisure.css';

const LeisurePage = () => {

    return (
        <section className="leisure">
            <Programming />
            <HorizontalRule />
            <Hockey />
            <HorizontalRule />
            <Chess />
        </section>
    )
}

export default LeisurePage;