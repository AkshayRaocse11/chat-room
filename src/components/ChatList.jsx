import ChatItem from "./chat-item/ChatItem";
import styles from "./ChatList.module.css";
import SearchBar from "./search-bar/SearchBar";

export default function ChatList() {
    return(
        <>
            <div className={styles.ChatList}>
                <SearchBar/>
                <ChatItem name="Sarah Connor" message="I'll be back!" statusCount={0} avatarColor="danger" />
                <ChatItem name="Bruce Wayne" message="Gotham needs me." statusCount={4} avatarColor="primary" />
                <ChatItem name="Tony Stark" message="I am Iron Man." statusCount={7} avatarColor="info" />
                <ChatItem name="Peter Parker" message="Friendly neighborhood Spider-Man!" statusCount={3} avatarColor="success" />
                <ChatItem name="Clark Kent" message="I have to save the world!" statusCount={6} avatarColor="warning" />
                <ChatItem name="Diana Prince" message="Amazonian princess!" statusCount={1} avatarColor="success" />
                <ChatItem name="Harley Quinn" message="Let's cause some chaos!" statusCount={9} avatarColor="danger" />
                <ChatItem name="Wade Wilson" message="You wanna have a taco?" statusCount={2} avatarColor="secondary" />
                <ChatItem name="Natasha Romanoff" message="I have unfinished business." statusCount={5} avatarColor="primary" />
                <ChatItem name="Steve Rogers" message="I can do this all day." statusCount={8} avatarColor="info" />
                <ChatItem name="Thor Odinson" message="Bring me Thanos!" statusCount={10} avatarColor="warning" />
            </div>
        </>
    );
}