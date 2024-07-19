import CertificateLogin from "@/app/component/login/certificateLogin";
import IdLoginBox from "@/app/component/login/loginBox";


const Login = () => {
    return (
        <div className="flex justify-center w-screen items-center h-full">
            <div className="rounded-lg shadow-lg border min-w-[500px] min-h-[400px] p-8 mb-10">
                    <p className="text-xl text-gray-600 text-center">로그인</p>
                    <div className="flex space-x-[5%]">
                        <IdLoginBox />
                        <CertificateLogin />
                    </div>
            </div>
        </div>
    )
}

export default Login;