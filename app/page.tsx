import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Techy - Chatbot made by using NextJS, Langchain and OpenAI
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            You can ask any Computer Science related question to this chatbot
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Try asking e.g. <code>What is a Computer?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🖥️"
      titleText=" Techy the Computer Geek"
      placeholder="Hi! I'm Techy! Ask me about a question about Computer Science!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
