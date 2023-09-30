// type alias

type ButtonProps = {
    text: string,
    question?: string
};

function Button({text, question}:ButtonProps) {
    return (
        <>
            <p>
                {question}
            </p>
            <button>
                {text}
            </button>
        </>
    )
}

export default Button;