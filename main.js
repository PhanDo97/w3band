const buyBtns = document.querySelectorAll('.js-buy-ticket')
const model = document.querySelector('.js-model')
const modelClose = document.querySelector('.ti-close')
const modelContainer = document.querySelector('.js-model-container')
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const header = document.querySelector('#header')
// console.log(modelContainer)
// click mua vé
function showBuyTicket(){
    model.classList.add('open')
}
// close mua vé
function hideBuyTicket(){
    model.classList.remove('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}
// gỡ bỏ class open
modelClose.addEventListener('click', hideBuyTicket)
// click bên ngoài cũng ẩn đi
model.addEventListener('click', hideBuyTicket)
// ngăn hành vi nổi bọt
modelContainer.addEventListener('click', function (e) {
    e.stopPropagation();
})
// đóng mở mobile menu
var headerHeight = header.clientHeight;
mobileMenuBtn.onclick = function (){
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
// tự động đóng khi chọn menu
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        // console.log(this)
        if (isParentMenu) {
            event.preventDefault();
        }else {
            header.style.height = null;
        }
        
    }
}
