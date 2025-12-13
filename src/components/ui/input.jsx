import { Search, Mail, Calendar, Lock } from "lucide-react";

const styleGeneralInput =
  "flex items-center rounded-md px-2 py-0.5 bg-input border border-input-border text-foreground transition-shadow duration-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background";

const styleVariantInput = {
  default: "focus-within:ring-ring",
  destructive: "focus-within:ring-destructive",
  success: "focus-within:ring-success",
};
const iconMap = {
  search: Search,
  mail: Mail,
  calendar: Calendar,
  lock: Lock,
};

function Input({
  showIcon = true,
  icon = "search",
  placeholder = "",
  type = "text",
  style = "default",
  ...props
}) {
  const SelectedIcon = iconMap[icon] || Search;

  const checkStyleInput = styleVariantInput[style] || styleVariantInput.default;
  const finalStyleInput = ` ${styleGeneralInput} ${checkStyleInput}`.trim();

  return (
    <div className={finalStyleInput} tabIndex={0}>
      {showIcon && <SelectedIcon size={20} className="text-foreground" />}
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
