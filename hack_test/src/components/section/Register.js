import { useEffect, useState } from "react";
import '../css/Register.css'

const Register = (props) => {
    const [dataRegister, setDataRegister] = useState({});
    const onSave = (event) => {
        event.preventDefault();
        props.onSubmitRegister(dataRegister);
    };
    const onchange = (params) => {
        setDataRegister({
            ...dataRegister,
            [params.target.name]: params.target.value
        })
    }
    return (
        <div className="form-res" >
            <form className="regis" onSubmit={(e) => onSave(e)}>
                <h1 className="re"> REGISTER </h1>
                <input onChange={onchange} name='username' className="mag-bot-30 h-45" type='name' placeholder='USERNAME' />
                <input onChange={onchange} name='password' className="mag-bot-30 h-45" type="password" placeholder='Password' />
                <input onChange={onchange} name='confirm-password' className="mag-bot-30 h-45" type="password" placeholder='Confirm Password' />
                <div className="mag-bot-30 title">
                    <input onChange={onchange} name='firstname' className="w-48 h-45 " placeholder="FIRST NAME" />
                    <input onChange={onchange} name='lastname' className="w-48 h-45 " placeholder="LAST NAME" />
                </div>
                <input onChange={onchange} name='birthday' className="mag-bot-10 h-45" type="password" placeholder='Your Birthday month\day' />
                <div className="mag-bot-30 just-conten-left " >
                    <div className='title-1 mag-bot-10'>
                        <button className="title-but"></button>
                        <h6>SIGN UP FOR EXCLUSIVE UPDATES</h6>
                    </div>
                    <div className='title-1'>
                        <button className="title-but"></button>
                        <h6>I AGREE TO TERMS & CONDITIONS</h6>
                    </div>

                </div>
                <div className=""><button onChange={onchange} className="but-SIGN-IN" >REGISTER</button></div>
                <div className="w-spa-30px">SIGN IN WITH <a href="#">FACEBOOK</a> or <a href="#">GOOGLE</a></div>
            </form>
        </div >
    )
}

export default Register