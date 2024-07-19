'use client'

import { StockChatBox } from "@/app/component/stock/stcokChatBox";

function StockChat({ params }: any) {

    const data = [
        { id: 1, writer: '주친자', title: '그러고보니 오늘 뉴스', content: '뉴스 최상단에 떴던데 기대해볼만함', date: '24-06-21' },
        { id: 2, writer: '따따따따따블', title: '상한가 가능한가요?', content: '경제지표가 엉망인데 털고 떠야 하는지 물타야 하는지ㅠ', date: '24-06-21' },
        { id: 3, writer: '박정연', title: 'ㅋㅋㅋ', content: '믿음 믿음만이 구원 아멘', date: '24-06-21' },
        { id: 4, writer: '.', title: '구리는 올랐는데', content: '반도체는 어케 떨어질수 있냐\n이건 말도 안돼', date: '24-06-21' },
    ]

    function handleTitle() {
        const enums: any = {
            1: "삼성전자 종목 토론",
            2: "SK하이닉스 종목 토론",
            3: "LG디스플레이 종목 토론",
            4: "테슬라 종목 토론",
            5: "아마존 종목 토론",
        };
        return <div>{enums[params]}</div>;
    };

    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-[85%]">
                <div className="text-lg bold">
                    <div className="blod text-[32px] h-[100px] content-center">{handleTitle()} <hr /></div>
                    <input type="text" className="h-[50px] w-1/3 my-2" placeholder="종목토론 제목" />
                    <input type="text" className="h-[50px] w-2/3" placeholder="종목에 대한 자유로운 이야기를 해보세요!" />
                </div>
                <div>
                    {data.map((v, i) =>
                        <StockChatBox key={v.id} id={v.id} writer={v.writer} title={v.title} content={v.content} date={v.date} />
                    )}
                </div>
            </div>
        </div>
    )
};
export default StockChat;
