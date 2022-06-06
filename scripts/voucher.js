let user_data=JSON.parse(localStorage.getItem('user'));

console.log(user_data.amount)

document.getElementById('wallet_balance').innerHTML=user_data.amount

// api='https://masai-vouchers-api.herokuapp.com/api/vouchers'

async function voucherData(){
    try{
        let res= await fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers')
        let data= await res.json()
        console.log(data[0].vouchers)
        append(data[0].vouchers)
    }catch(err){
        console.log(err)
    }
}
voucherData()

function append(data){
    data.forEach(function(ele){
        let container=document.querySelector('.voucher')
        let box=document.createElement('div');
        box.setAttribute('id','voucher_list')

        let img=document.createElement('img')
        img.src=ele.image

        let name=document.createElement('h2')
        name.innerText=ele.name

        let price=document.createElement('h2')
        price.innerText=ele.price

        let btn=document.createElement('button')
        btn.innerText='Buy'
        btn.setAttribute('id','buy_voucher')
        btn.addEventListener('click',function(){
            purchaseItm(ele)
        })

        box.append(img,name,price,btn)
        container.append(box)
    })

}
let purchaseDta=JSON.parse(localStorage.getItem('purchase'))  || []

function purchaseItm(ele){
    // console.log(ele)
    purchaseDta.push(ele)
    // console.log(purchaseDta)
    localStorage.setItem('purchase',JSON.stringify(purchaseDta))

}
