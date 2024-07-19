import { myArticleList } from "@/app/api/articles/route"
import { IArticle } from "@/app/api/model/article.model";
import { qnalistDummy } from "@/app/common/dummy/articles.dummy"
import Link from "next/link"


export default async function Articles({prop}:{prop: string}) {

    // const allArticles = await myArticleList(id)
    const allArticles = qnalistDummy;

    return (
        <table className="">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>게시판</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>내용</th>
                    <th>작성일</th>
                    <th>처리완료일</th>
                </tr>
            </thead>
            <tbody>
                {allArticles.map((v: IArticle, i: number) =>
                    <tr key={v.id}>
                        <td>{v.id}</td>
                        <td>{v.boardId}</td>
                        <td><Link href={{pathname:`/articles/detail/${v.id}`,query:{
                         title : v.title, content : v.content, writerId : v.writerId, regDate : v.regDate, modDate: v.modDate}}}>{v.title}</Link></td>
                        <td>{v.writerId}</td>
                        <td><Link href={{pathname:`/articles/detail/${v.id}`,query:{
                         title : v.title, content : v.content, writerId : v.writerId, regDate : v.regDate, modDate: v.modDate}}}>{v.content}</Link></td>
                        <td>{v.regDate}</td>
                        <td>{v.modDate}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}