type Props = {
  sender?: boolean;
};

export default function MessageCard(props: Props) {
  const { sender } = props;

  return (
    <>
      {sender ? (
        <div className="flex gap-4">
          <img
            src="/profile.jpg"
            className="rounded-full border w-[40px] h-[40px] object-cover"
          />
          <div className="">
            <div className="p-3 pill bg-[#82ccdd] text-black text-base">
              How are you doing?
            </div>
            <span className="text-gray-200">07:30am</span>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 justify-end">
          <div className="text-end">
            <div className="p-3 pill bg-[#78e08f] text-black text-base">
              How are you doing?
            </div>
            <span className="text-gray-200">07:30am</span>
          </div>
          <img
            src="/profile.jpg"
            className="rounded-full border w-[40px] h-[40px] object-cover"
          />
        </div>
      )}
    </>
  );
}
