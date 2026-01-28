import './Button.css'

function Button ({btnText, href}) {
   return (
      <a href={href || '/start'} rel="nofollow" className="btn btn_2">{btnText}</a>
   )
}

export default Button;