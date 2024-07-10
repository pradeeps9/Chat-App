import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
import useGetConversations from "../../hooks/useGetConversations";

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3 ) {
      toast.error("Please enter at least 3 characters.");
      return;
    }

    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));
    if(conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else{
      toast.error("No such user found.")
    }

  }
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search..." 
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
       />
      <button type="Submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearch className="w-6 h-6 outline-none"/>
      </button>
    </form>
  )
}

export default SearchInput