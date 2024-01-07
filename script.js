function verificar()
{
   var data = new Date().getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')

   if(fano.value.length == 0 || fano.value > data)
   {
       window.alert('Verifique os dados e tente novamente')
   } else
   {
       var fsex = document.getElementsByName('radsex')
       var idade = data - fano.value
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked)
       {
           genero = 'Homem'
           if(idade >= 0 && idade < 12)
           {
               img.setAttribute('src', 'imagens/criança-m.png')
               //criança
           } else if(idade < 21)
           {
            img.setAttribute('src', 'imagens/jovem-m.png')
               //jovem
           }else if(idade < 50)
           {
            img.setAttribute('src', 'imagens/adulto-m.png')
               //adulto
           }else
           {
            img.setAttribute('src', 'imagens/idosos-m.png')
               //idoso
           }
       } else if(fsex[1].checked)
       {
           genero = 'Mulher'
           if(idade >= 0 && idade < 12)
           {
            img.setAttribute('src', 'imagens/criança-f.png')
               //criança
           } else if(idade < 21)
           {
            img.setAttribute('src', 'imagens/jovem-f.png')
               //jovem
           }else if(idade < 50)
           {
            img.setAttribute('src', 'imagens/adulto-f.png')
               //adulto
           }else
           {
            img.setAttribute('src', 'imagens/idosos-f.png')
               //idoso
           }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
       res.appendChild(img)
   }
}