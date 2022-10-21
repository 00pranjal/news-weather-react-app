import React from 'react'
import './Newsbox.css'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
export default function Newsbox(props) {
    return (
        <>
        <div id='box'>
            <img id="image" src={props.img? props.img: props.altImg} alt={"..."}/>
            <div id="text">
                <div id="headline">
                    <h3>{(props.headline).substring(0, (props.headline).indexOf(' - '))}</h3>
                    <div id="greyText">{props.source}{" · "}{dayjs(props.time).fromNow()}</div>
                </div>
                <div><a id="newsLink" target='_blank' rel="noopener noreferrer" href={props.url}>View News</a></div>
            </div>
        </div>
        </>
    )
}
