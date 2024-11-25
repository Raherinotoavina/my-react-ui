import * as Yup from "yup";

export default function formValidation() {
    return Yup.object().shape({
        name: Yup.string().required("Le nom est requis"),
        price: Yup.number()
            .typeError("Le prix doit etre un nombre")
            .required("Le prix est requis"),
        email: Yup.string().email("Entrer un mail valide"),
    });
}
