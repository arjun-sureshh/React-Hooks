import React, { useContext } from 'react'
import Styles from './Regform.module.css'
import { MyContext } from './Manger'

const Regform = () => {
  const{darkmode} =useContext(MyContext)
  return (
    <div className={  darkmode ? Styles.body_drak :Styles.body}>
    <div className={Styles.regcontainer}>
        <div className={Styles.formGroup}>
        <label htmlFor="name" className={ darkmode && Styles.text_dark}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className={Styles.formGroup}>
        <label htmlFor="email" className={ darkmode && Styles.text_dark}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className={Styles.formGroup}>
        <label htmlFor="password" className={ darkmode && Styles.text_dark}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <button type="submit" className={Styles.submitButton}>Register</button>

    </div>
    </div>
  )
}

export default Regform