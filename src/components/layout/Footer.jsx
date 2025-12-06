import { AiFillThunderbolt } from "react-icons/ai";


export default function Footer() {
    return (
        <footer className="py-8 px-4 text-center text-sm text-gray-500 flex flex-col-reverse justify-center items-center">
            <div>
                <p className="flex items-center justify-center gap-2">
                    © {new Date().getFullYear()} Asif Mahmud

                    <AiFillThunderbolt className="w-4 h-4" />
                </p>
            </div>

            <div className="w-20 h-20">
                <img src="/images/as-if-sig.png" alt="" />
            </div>
        </footer>
    );
}
