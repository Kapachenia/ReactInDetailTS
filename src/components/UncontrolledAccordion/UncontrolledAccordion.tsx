import React, {MouseEventHandler, useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    // console.log('Accordion rendering')

    let [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <AccordionTitle onClick={ () => { setCollapsed(!collapsed) } } title={props.titleValue} />
            {/*<button onClick={() => {setCollapsed(!collapsed)}}>toggle</button>*/}
            { !collapsed && <AccordionBody/> }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    )
}

export function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default UncontrolledAccordion