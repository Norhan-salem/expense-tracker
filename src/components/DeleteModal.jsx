import React from "react";

/**
 * DeleteModal Component
 * 
 * A modal dialog for confirming the deletion of an expense.
 * 
 * Props:
 * @param {boolean} showModal - Controls the visibility of the modal.
 * @param {function} setShowModal - Function to toggle modal visibility.
 * @param {function} confirmDelete - Function to execute deletion.
 * @param {object} selectedExpense - The expense item to be deleted.
 */
const DeleteModal = ({ showModal, setShowModal, confirmDelete, selectedExpense }) => {
  if (!showModal) return null;

  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Deletion</h5>
            <button className="btn-close" onClick={() => setShowModal(false)}></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete <strong>{selectedExpense?.name}</strong>?
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
            <button className="btn btn-danger" onClick={confirmDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;