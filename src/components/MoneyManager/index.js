/* eslint-disable prettier/prettier */
import { Component } from "react";
import {v4 as uuidv4} from "uuid"
import TransactionItem from "../TransactionItem"
import MoneyDetails from "../MoneyDetails"

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {

state={
    title:"",
    amount:"",
    type:transactionTypeOptions[0].optionId,
    HistoryList:[],
}

onSubmitForm = (event)=>{
    event.preventDefault()
    const {title,amount,type,HistoryList}=this.state
    let displayText1 = ""
    if (type===transactionTypeOptions[0].optionId){
        displayText1=transactionTypeOptions[0].displayText
    }
    else{
        displayText1=transactionTypeOptions[1].displayText
    }
    const obj = {id:uuidv4(),title,amount:parseInt(amount),type1:displayText1}
    this.setState({HistoryList:[...HistoryList,obj],title:"",type:transactionTypeOptions[0].optionId,amount:""})
    }

onTitleChange = (event)=>{
this.setState({title:event.target.value})
}

onAmountChange = (event)=>{
this.setState({amount:event.target.value})
}

onTypeChange = (event)=>{
this.setState({type:event.target.value})
}

onDeleteItem = (id)=>{
const {HistoryList} = this.state
const updatedList = HistoryList.filter(each=>each.id!==id)
this.setState({HistoryList:updatedList})
}

render(){
    const {type,title,amount,HistoryList}=this.state
    return(
        <>
        <h1>Hi, Richard</h1>
        <p>Welcome back to your Money Manager</p>
        <h1>Add Transaction</h1>
        <MoneyDetails transactionTypeOptions={transactionTypeOptions} HistoryList={HistoryList}/>
        <form onSubmit={this.onSubmitForm}>
            <label htmlFor="title">TITLE</label>
            <input type="input" onChange={this.onTitleChange} id="title" placeholder="title" value={title}/>
            <label htmlFor="amount">AMOUNT</label>
            <input type="input" onChange={this.onAmountChange} id="amount" placeholder="amount" value={amount}/>
            <label htmlFor="type">TYPE</label>
            <select id="type" onChange={this.onTypeChange} value={type}>
                {transactionTypeOptions.map(each=><option value={each.optionId}>{each.displayText}</option>)}
            </select>
            <button type="submit">Add</button>
            </form>
            <h1>History</h1>
            <p>Title</p>
            <p>Amount</p>
            <p>Type</p>
            <ul>
            {HistoryList.map(each=><TransactionItem key = {each.id} transactionDetails={each} onDeleteItem={this.onDeleteItem}/>)}
            </ul>
        </>
    )
}
}

export default MoneyManager
