const Button =({btnText,bgColor,textColor, active=true})=>{
    return(
        <>
       <button className={`${bgColor} ${textColor} text-center py-[14px] rounded-[6px] font-medium  gap-[10px] cursor-pointer inline-flex items-center justify-center
        gap-[10px]
        px-[22px]
        rounded-[6px]
        text-sm 
        transition-all duration-300

        ${bgColor}
        ${textColor}

        ${
          active
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }

        md:group-hover:opacity-100
        md:group-hover:pointer-events-auto`}>
        {btnText} <span>→</span>
       </button>
        </>
    )
}

export default Button;