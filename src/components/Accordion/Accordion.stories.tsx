import React, {useState} from "react"
import Accordion, {AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {
            ...GetCategoryObj('Event')
        },
        onClick: {
            ...GetCategoryObj('Event')

        },
        items: {...GetCategoryObj("Main")},
        collapsed: {...GetCategoryObj("Main")},
        titleValue: {...GetCategoryObj("Main")}
    }
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

const Template: Story<AccordionPropsType> = (args: AccordionPropsType) => <Accordion {...args} />;
const callbackProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({});

MenuCollapsedMode.args = {
    ...callbackProps,
    titleValue: "Menu",
    collapsed: true,
    // onChange: callback,
    items: []
    // onClick: onClickCallback

}

export const UsersUncollapsedMode = Template.bind({});

UsersUncollapsedMode.args = {
    ...callbackProps,
    titleValue: "Users",
    collapsed: false,
    // onChange: callback,
    items: [
        {title: "Evgeniy", value: 1}, {title: "Valera", value: 2},
        {title: "Artem", value: 3}, {title: "Victor", value: 4}
    ]

    // onClick: onClickCallback
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}

ModeChanging.args = {
    titleValue: "Users",
    items: [
        {title: "Evgeniy", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Victor", value: 4}
    ],

    onClick: (value) => {
        console.log(`user with ID ${value} should be happy`)
    }

}














