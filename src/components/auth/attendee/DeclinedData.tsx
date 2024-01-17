import React from "react";

const DeclinedData = () => {
  return (
    <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-3">
      <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
        Reason for Declination
      </h1>
      <div className="right row-span-1 sm:col-span-5 text-[12px] leading-15.18px] font-bold">
        Industry Relevance for Nigeria-Saudi Business Delegation Event
        <br />
        Dear John Doe,
        <br />
        Thank you for your interest in the Nigeria-Saudi Business Delegation
        Event. However, the event is specifically tailored to [specific
        industry/sectors], and unfortunately, your current profile does not
        align with the targeted industries. We appreciate your understanding and
        hope to connect in future events.
        <br /> Best Regards, <br />
        The Nigeria Saudi Business Forum
      </div>
    </div>
  );
};

export default DeclinedData;
