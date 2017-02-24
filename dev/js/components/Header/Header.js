import React from 'react';
import Title from './Title';

export default function Header(props){
    return (
        <Title title = {props.title}/>
    );
}