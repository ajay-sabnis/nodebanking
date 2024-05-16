
class account 
{
	constructor(accountno,name,balance)
	{
		
		this.accountno=accountno;
		this.name=name;
		this.balance=balance;
	}
	toString()
	{
		return "account no:"+this.accountno+",name:"+this.name+",balnce in Rs:"+this.balane;
	}
	deposit(amount)
	{
		if(amount>=0)
		{
		   this.balance=this.balance+amount;
	    console.log('deposied Rs',amount);
		}
	    else
		  console.log('invalid deposit amount');
	}
	withdraw(amount)
	{
		if(amount>=0)
		{
		   if(amount<=this.balance-500)
		   {
			   this.balance=this.balance-amount;
			   console.log('withdrawn  Rs',amount);
		   }
		   else
			   
			   {
				   
				   console.log('insufficient funds');
			   }
		   
		}  
	    else
		  console.log('invalid deposit amount');
	}
	
}
export {account}


/*
a.push(new student(1,'qw',60));
a.push(new student(2,'wqw',50));
a.push(new student(3,'yqw',54));
for (let p of a)
{
	console.log(p);
}
let obj = a.find(o => o.rollno === 2);
if(obj==undefined)
{
console.log('search failed');	
}
else
{
console.log("search result:",obj);
}*/