import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(ExpenseItemData) {
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={ExpenseItemData.date} />
      </div>
      <div className="expense-item__description">{ExpenseItemData.title}</div>
      <div className="expense-item__price">${ExpenseItemData.amount}</div>
    </div>
  );
}

export default ExpenseItem;
