import React from "react";
import Image from "next/image";

const CollectionCard = ({
  card,
}: {
  card: {
    name: string;
    username: string;
    avatar: string;
    category: string;
    nfts: {
      bg: string;
      image: string;
    }[];
  };
}) => {
  return (
    <div 
    className="flex w-[100%] flex-col gap-[20px] rounded-[10px] bg-white/10 p-[10px] 
    lg:gap-[20px] lg:w-[380px] lg:flex-1 lg:p-[20px]">

      {/* header */}
      <div className="flex items-start justify-between">

        {/* user info */}
        <div className="flex items-center gap-3">
          {/* user image */}
          <div className="relative h-[26px] w-[26px] lg:h-[47px] lg:w-[47px]">
            <Image
              src={card.avatar}
              alt="user"
              fill
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            {/* user name */}
            <span className="text-12 lg:text-18">{card.name}</span>

            {/* user username */}
            <span className="text-10 text-white/50 lg:text-14">{card.username}</span>
          </div>
        </div>

        {/* likes count */}
        <div className="flex items-center gap-2 ">
          <div className="relative h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]">
            <Image
              src="/images/heart.png"
              alt="heart"
              fill
              className="object-contain"
            />
          </div>

          <span className="text-[11px] lg:text-18">63</span>
        </div>
      </div>

      {/* grid of monkeys*/}
      <div className="grid grid-cols-2 gap-4">{/* using css grid system */}

        {/* first columns with one image */}
        <div
          className="relative w-full flex-1 h-[257px] overflow-hidden rounded-lg"
          style={{ backgroundColor: card.nfts[0].bg }}
        >
          <Image
            src={card.nfts[0].image}
            alt="collection"
            fill
            className="object-cover"
          />
        </div>

        {/* second column */}
        <div className="flex flex-col gap-4">
          <div
            className="relative flex-1 w-full rounded-lg overflow-hidden"
            style={{ backgroundColor: card.nfts[1].bg }}
          >
            <Image
              src={card.nfts[1].image}
              alt="colletion"
              fill
              className="object-contain"
            />
          </div>

          {/* third column  */}
          <div
            className="relative flex-1 w-full rounded-lg overflow-hidden"
            style={{ backgroundColor: card.nfts[2].bg }}
          >
            <Image
              src={card.nfts[2].image}
              alt="colletion"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
