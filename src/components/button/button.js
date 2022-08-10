import '../../index.css'

function Button ({onClick}) {
        return (
            <button className="Button" type="button" onClick={onClick}>Donwload more</button>
        )
}

export default Button