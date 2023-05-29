import styles from "./navbar.module.css";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const NavBar = (props) => {
  const router = useRouter();
  const { username } = props;

  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/home");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/my-list");
  };

  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link legacyBehavior  className={styles.logoLink} href="/index">
        <a >
          <div className={styles.logoWrapper}>
            <Image src="/static/netflix.svg"   width={128} height={34} alt="netflix logo"></Image>
          </div>
        </a>
        </Link>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image src="/static/expand_more.svg" alt="expand more" width={24} height={24}></Image>
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName}>Sign Out</a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
