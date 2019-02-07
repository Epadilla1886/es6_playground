import $ from 'jquery';

export function addToDom(text){
    $('#root').append(`<h1>${text}</h1>`);
}