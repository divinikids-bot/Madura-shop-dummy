import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../layout/layout.module";
import Loading from "../loading/loading.module";

export default function Login() {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const router = useRouter()

    return(
        <Layout>

            <div className='flex flex-col items-center mt-10 w-full h-full'>
                <h2 className='text-2xl font bold text-amber-500'>Madura Shop</h2>
                <form action="">
                    <input type="text" className='border p-2 my-2' />
                    <input type="password" className='border p2 my-2'/>
                    <button type="submit" className='p-3 bg-amber-600 hover: bg-amber-700 rounded-md font-semibold'>Login</button>
                </form>
            </div>
        </Layout>
    )   
}