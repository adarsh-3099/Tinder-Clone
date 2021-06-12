import React from 'react'
import Chat from './Chat'

function ChatsComponent() {
    return (
        <div>

            <Chat
                name="Mithila Palkar"
                message="Hello Adarsh"
                timeStamp="20 mintues ago"
                profilePic="https://images.hindustantimes.com/img/2021/02/02/550x309/d6d099de-646b-11eb-80ba-7965a113c3dd_1612248391691.jpg"
                / >

            <Chat
                name="Jennfier Lawrence"
                message="How you doin? (**in Joey's voice**)"
                timeStamp="20 mintues ago"
                profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F577fdc3fa7ea436bd18c3e78%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D2%26cropX2%3D744%26cropY1%3D23%26cropY2%3D766"
                / >

            <Chat
                name="Rihhana"
                message="Hello Adarsh"
                timeStamp="20 mintues ago"
                profilePic="https://static.billboard.com/files/2021/02/Rihannas-Savage-X-Fenty-Show-Vol.-2-presented-by-Amazon-Prime-Video-Step-and-Repeat-oct-2020-billboard-1548-1613498225-compressed.jpg"
                / >

            <Chat
                name="Kristen Stewart"
                message="Hello Adarsh"
                timeStamp="20 mintues ago"
                profilePic="https://img.etimg.com/photo/msid-70988018,quality-100/.jpg"
                / >

        </div>
    )
}

export default ChatsComponent
