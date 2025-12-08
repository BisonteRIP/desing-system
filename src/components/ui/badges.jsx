const styleBadgesVariant = {
  default:
    "inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variant: {
    defautl:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "border border-input bg-background text-foreground",
  },
  size: {
    extraSmall: "text-xs px-3 py-1",
    small: "text-sm px-3.5 py-1.5",
    large: "px-4 py-2",
  },
};

function Badges({
  size = "extraSmall",
  variant = "default",
  children,
  ...props
}) {
  const checkVariantStyle =
    styleBadgesVariant.variant[variant] || styleBadgesVariant.variant.defautl;
  const checkSizeStyle =
    styleBadgesVariant.size[size] || styleBadgesVariant.size.extraSmall;

  const finalClass =
    ` ${styleBadgesVariant.default} ${checkSizeStyle} ${checkVariantStyle} `.trim();

  return (
    <div className={finalClass} {...props}>
      {children}
    </div>
  );
}

export default Badges;
