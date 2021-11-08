const sons = ['som1','som2','som3','som4','som5','som6']

sons.forEach (som => 
    {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerText = som 

        document.getElementById('botoes').appendChild(btn)
    })