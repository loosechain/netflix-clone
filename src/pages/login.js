import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import React from "react";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [usrMsg, setUserMsg] = React.useState("");

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    e.preventDefault();
    setEmail(e.target.value);
  };
  
  const handleLoginWithEmail = (e) => {
    console.log("");
    if (email) {
    } else {
      setUserMsg("Please enter a valid email");
    }
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix signin</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href="/">
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                width={128}
                height={34}
                alt="netflix logo"
              ></Image>
            </div>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign in</h1>
          <input
            className={styles.emailInput}
            type="text"
            placeholder="email"
            onChange={handleOnChangeEmail}
          ></input>
          <p className={styles.userMsg}>{usrMsg}</p>
          <button className={styles.loginBtn} onClick={handleLoginWithEmail}>
            Sign in
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
