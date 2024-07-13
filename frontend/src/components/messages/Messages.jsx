import { useEffect, useRef } from "react";

import useGetMessage from "../../hooks/useGetMessage"
import useListenMessages from "../../hooks/useListenMessages";

import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message"


const Messages = () => {
  const { loading, messages } = useGetMessage();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior : 'smooth'});
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 && messages.map((message) => (
        <div  
          key={message._id} 
          ref={lastMessageRef}
        >
          <Message message={message} />
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />) }

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start conversation.</p>
      )}
    </div>
  )
}

export default Messages