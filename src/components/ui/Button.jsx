function Button({ children, primary, secondary, className, ...props }) {
  const baseClasses = "inline-block px-6 py-3 rounded-md font-semibold text-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variantClasses = primary
    ? "bg-primary hover:bg-primary-dark text-white focus:ring-primary"
    : secondary
      ? "bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary"
      : "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400"
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button