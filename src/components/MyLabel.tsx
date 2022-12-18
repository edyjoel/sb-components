import "./MyLabel.css";

export interface MyLabelProps {
  /**
   * The label to display
   */
  label: string;
  /**
   * The size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Whether to display the label in all caps
   */
  allCaps?: boolean;
  /**
   * The color of the label
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * The color of the label
  */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
