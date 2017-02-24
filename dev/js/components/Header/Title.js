import React from 'react';
export default function Title(props){
    return (
        <h1>{props.title}</h1>
    );
}
Title.propTypes = {
    title:React.PropTypes.string.isRequired,
};