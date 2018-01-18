import React from 'react'
import messagesList from './messagesList.css'

const MessagesList = props => (
  <ul className="message-list">
    {props.messages.map(msg =>
      <li className="message" key={msg.index}>
        <p>{msg.text}</p><p className="visibility">{msg.visibility ? 'private' : 'public'}</p>
      </li>)}
  </ul>
)

export default MessagesList
