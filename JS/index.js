var insert=document.querySelector('.amt-bal');
var balance=document.querySelector('.balance');
var amount=document.querySelector('.amount')
var cred=document.querySelector('.cred');
var debt=document.querySelector('.debt');


var tran=[]

insert.addEventListener('click',function()
{
   
    let balance=Number(document.querySelector('.balance').value);
    let amount=Number(document.querySelector('.amount').value);
    console.log(balance);
    console.log(amount);
    tran=[0];
    if(amount>=0){
        tran.push(document.querySelector('.amount').value);
        cred.innerHTML+="<h4>"+document.querySelector('.amount').value+"</h4>";
    }
    else{
        debt.innerHTML+="<h4>"+document.querySelector('.amount').value+"</h4>";
    }
    (document.querySelector('.balance').value)=balance+amount;
    document.querySelector('.amount').value=''
}
);


