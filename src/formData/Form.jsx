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

// function onSubmit(e )
// {
//     e.preventDefault();
//     const formData =new FormData(e.target)
//     const formValues ={
//         name :formData.get('name'),
//         email :formData.get('email')
//     }
// }

//React 19
function myform(){
    function formAction(formData :FormData){
        //we are given an instance of formData instead of event
    }

    return <form action='formAction'/>
}