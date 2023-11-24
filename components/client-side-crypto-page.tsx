"use client";

import { useState } from "react";
import type { Coin } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ClientSideCryptoPage({ coins }: { coins: Coin[] }) {
  const [search, setSearch] = useState("");

  const filtered = coins?.filter((coin) =>
    coin?.name?.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="pt-10 flex flex-col gap-10">
      <div className="w-full flex justify-end items-center">
        <input
          className="w-[400px] border border-gray-200 rounded-lg outline-none px-4 py-2"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="w-full grid grid-cols-4 gap-10">
        {filtered?.map((coin: Coin, i: number) => (
          <Link
            href={`/crypto/${coin?.uuid}`}
            key={coin?.uuid}
            className="w-full"
          >
            <div className="w-full aspect-auto border border-gray-200 px-4 py-8 flex flex-col gap-4">
              <div className="w-full flex justify-between items-center">
                <p>
                  {i + 1}. {coin?.name}
                </p>
                <div className="relative w-8 h-8">
                  <Image src={coin?.iconUrl} alt={coin?.name} fill />
                </div>
              </div>
              <div className="w-full text-sm flex flex-col gap-4">
                <div className="w-full flex justify-between items-center">
                  <p>Price</p>
                  <p>
                    $
                    {parseFloat(coin?.price) < 10 &&
                    parseFloat(coin?.price) > -10
                      ? parseFloat(coin?.price).toFixed(4)
                      : parseFloat(coin?.price).toLocaleString()}
                  </p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p>Market Cap</p>
                  <p>${parseFloat(coin?.marketCap).toLocaleString()}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p>% Change</p>
                  <p
                    className={cn(
                      parseFloat(coin?.change) < 0
                        ? "text-red-600"
                        : "text-green-600"
                    )}
                  >
                    {parseFloat(coin?.change).toFixed(2)}%
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
