const BtnMenu = document.getElementById('BtnMenu')

BtnMenu.addEventListener('click', ActiveMenu)

function ActiveMenu(){
    let MobileMenu = document.getElementById('MenuMobile')
    
    BtnMenu.classList.toggle('active')
    MobileMenu.classList.toggle('active')
}