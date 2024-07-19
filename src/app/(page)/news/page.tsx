
import Image from 'next/image';
import NewsHeader from "../../component/navigation/newsHeader";
import NewsToday from "../../component/news/newsToday";
import { newsDummy } from "@/app/common/dummy/news.dummy";
import Link from "next/link";
import { allNews } from '@/app/api/news/route';

export default async  function NewsPage() {

  // const newslist = await allNews();
  const newslist = newsDummy;

  return (
    <div className="h-full w-full">
      <div className="flex justify-center w-full">
        <div className="h-full w-[80%] flex-col justify-center">
        <div className='sticky top-[60px] h-[60px] z-35'><NewsHeader /></div>
          <div className="mb-5 ">
          <Link href={newslist[0].imgLink}>
            <div className="flex border bg-gray-200 text-center text-black hover:text-gray-500 rounded-lg">
                  <Image unoptimized src={newslist[0].imgSrc} height={250} width={500} alt={newslist[0].title} className="rounded-l-lg" />
                  <ul className="w-[50%] ml-[15px] text-center content-center">
                    <li className="text-[20px] text-orange-500 ml-[15px] text-left mt-[10%]">경제</li>
                    <li className="text-[30px] ">{newslist[0].title}</li>
                    <li className="text-[15px] ml-[15px] text-left mt-[10%]">{newslist[0].content}</li>
                  </ul>
            </div>
          </Link>
        </div>
        <div className="text-center flex space-x-0">
        {newslist.map((v: INews, i: any) =>
            i < 5 ?
            <ul key={v.id} className="border p-2 w-1/5 text-center text-black hover:text-gray-500 hover:shadow-lg hover:border rounded-lg">
                <li className="flex justify-center h-[60%]">
                  <Image unoptimized src={v.imgSrc} height={150} width={300} alt={v.title} className="rounded-t-lg" />
                </li>
                <li className="p-2 h-[30%] truncate">{v.title}</li>
                <li className="text-left text-gray-400 h-[10%]">{i.id}분전</li>
              </ul>
              : <div key={v.id}></div>
            )}
        </div>

          <div>
            <NewsToday title="최신뉴스" newslist={newslist} />
          </div>

        </div>

      </div>
    </div>
  );
}

