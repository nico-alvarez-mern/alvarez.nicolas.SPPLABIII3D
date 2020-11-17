import {selected,addSelected, addItem} from './listItem.js';
import { completeForm, emptyForm } from './form.js';
import {createTBody} from './table.js';
import { Anuncio_Auto } from './Anuncio.js';
import {put,remove} from '../apiXHR.js';

export const handleDelete = async()=>{
    await remove(selected.id);
    await createTBody(completeForm );
    const divBtns = document.getElementById('btns');
    divBtns.classList.add('hidden');
    emptyForm();
}
export const handleCancel = ()=>{
    addSelected();
    const divBtns = document.getElementById('btns');
    divBtns.classList.add('hidden');
    emptyForm();
}
export const handleSave = async()=>{
    const form = document.getElementById('myForm');
    const transaccion = (form.transaccion.value === 'venta') ? 'venta' : 'alquiler';
    const newItem = new Anuncio_Auto(
        '',
        form.titulo.value,
        transaccion,
        form.descripcion.value,
        form.precio.value,
        form.puertas.value,
        form.kilometros.value,
        form.potencia.value
    )
    if(selected){
        await put(newItem,selected.id);
        const divBtns = document.getElementById('btns');
        divBtns.classList.add('hidden');
    }else{
        await addItem( newItem );
    }
    emptyForm();
    await createTBody(completeForm);   
}