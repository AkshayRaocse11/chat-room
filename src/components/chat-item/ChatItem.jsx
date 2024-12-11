/* eslint-disable react/prop-types */
import styles from "./ChatItem.module.css";

export default function ChatItem(props) {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  function truncateTextByLength(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'; // Truncate and add ellipsis
    }
    return text;
  }
  const truncatedMessage = truncateTextByLength(props.message, 30);
  return (
    <div className={styles.ChatItem}>
      <div className={styles.ChatItemContainer}>
      <div className={`${styles.Avatar} ${styles[props.avatarColor]}`}></div>
        <div className={styles.MessageBody}>
          <div>
            <div className={styles.Name}>{props.name}</div>
            <div className={styles.Message}>{truncatedMessage}</div>
          </div>
          <div className={styles.Log}>
            <div className={styles.Time}>{currentTime}</div>
            {/* <div className={styles.Status}>
              <span className={styles.StatusCount}>{props.statusCount}</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>    
  );
}
