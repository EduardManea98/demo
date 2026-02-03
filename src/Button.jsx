
const Button = ({ text, style, onClick, ref }) => {
  return (
    <div
      ref={ref}
      style={{
        padding: '12px 24px',
        fontSize: 32,
        borderRadius: 8,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffff',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

export default Button