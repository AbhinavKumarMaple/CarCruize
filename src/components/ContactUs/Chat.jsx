import React from "react";
import { Message } from "./Chat/Message";
import { MessageInput } from "./Chat/MessageInput";
import { MessageClient } from "./Chat/MessageClient";

export const Chat = () => {
  return (
    <div className=" h-full w-full">
      <div className="m-[27px] flex flex-col gap-4 ">
        <Message Msg="How may i help you today?" name="ChatBot" time="2:30" />
        <div className="">
        <MessageClient Msg="how to book a service?" name="User" time="2:30"/>
        </div>
      </div>
    </div>
  );
};
