import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    // accordionCollapsed: any
    onChange: () => void
    /**
     * Elements that are showed accordion is opened (not collapsed)
     */
    // items: ItemType[]
    items: string[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    // onClick: (value: any) => void
    /**
     * optional color of header text
     */
    // color: string
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle collapsed={props.collapsed}
                            onClick={props.onChange}
                            title={props.titleValue}
                            color={props.color}
            />
            { !props.collapsed && <AccordionBody items={items}/> }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    collapsed: boolean
    color?: string
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3
            style={{color: props.color ? props.color : 'black'}}
            onClick={(e) => props.onClick ()}>{props.title}
        </h3>
    )
}

export type AccordionBodyPropsType = {
    items: string[]
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map( i => <li>{i}</li>)}
            </ul>
        </div>
    )
}

export default Accordion