import React, { Fragment } from 'react';

import Login from './section/Login'

function LonginList() {
    
    const onSubmitLoginData = (dataLogin) => {
        console.log(222, dataLogin)
        fetch('https://5fad338a2ec98b0016047fc3.mockapi.io/comment', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataLogin),
        }).then(response => response.json())
            .then(dataLogin => {
                console.log('Success:', dataLogin);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <Fragment>
            <div className='container-user'>
               
                    <Login onSubmitLogin={(dataLogin) => onSubmitLoginData(dataLogin)} />
               
            </div>
        </Fragment>
    )
}
export default LonginList;