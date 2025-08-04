import styles from '@/componentsPage/home-animation/styles.module.css'
interface Props {
  role1:string
  role2:string
  role3:string
  role4:string
  role5:string
}
function TextAnimation({role1, role2, role3, role4, role5}:Props) {
  return (
    <div className={styles.text_changer} >
        <p className={styles.intro_text}>Eu sou</p>
        <div className={styles.roles_container}>
            <span  className={styles.role}> {role1} </span>
            <span className={styles.role}>{role2}</span>
            <span className={styles.role}>{role3}</span>
            <span className={styles.role}>{role4}</span>
            <span className={styles.role}>{role5}</span>
        </div>

    </div>
  )
}

export default TextAnimation