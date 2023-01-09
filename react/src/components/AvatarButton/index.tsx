import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "../Button";

export default function AvatarButton() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-[36px] h-[36px] overflow-hidden pointer-events-auto relative overflow-hidden rounded-full">
            <div className="show-on-parent-hover absolute dark-overlay-2 pointer-events-none"></div>
            <img src="/profile.jpg" className="w-full h-full object-cover" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right rounded-3xl border bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col items-center border-b p-4">
              <img
                src="/profile.jpg"
                className="w-[36px] h-[36px] rounded-full object-cover mb-3"
              />
              <h3 className="font-semibold mb-1">Abdulkarim Ogaji</h3>
              <p className="font-thin">
                Zero videos posted to Abdulkarim's workspace
              </p>
              <Button>Upgrade</Button>
            </div>
            <Menu.Item>
              {({ active }) => (
                <div className={`p-4 border-b`}>
                  <button
                    className={`${active} hover:bg-gray-200 duration-200 pill p-2 px-3 -mx-3 w-full flex justify-start`}
                  >
                    Account & preferences
                  </button>
                </div>
              )}
            </Menu.Item>
            <div className={`p-4 border-b`}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active} text-[var(--primary-color)] font-semibold hover:bg-gray-200 duration-200 pill p-2 px-3 -mx-3 w-full flex justify-start`}
                  >
                    Upgrade plan
                  </button>
                )}
              </Menu.Item>
              <p className="text-xs font-thin text-gray-600">
                Current plan: Starter plan
              </p>
              <p className="text-xs font-thin text-gray-600">
                24/25 videos saved in workspace
              </p>
            </div>
            <div className={`p-4 border-b`}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active} hover:bg-gray-200 duration-200 pill p-2 px-3 -mx-3 w-full flex justify-start`}
                  >
                    Install Chrome extension
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active} hover:bg-gray-200 duration-200 pill p-2 px-3 -mx-3 w-full flex justify-start`}
                  >
                    download desktop app
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active} hover:bg-gray-200 duration-200 pill p-2 px-3 -mx-3 w-full flex justify-start`}
                  >
                    download mobile app
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active} hover:bg-gray-200 duration-200 pill p-2 px-3 w-full flex justify-start`}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
