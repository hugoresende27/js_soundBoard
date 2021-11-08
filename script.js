const sons = ['som1','som2','som3','som4','som5','som6']

sons.forEach (som => 
    {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerText = som 

        btn.addEventListener('click', () => 
        {
            stopMusica()
            document.getElementById(som).play()

        })

        document.getElementById('botoes').appendChild(btn)
    })

function stopMusica(){
    sons.forEach ( som => {
        const musica = document.getElementById(som)
        musica.pause()
        musica.currentTime =0;
    })
}

function mute(){
    sons.forEach ( som => {
        const musica = document.getElementById(som)
        musica.pause()
    })
}  

function myFunction(x) {
    x.classList.toggle("fa-volume-up");
  }
   