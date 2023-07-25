import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, largeImageURL }) => {
  useEffect(() => {
    console.log('componentDidMount');
    window.addEventListener('keydown', closeModalEsc);
    return () => {
      console.log('componentWillUnmount');
      window.removeEventListener('keydown', closeModalEsc);
    };
  }, []);

  const closeModalEsc = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={onBackdropClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

// class Modal extends Component {
//   componentDidMount() {
//     console.log('componentDidMount');

//     window.addEventListener('keydown', this.closeModalEsc);
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount');

//     window.removeEventListener('keydown', this.closeModalEsc);
//   }

//   closeModalEsc = event => {
//     if (event.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   onBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     const { largeImageURL } = this.props;
//     return createPortal(
//       <div className={css.overlay} onClick={this.onBackdropClick}>
//         <div className={css.modal}>
//           <img src={largeImageURL} alt="" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
