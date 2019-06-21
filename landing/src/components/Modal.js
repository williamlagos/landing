import React from 'react'
import './Modal.css'

class Modal extends React.Component {
    render() {
        return (
            <div id="modal-container" onClick={this.props.onDismiss}>
              <div id="modal-row">
                <div id="modal">
                  <h2>Cadastre o seu e-mail agora!</h2>
                  <input style={{ 'width': '100%', 'min-height': '2.5em' }}></input>
                  <button className="btn">Cadastrar</button>
                </div>
              </div>
            </div>
        )
    }
}

export default Modal
