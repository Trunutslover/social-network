import MessagesPage from "./MessagesPage";
import {connect} from "react-redux";
import {addMessageActionCreator, changeNewMessageActionCreator} from "../../redux/messages-reducer";

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

const MessagesPageContainer = connect(mapStateToProps, mapDispatchToProps) (MessagesPage);

export default MessagesPageContainer;