import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';

function App(props: any) {

    // const [buttonOnOff, setButtonOnOff] = useState('false')
    //
    //
    // const onClickButtonOn = () => {
    //     console.log('click')
    // }

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [on, setOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is APP component"} />*/}
            {/*<PageTitle title={"My friends"} />*/}
            {/*Article 1*/}
            {/*<Rating value={3} />*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true} />*/}

            {/*<Accordion titleValue={"Users"}*/}
            {/*           onChange={ () => setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*/>*/}


            <UncontrolledOnOff OnChange={setOn}/> {on.toString()}


            {/*Article 2*/}
            {/*<Rating value={0} />*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}

            {/*<UncontrolledRating/>*/}

            {/*<OnOff on={on} setOn={ setOn } />*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"} />*/}
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    // console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
