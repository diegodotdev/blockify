import { POINTS } from "@/constants";
import { fetchCoins, fetchNews } from "@/lib/functions";
import { cn } from "@/lib/utils";
import type { Coin, Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default async function App() {
  const coins = await fetchCoins();
  const news = await fetchNews();

  return (
    <div className="flex flex-col gap-10 pb-20">
      <div className="w-full grid place-items-center mt-40">
        <p className="font-bold text-5xl text-center w-4/5">
          Welcome to Blockify: Your Gateway to the{" "}
          <span className="text-blue-600">Crypto Universe</span>!
        </p>
      </div>
      <div className="flex items-center gap-10 mt-40">
        {POINTS.map((point) => (
          <div
            key={point.id}
            className="flex flex-col justify-between items-center w-full"
          >
            <div className="w-full grid place-items-center h-[80px]">
              <div className="rounded-full p-4 bg-blue-100">
                <point.icon size="15px" className="text-blue-600" />
              </div>
            </div>
            <div className="h-[80px] grid place-items-start">
              <p className="font-semibold text-center my-5">{point.title}</p>
            </div>
            <div className="w-full h-[150px]">
              <p className="text-sm text-muted-foreground text-center">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 w-full flex flex-col gap-8">
        <p className="text-2xl font-semibold">
          Top <span className="text-blue-600">8</span> trending coins
        </p>
        <div className="w-full grid grid-cols-4 gap-10">
          {coins?.map((coin: Coin, i: number) => (
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
      <div className="mt-20 w-full flex flex-col gap-8">
        <p className="text-2xl font-semibold">
          Top <span className="text-blue-600">8</span> news stories
        </p>
        <div className="w-full grid grid-cols-4 gap-10">
          {news?.slice(0, 8)?.map((article: Article) => (
            <a
              href={article?.url}
              key={article?.url}
              className="w-full"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-full aspect-auto border border-muted-gray-200 px-4 py-8 flex flex-col gap-4">
                <p className="font-semibold">
                  {article?.title?.length < 42
                    ? article?.title
                    : `${article?.title?.slice(0, 41)}...`}
                </p>
                <Image
                  src={article?.thumbnail}
                  alt="article thumbnail"
                  width={500}
                  height={500}
                />
                <div className="w-full flex justify-end items-center">
                  <p className="text-muted-foreground text-sm">
                    {moment(article?.createdAt).format("MM/DD/YYYY")}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
