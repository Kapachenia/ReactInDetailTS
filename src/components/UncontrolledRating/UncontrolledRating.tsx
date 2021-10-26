import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
    // value: 0 | 1 | 2 | 3 | 4 | 5
}


export function UncontrolledRating(props: RatingPropsType) {

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star setValue={ () => { setValue(1); props.onChange(1) } } selected={value > 0} />
            <Star setValue={ () => { setValue(2); props.onChange(2) } } selected={value > 1} />
            <Star setValue={ () => { setValue(3); props.onChange(3) } } selected={value > 2} />
            <Star setValue={ () => { setValue(4); props.onChange(4) } } selected={value > 3} />
            <Star setValue={ () => { setValue(5); props.onChange(5) } } selected={value > 4} />
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    // value: 1 | 2 | 3 | 4 | 5
    setValue: () => void
}

function Star(props: StarPropsType) {

    return (
        <span onClick={ () => { props.setValue() } }>
            {props.selected ? <b> star</b> : " star"}
        </span>
    )
}

export default UncontrolledRating