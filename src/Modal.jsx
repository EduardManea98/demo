
const Modal = ({ children, onClose, open }) => {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
      onClick={onClose}
    >
      <div
        style={{
          borderRadius: 8,
          maxWidth: 500,
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal