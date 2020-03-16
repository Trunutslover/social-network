import MessagesPage from './MessagesPage'
import { connect } from 'react-redux'
import { addMessageActionCreator } from '../../redux/messages-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = state => {
  return {
    conversations: state.messagesPage.conversations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMessage: (index, message) => {
      dispatch(addMessageActionCreator(index, message))
    }
  }
}

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(MessagesPage)
