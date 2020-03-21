import MessagesPage from './MessagesPage'
import { connect } from 'react-redux'
import { addMessageActionCreator } from '../../redux/messages-reducer'
import { IState } from '../../redux/store'
import { IConversation } from '../../types'

interface IMapToStateProps {
  conversations: IConversation[]
}

const mapStateToProps = (state: IState): IMapToStateProps => {
  return {
    conversations: state.messagesPage.conversations
  }
}

interface IDispatchToProps {
  addMessage: (index: number, message: string) => void
}

const mapDispatchToProps = (dispatch: any): IDispatchToProps => {
  return {
    addMessage: (index, message) => {
      dispatch(addMessageActionCreator(index, message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage)
