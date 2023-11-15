  const css = "rounded-[28px]  inline-block cursor-pointer text-[#ffffff] font-[Arial] font-bold px-7 py-4 no-underline [text-shadow:0px_1px_0px_#2f6627] hover:bg-[#e4eae3] hover:text-black"

interface Property {
  content:string, // Start / stop /reset
  color:string, // color 
  handleClick: () => void 
}
const Button = (props:Property) => {
  return (
    <button className={`${css} ${props.color}`} onClick={props.handleClick}>
        {props.content}
    </button>
  )
}

export default Button