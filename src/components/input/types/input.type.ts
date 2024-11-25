import { ReactNode } from "react";
import { Control, FieldValue } from "react-hook-form";

type InputType =
    | "text"
    | "password"
    | "email"
    | "url"
    | "tel"
    | "search"
    | "number"
    | "range"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "file"
    | "checkbox"
    | "radio"
    | "color"
    | "hidden"
    | "button"
    | "submit"
    | "reset";

export interface IInputProps {
    name: string;
    control: Control<FieldValue<any>, any>;
    label?: string;
    variant?: "flat" | "bordered" | "faded" | "underlined";
    color?:
        | "default"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger";
    type?: InputType;
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    value?: string;
    placeholder?: string;
    description?: string;
    isDisabled?: boolean;
    className?: string;
    labelPlacement?: "inside" | "outside" | "outside-left";
    startContent?: ReactNode;
    endContent?: ReactNode;
    isRequired?: boolean;
}
