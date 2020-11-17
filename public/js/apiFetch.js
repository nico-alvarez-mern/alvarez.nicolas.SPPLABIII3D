const get = ()=>{
    return fetch( 'http://localhost:3000/personas' )
    .then( res => res.json() )
    .then( data => data )
    .catch( err => console.log(err) );
}

const post = (data)=>{
    return fetch( 'http://localhost:3000/personas',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then( res => res.json() )
    .then( data => data )
    .catch( err => console.log(err) );
}

const put = (data,id)=>{
    return fetch( 'http://localhost:3000/personas/' + id,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then( res => res.json() )
    .then( data => data )
    .catch( err => console.log(err) );
}

const remove = (id)=>{
    return fetch( 'http://localhost:3000/personas/' + id,
    {
        method: 'DELETE'
    })
    .then( res => res.json() )
    .then( data => data )
    .catch( err => console.log(err) );
}

export {
    get,
    post,
    put,
    remove
}