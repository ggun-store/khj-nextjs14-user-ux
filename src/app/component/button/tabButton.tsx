export function TabButton ( {children, click, style,select }: IButton){
    return(
        <button className={`border rounded-t-lg border-b-0 forcus:text-pebble-500 ${style} ${ select ? 'bg-slate-100' : ''}`} onClick={click}>{children}</button>
    )
}

export function BottomLlinButton ( {children, click, style, select }: IButton){
    return(
        <button className={`w-full h-full border-b-[2px] border-pebble-300 border-r-0 rounded-t-lg ${style} ${ select ? 'bg-pebble-400' : ''}`} onClick={click}>{children}</button>
    )
}