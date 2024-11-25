import ControlledTextInput from "@/components/input/ControlledTextInput";
import formValidation from "@/modules/UI/validation/formValidation.yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@nextui-org/button";
import { useForm } from "react-hook-form";
import { TbMail, TbMoneybag } from "react-icons/tb";

export default function Ui() {
    const { control, handleSubmit: onSubmit } = useForm<{
        name: string;
        price: number;
    }>({
        resolver: yupResolver(formValidation()),
        mode: "onChange",
    });

    function handleSubmit() {
        onSubmit((data) => {
            console.log(data);
        })();
    }

    return (
        <div className="m-5">
            <form className="space-y-3">
                <div className="grid grid-cols-4 gap-4">
                    <ControlledTextInput
                        name="name"
                        control={control}
                        label="Entrer votre nom"
                        placeholder="Votre nom"
                        labelPlacement="outside"
                        isRequired
                    />
                    <ControlledTextInput
                        startContent={<TbMoneybag />}
                        name="price"
                        type="number"
                        control={control}
                        label="Entrer le prix"
                        placeholder="Prix"
                        labelPlacement="outside"
                        isRequired
                    />
                    <ControlledTextInput
                        startContent={<TbMail />}
                        label="Entrer votre email"
                        placeholder="Email"
                        name="email"
                        type="email"
                        labelPlacement="outside"
                        control={control}
                    />
                </div>
                <div>
                    <Button color="primary" onClick={handleSubmit}>
                        submit
                    </Button>
                </div>
            </form>
        </div>
    );
}
