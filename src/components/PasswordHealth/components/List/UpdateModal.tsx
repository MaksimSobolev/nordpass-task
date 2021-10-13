import { FC, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { IItem } from '../../../../services/getUserItems';
import updateItem from '../../../../services/updateItem';

interface IUpdateModal {
  item: IItem;
}
const UpdateModal: FC<IUpdateModal> = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [newPass, setNewPass] = useState('');

  // fix react-modal error on open
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  return (
    <>
      <button type="button" className="update" onClick={() => setShowModal(true)}>
        Update Password
      </button>
      <Modal
        className="modal"
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
      >
        <h1>Update Password</h1>
        <input
          placeholder="new password"
          className="input"
          value={newPass}
          onChange={(event) => setNewPass(event.target.value)}
        />
        <div className="pt-12px text-center">
          <button
            type="button"
            className="button"
            onClick={async () => {
              await updateItem({
                ...item,
                password: newPass,
              });

              setShowModal(false);
            }}
          >
            Change
          </button>
          <button
            type="button"
            className="button ml-12px"
            onClick={() => {
              setNewPass('');
              setShowModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default UpdateModal;
