import {get,post,put,remove} from './apiAxios.js';
import { crearSpinner } from './helpers.js';
import { createTBody } from './table.js';

const ol = document.getElementById('ol');
const btn = document.getElementById('btn');
const spinner = document.getElementById('spinner');


const mostrarId = async(id)=>{
    const persona = await get(id);
    console.log(persona);
}

const inicializarTabla = async()=>{
    spinner.appendChild(crearSpinner());
    const listItems = await get();
    spinner.innerHTML = "";
    createTBody(listItems,mostrarId);
}

inicializarTabla();

