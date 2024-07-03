
const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer">
        <div className="avtar online">
          <div className="w-12 rounded-full">
            <img src="../../../public/avtar.svg" alt="user avtar" />
          </div>
        </div>
        
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-400 ">John Doe</p>
            <span className="text-2xl">🐱‍💻</span>
          </div>
        </div>

      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  )
}

export default Conversation