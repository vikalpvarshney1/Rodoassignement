import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import WordCard from './WordCard'
import AddWordModal from './AddWordModal'
import { handleInitialData } from '../Redux/action'
import { connect } from 'react-redux'
import Divider from '@material-ui/core/Divider'
import AddIcon from '@material-ui/icons/Add'


class Words extends Component {
    state = {
        openDetailModal: false,
        openAddWordModal: false,
        modalData: {}
    }

    handleClick(wordName) {
        const modalData = this.props.words.filter(word => word.word === wordName)[0]
        console.log(modalData)
        this.setState({ modalData })
        this.toggleModal()
    }


    toggleModal() {
        this.setState(prevState => ({
            openDetailModal: !prevState.openDetailModal
        }))
    }
    toggleAddNewWordModal() {
        this.setState(prevState => ({
            openAddWordModal: !prevState.openAddWordModal
        }))
    }


    render() {
        const { words } = this.props
        const { openAddWordModal } = this.state

        return (
            <div className="container">
                <h4 className="heading">{this.props.text}</h4>
                <Divider />
                <div className="word-container">
                    {words.map((word, index) => (
                        <WordCard key={index} handleClick={() => this.handleClick(word.word)} word={word} />
                    ))}
                </div>
                <AddWordModal
                    handleClose={this.toggleAddNewWordModal.bind(this)}
                    open={openAddWordModal} />
                <div className="addBtn">
                    <IconButton
                        onClick={() => this.toggleAddNewWordModal()}
                        edge="end"
                        color="inherit"
                        aria-label="close">
                        <AddIcon />
                    </IconButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (words) => {
    return {
        words
    }
}

export default connect(mapStateToProps, { handleInitialData })(Words)