import { useSocketConext } from "../../context/SocketContxt.jsx";
import useConversation from "../../zustand/useConversation.js"


const Conversation = ({conversation, emoji, lastIdx}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id ;

  const { onlineUsers } = useSocketConext();
  const isOnline = onlineUsers.includes(conversation._id);


  return (
      <>
        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? 'bg-sky-500' : '' } `} 
          onClick={() => setSelectedConversation(conversation)}
        >
          <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-12 rounded-full">
              <img src={conversation.profilePic} alt="user avtar" />
            </div>
          </div>
          
          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-gray-100 ">{conversation.fullname}</p>
              <span className="text-2xl">{emoji}</span>
            </div>
          </div>
        </div>
        { !lastIdx && <div className="divider my-0 py-0 h-1" /> }
      </>
    )
}

export default Conversation;


// 
// return (
//   <>
//     <div className={`flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer ${isSelected ? 'bg-sky-500' : '' } `} 
//       onClick={() => setSelectedConversation(conversation)}
//     >
//       <div className="avtar online">
//         <div className="w-12 rounded-full">
//           <img src={'avtar.svg'} alt="user avtar" />
//         </div>
//       </div>
      
//       <div className="flex flex-col flex-1">
//         <div className="flex gap-3 justify-between">
//           <p className="font-bold text-gray-400 ">{conversation.fullname}</p>
//           <span className="text-2xl">{emoji}</span>
//         </div>
//       </div>
//     </div>
//     { !lastIdx && <div className="divider my-0 py-0 h-1" /> }
//   </>
// )