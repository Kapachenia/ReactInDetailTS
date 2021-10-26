import React, {useState} from "react"
import UncontrolledOnOff from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback = action("on or off clicked")

export const OnMode = () => <UncontrolledOnOff defaultOn={true} OnChange={callback} />;
export const OffMode = () => <UncontrolledOnOff defaultOn={false} OnChange={callback} />;
export const BugMode = () => <div>Unsync when changed defaultValue when already rendered</div>

