export interface ButtonProps {
    text:string;
    to?:string | null;
    className?:string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}