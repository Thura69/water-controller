import styles from '../../styles/Register.module.css';
import Image from 'next/image';
import Link from 'next/link';


function Register() {
  return (
     <div className={styles.register}>
          <div className={styles.bubble}></div>
          
              <div className={styles.register_header}>
              
                  <Image width={90} className={styles.logo} height={100} src={`/logo.png`} alt="company_logo" placeholder={"blur"} blurDataURL={'/logo.png'}></Image>

              

                   <h1 className={styles.register_company_header}>Digital Engineering <span>Tech LTD</span></h1>

          </div>      
        
          <div className={styles.register_container}>
              <div className={styles.register_computer_header}>
                  
                   <Image width={150} className={styles.logo} placeholder={'blur'} blurDataURL={'/logo_window.png'} height={170} src={`/logo_window.png`} alt="company_logo"></Image>
                   <h1 className={styles.company_name}>Digital Engineering Tech LTD</h1>
       
              
         
          </div>    
              <form className={styles.register_form}>
                  <h3 className={styles.kind_title}>Register</h3>
                  
                   <div className={styles.email_div}>
                      <div className={styles.email_title_container}>
                          <p className={styles.register_email_title}>Your FullName</p>
                  </div>
                      <input type='email'   className={styles.register_email} placeholder='Your FullName'></input>
              </div>
              <div className={styles.email_div}>
                      <div className={styles.email_title_container}>
                          <p className={styles.register_email_title}>Your Email</p>
                  </div>
                      <input type='email'   className={styles.register_email} placeholder='Your Email'></input>
              </div>
              <div className={styles.password_div}>
                  <p className={styles.register_password_title}>Password</p>
                  <input type="password"  className={styles.register_password} placeholder='Password'></input>
                  </div>
                  
                

              <div className={styles.button_div}>
                  <button type="submit" className={styles.register_button}>Sing Up</button>
                  </div>
                  
             


          </form>
         </div>
        
          <div className={styles.newUser}>
              <h3 className={styles.singup}>Already a User?
                  <Link href={'/login'}>
                    <span className={styles.signup_span}>Login</span>   
                  </Link>
                 </h3>
                  
          </div>
          <div className={styles.bubble2}></div>
          <div className={styles.bubble1}></div>
    </div>
  )
  
}

export default Register