import React, { Component } from 'react';
import data from './../data/data'
import MessagesList from './../components/MessagesList'
import AddMessageForm from './../components/AddMessageForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: data.messages,
      text: '',
      visibility: null
    }
    this.addMessage = this.addMessage.bind(this)
  }

  addMessage = e => {
    const messages = data.messages
    messages.push({
      index: messages.length+1,
      text: this.state.text,
      visibility: this.state.visibility
    })
    this.setState({messages})
    e.preventDefault()
  }

  render() {
    const { text, visibility, messages } = this.state
    return (
      <div className="app">
        <h1>Leboncoin test</h1>
        <MessagesList messages={messages} />
        <AddMessageForm
          onSubmit={this.addMessage}
          handleText={(e) => this.setState({ text: e.target.value })}
          handleVisibility={(e) => this.setState({visibility: !this.state.visibility})}
          text={text}
          visibility={visibility} />
      </div>
    );
  }
}

export default App;
