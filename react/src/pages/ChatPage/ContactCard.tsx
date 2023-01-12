import { Link } from "react-router-dom";

type Props = {
  contact: {
    name: string;
  };
  id: number;
};

export default function ContactCard(props: Props) {
  const { contact, id } = props;
  return (
    <div className="px-2 py-3 flex items-center gap-6">
      <button className="relative">
        <img
          src="/profile.jpg"
          className="rounded-full border w-[60px] h-[60px] object-cover"
        />
        <span className="absolute right-1 bottom-1 w-[12px] border h-[12px] bg-red-500 rounded-full"></span>
      </button>
      <Link to={String(id)} className="flex-grow" state={contact}>
        <h4 className="text-xl truncate">{contact.name}</h4>
        <small>Left 30mins ago</small>
      </Link>
    </div>
  );
}
