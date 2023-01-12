import {
  FaEllipsisV,
  FaMeh,
  FaPaperPlane,
  FaPhone,
  FaVideo,
} from "react-icons/fa";
import { Link, useFetcher, useLocation, useParams } from "react-router-dom";
import MessageCard from "./MessageCard";

export default function ChatMessages() {
  const fetcher = useFetcher();
  const { id } = useParams();
  const { state } = useLocation();

  return (
    <div className="rounded-3xl">
      <div className="pl-6 pr-2 pt-4 pb-8 flex justify-between items-start bg-[#00000008]">
        <div className="flex items-center">
          <button className="relative mr-8">
            <img
              src="/profile.jpg"
              className="rounded-full border w-[70px] h-[70px] object-cover"
            />
            <span className="absolute right-1 bottom-1 w-[12px] border h-[12px] bg-red-500 rounded-full"></span>
          </button>
          <Link to="" className="w-[250px] truncate mr-4">
            <h4 className="text-2xl truncate">{state?.name}</h4>
            <small className="text-sm">15,435 messages</small>
          </Link>
          <FaVideo size={25} className="mr-6" />
          <FaPhone size={25} />
        </div>
        <button>
          <FaEllipsisV size={25} />
        </button>
      </div>
      {id ? (
        <div className="chat__content__contacts h-[400px] max-h-[max-content] p-4">
          <MessageCard sender />
          <MessageCard sender />
          <MessageCard />
          <MessageCard sender />
          <MessageCard />
          <MessageCard sender />
          <MessageCard />
          <MessageCard sender />
          <MessageCard />
          <MessageCard sender />
        </div>
      ) : (
        <div className="h-[400px]" />
      )}

      <fetcher.Form className="border m-4 rounded-2xl chat__content__search p-2 flex text-base bg-[#00000008]">
        <button className="pl-2 pr-4">
          <FaMeh />
        </button>
        <textarea
          rows={1}
          name="message"
          className="flex-grow resize-none bg-transparent text-base pl-6 py-1 focus:outline-none"
        />
        <button type="submit" className="pl-4 border-l pr-1">
          <FaPaperPlane />
        </button>
      </fetcher.Form>
    </div>
  );
}
