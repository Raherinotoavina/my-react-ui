import { IInputProps } from "@/components/input/types/input.type";
import { Input } from "@nextui-org/input";
import { Controller } from "react-hook-form";

export default function ControlledTextInput({ ...props }: IInputProps) {
    return (
        <Controller
            name={props.name}
            control={props.control}
            render={({ field, fieldState: { error, invalid } }) => {
                return (
                    <Input
                        {...props}
                        {...field}
                        value={field.value || ""}
                        errorMessage={error?.message}
                        isInvalid={invalid}
                    />
                );
            }}
        />
    );
}
