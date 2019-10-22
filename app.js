// delete a book

const list =  document.querySelector('#book-list ul');

list.addEventListener('click', (e)=>{
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// add a book

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const input = addForm.querySelector("input[type='text']");
    const value = addForm.querySelector("input[type='text']").value;
    
    if (value){
        //create elements
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');
        
        //add classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');
    
        ///add content
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;
    
        //append to document, order matters
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li); 
        
        //set value to ''
        input.value='';

        //remove red border and <p>
        input.style.border = '';
        const p = input.parentElement.querySelector('p');
        input.parentElement.removeChild(p);
    } else {
        if(!addForm.querySelector('p')){
            input.style.border = 'red 2px solid';
            addForm.innerHTML += "<p>Book name is required.</p>"
        }
    }
});


//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', (e)=>{
    if(hideBox.checked){
        list.style.display = 'none';
    }else{
        list.style.display = 'initial';
    }
})

//filter books

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e)=>{
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book)=>{
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) >= 0 ){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
})

//tabbed content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', (e)=>{
    console.log(e);
    
    if(e.target.tagName == 'LI') {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach((panel)=>{
            if(panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
});

document.addEventListener('DOMContentLoaded', ()=>{
    //do something....
})