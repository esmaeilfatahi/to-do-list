'use strict';

const txtInput = document.querySelector('.txt-input');
const items = document.querySelector('.items');
const txtItem = document.querySelector('.txt-item');

const btnAdd = document.querySelector('.btn-add');
const btnDelete = document.querySelector('.btn-delete');
const btnDone = document.querySelector('.btn-done');



btnAdd.addEventListener('click', function(e){
    e.preventDefault();
    const txt = txtInput.value;
    items.insertAdjacentHTML("afterbegin" ,`<li class="item">
        <p class="txt-item">${txt}</p>
        <div class="btns">
            <button class="btn btn-delete">delete</button>
            <button class="btn btn-done">done</button>
        </div>
    </li>`);
    // txtInput.textContent=' ';
});

// btnDelete.addEventListener('click' ,function(e){
//     e.preventDefault();

// } )
