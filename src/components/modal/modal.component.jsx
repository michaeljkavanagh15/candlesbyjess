import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CheckoutModal = (message, title, action1, action1Message, action2, action2Message) => {
    // const {message, title, action1, action1Message, action2, action2Message} = props;
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={action1}>{action1Message}</Button>
          <Button variant="primary" onClick={action2} >{action2Message}</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default CheckoutModal;