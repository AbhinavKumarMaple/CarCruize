import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Test({ title, desc }) {
  return (
    <div className="w-full px-[17px]">
      <div className="mx-auto w-full text-TextWhite">
        <Disclosure className="">
          {({ open }) => (
            <div className={`${open ? "border-l-4 border-pila" : ""}`}>
              <Disclosure.Button className=" flex w-full justify-between font-lato font-bold text-[20px] px-4 py-2 text-left ">
                <span>{title}</span>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform " : ""} h-6 w-6 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" px-4 pt-4 pb-2 text-sm font-lato font-regular text-[16px]">
                {desc}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        <div className="w-full border-b"></div>
      </div>
    </div>
  );
}
