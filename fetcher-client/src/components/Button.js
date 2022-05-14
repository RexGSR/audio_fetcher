import  PropTypes from  'prop-types'  

const Button = ({ text, functionHandler }) => {
    return (
        <button className="btn" onClick={functionHandler}>
            {text}
        </button>
    )
}
    
Button.propTypes = {
    text: PropTypes.string,
    functionHandler:PropTypes.func
}

export default Button      