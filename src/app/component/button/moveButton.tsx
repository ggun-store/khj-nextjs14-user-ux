
export const MoveButton = ({ children, click, style, select }: IButton) => {
    return (
        <button key={1}
        onClick={click}
        type="button"
        className={`min-w-[100px] min-h-[30px] text-white bg-pebble-200 hover:bg-pebble-300 focus:outline-none font-medium rounded-full text-sm text-center ${style} ${ select ? 'bg-pebble-400' : ''}`}>
               {children}
        </button>
    )
}
export const GrayButton = ({ children, click, style,select }: IButton) => {
    return (
        <button key={1}
        onClick={click}
        type="button" 
        className={`text-gray-500 border bg-white shadow-lg rounded-lg hover:hover:bg-slate-200 focus:outline-none font-medium text-sm text-center w-full h-full ${style} ${ select ? 'bg-pebble-400' : ''}`}>
               {children}
        </button>
    )
}