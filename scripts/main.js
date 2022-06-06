

let user_data=JSON.parse(localStorage.getItem('user'));

document.querySelector('form').addEventListener('submit',signup)

function signup(){
    event.preventDefault();
    let form=document.querySelector('form')

    let name=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let amount=form.amount.value;
    // console.log(name,email,address,amount)
    let obj={
        name:name,
        email:email,
        address:address,
        amount:amount
    }
    console.log(obj)

    localStorage.setItem('user',JSON.stringify(obj))
    
}