import { Button, Modal } from "react-bootstrap";
import { useBudgets } from "../contexts/BudgetsContext";

export default function ViewExpensesModal({ show, handleClose }) {
  const { budgets, deleteBudget, deleteExpense, getBudgetExpenses } =
    useBudgets();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Budget</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="max">
          <Form.Label>Maximum Spending Limit</Form.Label>
          <Form.Control
            ref={maxRef}
            type="number"
            required
            min={0}
            step={0.01}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
