/* eslint-disable react/no-unknown-property */
// Write your code here
/* eslint-disable prettier/prettier */
const MoneyDetails = props => {
  const {transactionTypeOptions, HistoryList} = props
     let income = 0
    let expenses=0
    let balance=0
    HistoryList.forEach(each=>{
        if (each.type1 === transactionTypeOptions[0].displayText){
            income+=each.amount
        }
        else{
            expenses+=each.amount
        }
    })
    balance=income-expenses
    const detailsList = [{testid:"balanceAmount",title:"Your Balance",amount:balance,imgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png",altimg:"balance",},
    {testid:"incomeAmount",title:"Your Income",amount:income,imgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png",altimg:"income",},
    {testid:"expensesAmount",title:"Your Expenses",amount:expenses,imgUrl:"https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png",altimg:"expenses",}]
    
    return(
        <ul>
            {detailsList.map(each=> (
                <>
                <p>{each.title}</p>
                <p testid={each.testid}>Rs {each.amount}</p>
                <img src={each.imgUrl} alt={each.altimg}/>
                </>))
            }
        </ul>
    )
        }

export default MoneyDetails