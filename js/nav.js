let list = document.querySelectorAll('.list');
    function setActiveclass(){
        list.forEach((item) =>
        item.classList.remove('active'))
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('mouseover' , setActiveclass))