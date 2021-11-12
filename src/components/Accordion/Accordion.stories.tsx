import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>
export const UserUncollapsedMode = () => <Accordion titleValue={"User"}
                                                    collapsed={false}
                                                    onChange={callback}
                                                    onClick={onClickCallback}
                                                    items={[
                                                        {title: "Evgeni", value: 1},
                                                        {title: "Dimich", value: 2},
                                                        {title: "Valera", value: 3}
                                                    ]}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"User"}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      onClick={(value) => { console.log(`user with ID ${value} should be happy`)} }
                      items={[
                          {title: "Evgeni", value: 1},
                          {title: "Dimich", value: 2},
                          {title: "Valera", value: 3}
                      ]}
    />
}