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
  /**
   * The backgroundColor of the label
  */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor, backgroundColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;