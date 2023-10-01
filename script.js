let btn = document.querySelector('#deposit-btn');
let btn2 = document.getElementById("withdraw-btn");

    // Deposit & Balance Section Start--*
btn.addEventListener(   'click', function(){
    let newDepositString = document.getElementById('deposit-input').value;
    let newDepositValue = parseFloat (newDepositString);
      
    let depositTotalString = document.getElementById('deposit-balance').innerHTML;
    let depositTotalValue = parseFloat (depositTotalString);
    
    let mainBalanceString = document.getElementById('total-balance').innerHTML;
    let mainBalancevalue = parseFloat(mainBalanceString);

    if(newDepositValue<=0){
        alert(`can't deposit`);
        document.getElementById('deposit-input').value = '';
    }
    else if (newDepositValue>=1){
        let totalDeposit = newDepositValue + depositTotalValue;
    document.getElementById('deposit-balance').innerHTML = totalDeposit;

    let mainBalance = newDepositValue+mainBalancevalue;
    document.getElementById('total-balance').innerHTML = mainBalance;

    document.getElementById('deposit-input').value ='';
    }
    else{
        document.getElementById('deposit-input').value =''; 
    }
       
}   )
    // Deposit & Balance Section End--*

    // Withdraw & Balance Section Starts--*
btn2.addEventListener(  'click', function(){
    let newWithdrawString = document.getElementById('withdraw-input').value;
    let newWithdrawValue = parseFloat (newWithdrawString);
      
    let TotalBalanceString = document.getElementById('total-balance').innerHTML;
    let TotalBalanceValue = parseFloat (TotalBalanceString);
    
    let mainWithdrawString = document.getElementById('withdraw-balance').innerHTML;
    let mainWithdrawvalue = parseFloat(mainWithdrawString);

    if( newWithdrawValue>TotalBalanceValue){
        alert('low balace');
        document.getElementById('withdraw-input').value = '';
    }
    else if(newWithdrawValue<=0){
        alert(`can't withdraw`);
        document.getElementById('withdraw-input').value = '';

    }
    else if (newWithdrawValue<=TotalBalanceValue){
        let totalBalance = TotalBalanceValue - newWithdrawValue;
        document.getElementById('total-balance').innerHTML = totalBalance;

        let totalWtihdraw = newWithdrawValue+mainWithdrawvalue;
        document.getElementById('withdraw-balance').innerHTML = totalWtihdraw;
        document.getElementById('withdraw-input').value = '';
    }
    else{
        document.getElementById('withdraw-input').value = '';
    }

}   )
    // Withdraw & Balance Section End--*