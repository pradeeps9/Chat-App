
const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="../../../public/avtar.svg" alt="user avtar" />
        </div>
      </div>

      <div className="chat-bubble text-white bg-blue-500">Hello there!</div>
      <div className="chat-footer opacity-50 text-sm flex gap-1 items-center">12:24</div>
      
    </div>
  )
}

export default Message