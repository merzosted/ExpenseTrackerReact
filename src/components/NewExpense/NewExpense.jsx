import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {
    const saveExpenseFormHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
}
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseForm = {saveExpenseFormHandler}/>
        </div>
    )
}

export default NewExpense