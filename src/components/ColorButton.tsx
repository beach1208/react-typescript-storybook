import React from 'react';

export interface IProps {
    color: string
    background: string
}

export default (props: IProps) => {
    const { color, background } = props;

    return <button style={{color, backgroundColor: background}}>
       Color Button
    </button>
}