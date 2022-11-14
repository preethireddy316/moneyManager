/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */

// Write your code here
const TransactionItem = (props)=>{
    const {transactionDetails,onDeleteItem}=props
    const {title,amount,type1,id}=transactionDetails
    const deleteItem = ()=>{
        onDeleteItem(id)
    }
    return(
        <li>
            <p>{title}</p>
            <p>{amount}</p>
            <p>{type1}</p>
            <button type="button" testid="delete" onClick={deleteItem}>
            <img src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" alt="delete"/>
            </button>
        </li>
    )
}

export default TransactionItem