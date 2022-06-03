import { addNewWord, getAllWords } from '../components/graph'

export const RECEIVE_WORDS = 'RECEIVE_WORDS'
export const ADD_NEW_WORD = 'ADD_NEW_WORD'

export const receiveWords = (words) => {
    return {
        type: RECEIVE_WORDS,
        words
    }
}

export const addWord = (word) => {
    return {
        type: ADD_NEW_WORD,
        word

    }
}

export const handleAddWord = (word) => {
    return dispatch => {
        return addNewWord(word)
            .then(word => dispatch(addWord(word)))
    }
}

export const handleInitialData = () => {
    return dispatch => {
        return getAllWords()
            .then(words => dispatch(receiveWords(words)))
    }
}