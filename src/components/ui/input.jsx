import { Search, Mail, Calendar, Lock } from "lucide-react";

function Input({
  showIcon = true,
  Icon = Search,
  placeholder = "",
  type = "text",
  ...props
}) {
  return (
    <div
      className="flex items-center px-3 gap-2 rounded-md bg-input border border-input-border text-foreground transition-shadow duration-200 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background"
      tabIndex={0}>
      {showIcon && <Icon size={20} className="text-foreground" />}
      <input
        className="w-full px-2 py-1 rounded bg-transparent outline-none"
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </div>
  );
}

export default Input;
