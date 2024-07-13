import { useEffect } from "react";

import { useSocketConext } from "../context/SocketContxt"
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.wav";

const useListenMessages = () => {
  const { socket } = useSocketConext();
  const { messages, setMessages } = useConversation();

  useEffect(()=>{
    socket?.on("newMessage", (newMessage)=>{
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    })


    return () =>  socket?.off("newMessage");
  }, [socket, messages, setMessages]);

}

export default useListenMessages