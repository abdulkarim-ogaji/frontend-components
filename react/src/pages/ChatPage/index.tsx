import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SearchIcon } from "../../components/Icons";
import ContactCard from "./ContactCard";

const fakeContacts = [
  {
    name: "Abdulkarim Ogaji",
  },
];

export default function ChatPage() {
  const [query, setQuery] = useState("");

  const filteredContacts =
    query === ""
      ? fakeContacts
      : fakeContacts
          .filter((cont) =>
            cont.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          )
          .sort((a, b) => {
            if (
              a.name.toLowerCase().indexOf(query.toLowerCase()) >
              b.name.toLowerCase().indexOf(query.toLowerCase())
            ) {
              return 1;
            } else if (
              a.name.toLowerCase().indexOf(query.toLowerCase()) <
              b.name.toLowerCase().indexOf(query.toLowerCase())
            ) {
              return -1;
            } else {
              if (a.name > b.name) return 1;
              else return -1;
            }
          });

  return (
    <div className="chat overlay flex items-center justify-center text-white">
      <div className="chat__content max-w-[80%] w-full h-full gap-8 h-[75%] max-h-[max-content]">
        <div className="rounded-3xl pb-4">
          <div className="border m-4 rounded-2xl chat__content__search p-2 flex text-base">
            <input
              type="text"
              className="flex-grow"
              placeholder="Type to search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchIcon width={24} height={26} color="white" />
          </div>
          <div className="py-1 bg-[#00000066]" />
          <div className="chat__content__contacts h-[500px] max-h-[max-content]">
            {filteredContacts.map((contact, idx) => (
              <ContactCard id={idx + 1} key={idx} contact={contact} />
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
