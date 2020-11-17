const get = (id = "")=>{
    return axios.get( 'http://localhost:3000/personas/' + id)
    .then( res => res.data )
    .catch( err => console.log(err) );
}

const post = (data)=>{
    return axios( 'http://localhost:3000/personas',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    })
    .then( res => res.data )
    .catch( err => console.log(err) );
}

const put = (data,id)=>{
    return axios( 'http://localhost:3000/personas/' + id,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    })
    .then( res => res.data )
    .catch( err => console.log(err) );
}

const remove = (id)=>{
    return axios( 'http://localhost:3000/personas/' + id,
    {
        method: 'DELETE'
    })
    .then( res => res.data )
    .catch( err => console.log(err) );
}

export {
    get,
    post,
    put,
    remove
}