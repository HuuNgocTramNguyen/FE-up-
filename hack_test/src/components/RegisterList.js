import React, { Fragment } from 'react';
import Register from './section/Register';


function RegisterList() {
    
  
    const onSubmitRegisterData = (dataRegister) => {
        console.log(333, dataRegister)
        fetch('https://5fad338a2ec98b0016047fc3.mockapi.io/comment', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataRegister),
        }).then(response => {
            if(response.status === 201){
                alert('Register is success')
            }else{
                alert('Register fail')
            }
        })
            // .then(dataRegister => {
            //     console.log('Success:', dataRegister);
            // })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    

    return (
        <Fragment>
            <div className='container-user'>
               
                    <Register onSubmitRegister={(dataRegister) => onSubmitRegisterData(dataRegister)} />
               
            </div>
        </Fragment>
    )
}
export default RegisterList;