import React, { useEffect, useRef } from 'react'
import Styles from './UseRef.module.css';

const UseRefWork = () => {

const wrapperref = useRef()
const nameref = useRef()
const emailref = useRef()
const passwordref = useRef()
const mobileref = useRef()
const changewidth = useRef()
const changeheight = useRef()

useEffect(() => {

    nameref.current.focus();
    console.log(wrapperref)
    console.log(wrapperref.current.offsetWidth);

},[])

    const clicksubmit = () =>{
       if(nameref.current.value == ""){
        nameref.current.focus();
       }else if(emailref.current.value == ""){
        emailref.current.focus();
       }else if(passwordref.current.value == ""){
        passwordref.current.focus();
       }else if(mobileref.current.value == ""){
        mobileref.current.focus();
       }
       else{
        alert("Succecfully submitted")
       }
    }

const change = () => {
    
   wrapperref.current.style.width = changewidth.current.value
   wrapperref.current.style.height = changeheight.current.value
   
}
    return (
        <div>
            <div className={Styles.body}>
                <div className={Styles.wrapper} ref={wrapperref}>
                    <div className={Styles.input}>
                        <input type="text" name='fullname' placeholder='Name' ref={nameref} />
                        <label>Name</label>
                    </div>
                    <div className={Styles.input}>
                        <input type="email" name='email' placeholder='Email' ref={emailref} />
                        <label>Email</label>
                    </div>
                    <div className={Styles.input}>
                        <input type="password" name='password' placeholder='Password' ref={passwordref} />
                        <label>Password</label>
                    </div>
                    <div className={Styles.input}>
                        <input type="number" name='mobile' placeholder='mobile' ref={mobileref} />
                        <label>Mobile</label>
                    </div>
                    <div className={Styles.btn}>
                        <button onClick={clicksubmit}>submit</button>
                    </div>
                </div>

                <div className={Styles.changewidth}>
                    <input type="text" name='width' placeholder='width in px' ref={changewidth} />
                    <input type="text" name='height'  placeholder='height in px ' ref={changeheight} />
                    <button onClick={change}>change</button>
                </div>
            </div>
        </div>
    )
}

export default UseRefWork