import React from 'react'

// function onSubmit(e :React.FormEvent)
// {
//     e.preventDefault();
//     //collecting uncontorlled form field with refs
//     const formValues ={
//         name :nameRef.currnet .value,
//         email :nameRef.currnet.value
//     }
// }
import 

function onSubmit(e )
{
    e.preventDefault();
    const formData =new FormData(e.target)
    const formValues ={
        name :formData.get('name'),
        email :formData.get('email')
    }
}