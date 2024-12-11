import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

export default function App() {
  return (<>
    <div className="app-container">
      {/* Chat List (Left Panel) */}
      <div className="chat-list">
        <ChatList/>
      </div>

      {/* Chat Window (Right Panel) */}
      <div className="chat-window">
        <ChatWindow/>
      </div>
    </div>

  </>
  );
}
