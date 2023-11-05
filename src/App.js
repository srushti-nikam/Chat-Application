import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="3a76e04b-0226-4f2b-a4f9-cef745d49b71"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
