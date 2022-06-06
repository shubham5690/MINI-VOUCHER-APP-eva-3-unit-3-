let purchaseDta=JSON.parse(localStorage.getItem('purchase'))  

console.log(purchaseDta)

function append(){
    purchaseDta.forEach(function(ele){
        let container=document.getElementById('purchased_vouchers')
        let box=document.createElement('div');
        box.setAttribute('id','voucher_list')

        let img=document.createElement('img')
        img.src=ele.image

        let name=document.createElement('h2')
        name.innerText=ele.name

        let price=document.createElement('h2')
        price.innerText=ele.price

        box.append(img,name,price)
        container.append(box)

    })
}
append()

let user_data=JSON.parse(localStorage.getItem('user'))

document.getElementById('wallet_balance').innerText=user_data.amount