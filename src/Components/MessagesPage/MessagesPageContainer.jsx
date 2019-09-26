import MessagesPage from "./MessagesPage";
import {connect} from "react-redux";
import {addMessageActionCreator, changeNewMessageActionCreator} from "../../redux/messages-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        conversations: state.messagesPage.conversations
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeNewMessage: (text, index) => {
            dispatch(changeNewMessageActionCreator(text, index))
        },
        addMessage: (index) => {
            dispatch(addMessageActionCreator(index))
        }
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(MessagesPage);