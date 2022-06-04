import React from 'react'
import Message from './Message';

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Ahegao',
    message: 'Text me something :)',
    time: '22:03',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<img
                src={'https://production-it-incubator.s3.eu-central-1.amazonaws.com/personal-page-front-public%3Ascreen/Image/a5ba6c68-6d4f-45ab-9557-52367cf1b438_image.png'}/>
*/}
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
