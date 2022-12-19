/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
