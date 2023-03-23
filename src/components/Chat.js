import React, { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db, auth } from "../firebase"

export const Chat = (props) => {
    const {room} = props
    const [newMessage, setNewMessage] = useState("")
    //const messagesRef = collection(db, "message")

    const handleSubmit = async (e) => {
        console.log('msg :', newMessage)
        e.preventDefault()
        if(newMessage === "") return
        await addDoc(collection(db, "messages"), {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        })
        setNewMessage("")
    }
    return (
        <div className="chat-app">
            <form onSubmit={handleSubmit} className="new-message-form">
                <input  
                    className="new-message-input" 
                    placeholder="put your msg here"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button className="send-button" type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}