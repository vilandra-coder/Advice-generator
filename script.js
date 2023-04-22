const adviceNo = document.querySelector('.advice-no')
const advice = document.querySelector('p')
const btn = document.querySelector('.btn')

const getAdvice = async()=>{
    try {
        const res = await fetch(`https://api.adviceslip.com/advice`)
        const data = await res.json()
        console.log(data)

    const slip = data.slip.id
    const newAdvice = data.slip.advice

    adviceNo.innerHTML = `#${slip}` 
    advice.innerHTML = `"${newAdvice}"`
    } catch (error) {
      console.log(error)  
    }
}


btn.addEventListener('click', ()=>{
    getAdvice()   
})


