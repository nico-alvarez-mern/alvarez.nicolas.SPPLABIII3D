const crearSpinner = ()=>{
    const img = document.createElement('img');
    img.setAttribute('src', './images/spinner.gif');
    img.setAttribute('alt', 'imagen spinner');
    return img;
}

export {
    crearSpinner
}