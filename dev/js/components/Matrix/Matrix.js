import React from 'react';
import Square from './Square'

export default function Matrix(props){


    return(
        <table>
            <tbody>
                <tr>
                    {[1,2,3].map((item,idx)=><Square key = {idx} currentPlayerIdx = {props.currentPlayerIdx} onSquareClickHandler={props.onSquareClickHandler}/>)}
                </tr>
                <tr>
                    {[1,2,3].map((item,idx)=><Square key = {idx} currentPlayerIdx = {props.currentPlayerIdx} onSquareClickHandler={props.onSquareClickHandler}/>)}                   
                </tr>
                <tr>
                    {[1,2,3].map((item,idx)=><Square key = {idx} currentPlayerIdx = {props.currentPlayerIdx} onSquareClickHandler={props.onSquareClickHandler}/>)}
                </tr>
            </tbody>
        </table>
    );
}