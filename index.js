let menu = document.querySelector('.icon-menu')
let sideNav = document.querySelector('.mySideNav')
let feature = document.querySelector('.feature-img1')
let company = document.querySelector('.company-img1')
let closeMenu = document.querySelector('.sidenav-closeBtn')
let arrowUp = document.querySelector('.arrow-up')
let arrowDown = document.querySelector('.arrow-down')
let dropdownContentOne = document.querySelector('.dropdown-contentt')
let dropdownContentTwo = document.querySelector('.dropdown-contenttt')
let downFeature = document.querySelector('.feature-downn')
let upFeature = document.querySelector('.feature-upp')
let downCompany = document.querySelector('.company-downn')
let upCompany = document.querySelector('.company-upp')
let firstDropdown = document.querySelector('.dropdown-contentts')
let secondDropdown = document.querySelector('.dropdown-conntent')
let sideCompanyDown = document.querySelector('.side-company-downn')
let sideCompanyUp = document.querySelector('.side-company-upp')
let sideSecondDropdown = document.querySelector('.side-dropdown-contenttt')
let sideFirstDropdown = document.querySelector('.side-dropdown-contentt')
let sideFeatureDown = document.querySelector('.side-feature-downn')
let sideFeatureUp = document.querySelector('.side-feature-upp')
let sideLogin = document.querySelector('.side-login-btn')
let sideReg = document.querySelector('.side-reg-btn')





menu.addEventListener('click', ()=>{
    sideNav.style.display = 'block'
    menu.style.display ='none'
    sideNav.style.marginLeft = '15em';
    sideNav.style.marginTop = '9px';
    sideNav.style.width = '120px';
})
closeMenu.addEventListener('click', ()=>{
    sideNav.style.display = 'none';
    menu.style.display = 'block'
})

downFeature.addEventListener('click', ()=>{
    firstDropdown.style.display = 'block';
    downFeature.style.display = 'none'
    upFeature.style.display = 'block'
})

downCompany.addEventListener('click', ()=>{
    secondDropdown.style.display = 'block';
    downCompany.style.display = 'none'
    upCompany.style.display = 'block'
})

upCompany.addEventListener('click', ()=>{
    secondDropdown.style.display = 'none'
})

upFeature.addEventListener('click', ()=>{
    firstDropdown.style.display = 'none'
})
sideFeatureDown.addEventListener('click', ()=>{
    sideFirstDropdown.style.display = 'block'
    sideFeatureDown.style.display ='none'
    sideFeatureUp.style.display = 'block'
})
sideCompanyDown.addEventListener('click', ()=>{
    sideSecondDropdown.style.display = 'block'
    sideCompanyDown.style.display ='none'
    sideCompanyUp.style.display = 'block'
})
sideCompanyUp.addEventListener('click', ()=>{
    sideSecondDropdown.style.display = 'none'
})
sideFeatureUp.addEventListener('click', ()=>{
    sideFirstDropdown.style.display = 'none'
})
// sideLogin.addEventListener('click', ()=>{
//     sideLogin.style.backgroundColor = 'white'
//     sideLogin.style.border = '1px solid black'
// })
function activee(){
    if (sideLogin.classList.contains('active')){
        sideLogin.classList.remove('active')
    }
    else sideLogin.classList.add('active')
}

sideLogin.addEventListener('click', activee) 



