const searchInput = document.querySelector('#search-input');
const listItems = document.querySelectorAll('.list-group-item');
searchInput.addEventListener('input', () =>{
    filterList();
});
//const listItems = document.querySelectorAll('.list-group-item');


const filterList = () => {
    const filter = searchInput.value.toLowerCase();

    listItems.forEach((item) =>{
        let text = item.textContent;

        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = '';
        }
        else{
            item.style.display = 'none';
        }
    })

}