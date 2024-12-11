import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.SearchBar}>
        <input type="text" className={styles.SearchBox} placeholder="Search"/>
    </div>
  )
}
