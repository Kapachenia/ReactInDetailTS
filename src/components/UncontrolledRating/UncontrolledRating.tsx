import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function UnControlledRating(props: RatingPropsType) {
    console.log('Rating')
    return (
        <div>
            <Star selected={props.value > 0}/> <button>0</button>
            <Star selected={props.value > 1}/> <button>1</button>
            <Star selected={props.value > 2}/> <button>2</button>
            <Star selected={props.value > 3}/> <button>3</button>
            <Star selected={props.value > 4}/> <button>4</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }
}

export default UnControlledRating