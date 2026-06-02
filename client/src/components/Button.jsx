function Button(props) {
    return (
        <button {...props} className="bg-blue-500 py-2 px-4 hover:opacity-90 transition-all duration-300 cursor-pointer text-sm rounded-lg text-white font-semibold">{props.text}</button>
    )
}

export default Button