import { Terminal } from "lucide-react";
export default function Title(){
    return (
        <div className="relative z-20 flex gap-1 flex-row items-center text-lg w-fit font-medium">
            <Terminal className="text-emerald-800 p-1 w-8 h-8  bg-emerald-400 rounded-lg"/>
           <p className={"text-4xl"}> codeGrade</p>
        </div>
    );
}