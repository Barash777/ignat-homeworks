import React from 'react'
import css from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <>
            <div className={css.message}>
                <img src={props.avatar}/>
                <div className={css.messageData}>
                    <div className={css.name}>
                        <span>{props.name}</span>
                    </div>
                    <p><span className={css.text}>{props.message}</span>
                        <span className={css.time}>{props.time}</span></p>
                    {/*<span className={css.timeRight}>{props.time}</span>*/}
                </div>
                <div className={css.corner}>
                    <div className={css.circle}></div>
                </div>
            </div>
        </>


    )
}

/*
<div className={css.message}>
    <img src={props.avatar}/>
    {/!*<p>{props.name}</p>*!/}
    <p>{props.message} <span className={css.timeRight}>{props.time}</span></p>
    {/!*<span className={css.timeRight}>{props.time}</span>*!/}
</div>
*/

/*<li className="ks-item ks-self"><span className="ks-avatar ks-offline"> <img
    src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle" width="36" height="36"> </span>
    <div className="ks-body">
        <div className="ks-header"><span className="ks-name">Brian Diaz</span> <span
            className="ks-datetime">6:46 PM</span></div>
        <div className="ks-message">The weird future of movie theater food</div>
    </div>
</li>*/


/*<div className="container">
            <img src="/w3images/bandmember.jpg" alt="Avatar">
                <p>Hello. How are you today?</p>
                <span className="time-right">11:00</span>
        </div>*/


export default Message
