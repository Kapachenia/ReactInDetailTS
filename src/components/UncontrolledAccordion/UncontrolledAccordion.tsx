import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    let [collapsed, SetCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue} /> <button onClick={() => {SetCollapsed(!collapsed)}}>toggle</button>
            { !collapsed && <AccordionBody/> }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
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