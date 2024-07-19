
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "./component/navigation/header";
import Footer from "./component/box/footer";
import JisuBenner from "./component/util/jisuBenner";
import MyHeader from "./component/navigation/myHeader";
import Alarm from "./component/util/alarm";

const inter = Inter({ subsets: ["latin"] });

const ReduxProvider = dynamic(() => import("./redux/redux-provider"), {
  ssr: false
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/imgs/chart.png" type="image/<generated>" sizes="<generated" border-radius="50%" />
        <title>최고의 주식거래소:: GGUN</title>
      </head>
      <body className={inter.className}>
        <div className="bg-white">
          <ReduxProvider>
            {/* {parseCookies().accessToken != undefined ? */}
            <div className="h-[95px]">
              <div className="fixed h-[50px] top-0 left-0 fixed z-30 ">
                <JisuBenner/>
                {/* <Header /> */}
                <MyHeader />
              </div>
            </div>
            {/* : <div></div>}  */}
            <div className="justify-center flex z-10">
              {children}
            </div>
              <div className="border-t-[1px] relative bottom-0 f-full"><Footer /></div>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
