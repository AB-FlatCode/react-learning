import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { modalIsOpen, closeModal, correct, questions } = useGlobalContext()
  return (
    <div className={`${modalIsOpen ? 'modal-container isOpen' : 'modal-container'}`}>
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>You answered {((correct / questions.length) * 100).toFixed(0)}% of qustions correctly</p>
        <button className="close-btn" onClick={closeModal}>
          Play again
        </button>
      </div>
    </div>
  )
}

export default Modal
