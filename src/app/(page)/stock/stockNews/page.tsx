import NewsToday from "@/app/component/news/newsToday";
import Link from "next/link";

export default function StockNews() {

    return (
        <div className="">
            <div className="flex h-[35px]">
            <Link href={"/news"} className="text-lg hover:text-xl text-white bg-pebble-100 pl-3">more</Link>
            <div className="overflow-hidden">
            <div className="bg-pebble-100 origin-bottom -rotate-45 -translate-y-6 ring-[20px] ring-offset-0 ring-pebble-100 h-[30px] w-[80px]"></div>
            </div>
            </div>
            <NewsToday title="종목뉴스" />
        </div>
    )
}