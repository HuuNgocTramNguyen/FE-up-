import { useEffect, useState } from "react";
import '../css/Register.css'

const Login = (props) => {
    const [dataLogin, setDataLogin] = useState({});
    const onSave = (event) => {
        event.preventDefault();
        props.onSubmitLogin(dataLogin);
    };
    const onchange = (params) => {
        setDataLogin({
            ...dataLogin,
            [params.target.name]: params.target.value
        })
    }
    return (
        <form onSubmit={(e) => onSave(e)}>
            <h1 className="re"> LOGIN </h1>
            <input onChange={onchange} name='username' className="mag-bot-30 h-45" type='name' placeholder='USERNAME' />
            <input onChange={onchange} name='password' className="mag-bot-10 h-45" type="password" placeholder='Password' />
            <div className='title  mag-bot-30'>
                <div className='title-1'>
                    <button className="title-but mar-l"></button>
                    <h6 class="pad-l">REMEMBER ME</h6>
                </div>
                <h6 className="pad-r">FORGOT PASSWORD</h6>
            </div>
            <div className=""><button className="mag-bot-30 but-SIGN-IN" >SIGN IN</button></div>
            <div className="w-spa-30px">SIGN IN WITH <a href="#">FACEBOOK</a> or <a href="#">GOOGLE</a></div>
        </form>
    )
}
export default Login