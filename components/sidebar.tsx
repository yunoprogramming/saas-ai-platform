"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const Sidebar = () => {
    return ( 
        <div className="space-y-4 py-4 flex-col h-full bg-[#111827] text-white">
            <div>
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill alt="logo" src="/logo.svg"/>
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        Alchemist
                    </h1>
                </Link>
            </div>
        </div>
     );
}
 
export default Sidebar;