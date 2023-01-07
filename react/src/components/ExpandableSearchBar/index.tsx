import { useEffect, useRef, useState } from "react";
import { useFetcher } from "react-router-dom";
import SearchIcon from "../Icons/SearchIcon";

export default function ExpandableSearchBar() {
  const [expanded, setExpanded] = useState(false);
  const fetcher = useFetcher();
  const inputRef = useRef<HTMLInputElement | null>(null);

  // focus input whenever search is expanded
  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  useEffect(() => {
    console.log("data", fetcher.data);
  }, [fetcher.state]);

  return (
    <>
      <button
        className="border flex items-center expandableSearch__button pill flex-grow px-3 gap-2"
        onClick={() => setExpanded(true)}
      >
        <SearchIcon width={24} height={24} />
        <input
          className="expandableSearch__button__input flex-grow"
          type="text"
          placeholder="Search for people, tags, folders, and Looms"
          value=""
          contentEditable="false"
          readOnly
        />
      </button>
      {expanded ? (
        <div
          className="dark-overlay"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(false);
          }}
        >
          <div
            className="bg-white rounded-3xl p-5 mx-auto w-1/2 max-w-[800px] flex gap-4 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <fetcher.Form
              method="get"
              action="/dest"
              className="border flex items-center flex-grow px-3 gap-2 pill expanded__input__container"
            >
              <SearchIcon width={24} height={24} />
              <input
                className="flex-grow expandableSearch__input"
                type="text"
                name="limit"
                placeholder="Search for people, tags, folders, and Looms"
                ref={inputRef}
              />
              <button>Clear</button>
            </fetcher.Form>
            <button
              type="button"
              onClick={(e) => setExpanded(false)}
              className="inline-flex items-center justify-center w-[32px] h-[32px] hover:bg-gray-200 duration-100 text-xl font-normal rounded-full"
            >
              &#x2715;
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
