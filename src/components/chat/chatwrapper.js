import React from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageList from './messagelist.js'
import NewRoomForm from './newroomform.js'
import RoomList from './roomlist.js'
import SendMessageForm from './sendmessageform.js'
import './chatstyle.css'

import {instanceLocator, tokenUrl, chatKey} from '../../config.js'


class ChatWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      roomId: '',
      messages: [],
      joinableRooms:[],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getRooms = this.getRooms.bind(this);
    this.createRoom = this.createRoom.bind(this)
  }

    componentDidMount(){
      const chatManager = new ChatManager({
        instanceLocator: instanceLocator,
        userId: this.props.username,
        tokenProvider: new TokenProvider({
          url: tokenUrl
        })

        // key: chatKey
        })

      chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms()
        this.subscribeToRoom()


      })
      .catch(err => console.log('error on connecting', err))
    }


    getRooms() {
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
      this.setState({
        joinableRooms,
        joinedRooms: this.currentUser.rooms
      })
    })
    .catch(err => console.log('error on joinable rooms', err))
    }

    subscribeToRoom(roomId) {
    this.setState({ messages:[] })
    this.currentUser.subscribeToRoom({
      roomId:roomId,
      hooks: {
        onMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      }
    })
    .then(room => {
      this.setState({
        roomId: room.id
      })
      this.getRooms();
    })
    .catch(err => console.log('error subscribing to room', err))
    }

    sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId:this.state.roomId

    })
    }

    createRoom(name) {
        this.currentUser.createRoom({
              name
          })
          .then(room => this.subscribeToRoom(room.id))
          .catch(err => console.log('error with createRoom: ', err))
    }

  render(){
    return (
      <div className="chat-container">
          <RoomList
            roomId = {this.state.roomId}
            subscribeToRoom={this.subscribeToRoom}
            rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
          <MessageList
            roomId={this.state.roomId}
            messages={this.state.messages} />
          <NewRoomForm createRoom= {this.createRoom} />
          <SendMessageForm
          disabled={!this.state.roomId}
          sendMessage={this.sendMessage} />


      </div>

    );
  }
}

export default ChatWrapper;
