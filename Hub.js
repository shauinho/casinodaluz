// colorir os botões do lado

var MenuItem = document.querySelectorAll('.item-menu')

function selectlink(){
    MenuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

MenuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

//expandir o menu

var BtnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

BtnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})