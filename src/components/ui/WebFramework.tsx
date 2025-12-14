import { ArrowLeft, ArrowRight, Menu, Search } from "lucide-react"

interface WebFrameworkProps{
    color: string,
    children: React.ReactNode
}

export default function WebFramework(props: WebFrameworkProps){
    return(
        <div 
            className={`min-w-[100px] rounded-lg transition-shadow duration-700 ease-[cubic-bezier(0.45,0,0.55,1)] ${
                props.color ? "shadow-[0_0_40px_0_var(--shadow-color)]" : ""} 
            `}
            style={
                props.color
                ? ({ "--shadow-color": props.color } as React.CSSProperties)
                : undefined
            }
        >
            <div className="flex items-center gap-4 w-full bg-neutral-900 py-1 md:py-3 px-2 rounded-t-md border-b-1 border-b-neutral-700">
            
                <div className="flex gap-2">
                    <div className="p-0.5 md:p-1.5 bg-red-600/50 rounded-full"></div>
                    <div className="p-0.5 md:p-1.5 bg-yellow-600/50 rounded-full"></div>
                    <div className="p-0.5 md:p-1.5 bg-green-600/50 rounded-full"></div>
                </div>
                
                <div className="flex gap-2 items-center justify-center text-neutral-600">
                    <ArrowLeft className="size-4 md:size-6"/>
                    <ArrowRight className="size-4 md:size-6"/>
                </div>

                <div className="flex-1 bg-neutral-800 py-1 md:py-4 rounded-sm"></div>

                <div className="flex items-center justify-center text-neutral-600">
                    <Menu className="size-4 md:size-6"/>
                </div>

            </div>
            
            {props.children}
        </div>
    )
}