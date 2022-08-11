const tabsBtn=document.querySelectorAll('.tab_nav-btn');
const tabItem=document.querySelectorAll(".tab_item")
tabsBtn.forEach(function(item){
 item.addEventListener("click",function(){
    let currentBtn=item;
    let tabId=currentBtn.getAttribute ("data-tab")
    let currentTab=document.querySelector(tabId)

    if (!currentBtn.classList.contains ("active")) { 
        tabsBtn.forEach(function(item){
            item.classList.remove('active')
        });
    
        tabItem.forEach(function(item){
            item.classList.remove('active')
        });
        currentBtn.classList.add('active');
        currentTab.classList.add("active")
    }

  
 })
})


const nav=document.querySelector("#nav-icon2");
const popup=document.querySelector("#popup");
const navigation =document.querySelector ('#menu').cloneNode(1);

nav.addEventListener("click",hambHandler);

function hambHandler(e) {
    e.preventDefault();
    nav.classList.toggle('open');
    popup.classList.toggle('open');
    renderPopup();
}

function renderPopup (){
    popup.appendChild(navigation);
}