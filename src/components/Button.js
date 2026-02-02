const Button =({btnText,bgColor,textColor})=>{
    return(
        <>
       <button className={`${bgColor} ${textColor} text-center py-[14px] px-[22px] rounded-[6px] font-medium  gap-[10px] cursor-pointer`}>
        {btnText} <span>→</span>
       </button>
        </>
    )
}

export default Button;