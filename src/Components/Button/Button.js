
import "./Button.css"

function Button({ children, handleClick }) {

    return (


        <button className="button" onClick={handleClick}>{children}</button>

    )
}

export default Button