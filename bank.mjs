import {account} from './account.mjs';
import promptSync from 'prompt-sync';
let prompt=promptSync();
let bank=[];
let accountno,name,balance,amount,choice,a;

do{
	
	choice=parseInt(prompt("1.create,2.search,3.deposit,4.withdraw,0.exit,enter your choice:"));
	//console.log('choice is',choice);
	switch(choice)
	{
		case 1:
		   accountno=parseInt(prompt("enter accountno for account to create:"));
		    a=bank.find(obj=>obj.accountno==accountno);
		   if(a!=undefined)
		   {
			   console.log("duplicate accountno");
			   continue;
		   }
		  name=prompt("enter name:");
		  balance=parseInt(prompt("enteropening balance in Rs for account to create:"));
		  let acc=new account(accountno,name,balance);
		  bank.push(acc);
		  console.log("account added with number:",accountno);
		  break;
		 case 2:
		 accountno=parseInt(prompt("enter accountno for account to search:"));
		    a=bank.find(obj=>obj.accountno==accountno);
		   if(a!=undefined)
		   {
			   console.log("account details");
			   console.log(a);
		   }
		   else{
			  console.log("search failed");
		   }
		break;
		case 3:
		   accountno=parseInt(prompt("enter accountno for account to deposit:"));
		    a=bank.find(obj=>obj.accountno==accountno);
		   if(a==undefined)
		   {
			   console.log("search failed");
			   continue;
		   }
		 
		  amount=parseInt(prompt("enteramount to deposit:"));
		 a.deposit(amount);
		 // console.log("account updated with number:",accountno);
		  break;
		  case 4:
		   accountno=parseInt(prompt("enter accountno for account to withdraw:"));
		    a=bank.find(obj=>obj.accountno==accountno);
		   if(a==undefined)
		   {
			   console.log("search failed");
			   continue;
		   }
		 
		  amount=parseInt(prompt("enteramount to withdraw:"));
		 a.withdraw(amount);
		  //console.log("account updated with number:",accountno);
		  break;
		case 0:
		  break;
		
	}

}while(choice!=0);