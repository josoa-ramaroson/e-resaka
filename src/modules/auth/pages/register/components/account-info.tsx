import { Input } from "../../../components"

export const AccountInformation = () => {
    return (
        <div className="flex-1 flex flex-col justify-start items-stretch gap-5">
            <div className="flex content-stretch justify-stretch w-full gap-5">
                <Input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    label="Adresse e-mail" />
                <Input
                    type="text"
                    id="numero"
                    placeholder="+261 xx xx xxx xx"
                    label="Numéro de téléphone" />
            </div>
            <Input
                type="password"
                id="password"
                placeholder="Entrez un mot de passe"
                label="Mot de passe" />
            <Input
                type="password"
                id="retyped-password"
                placeholder="Re-ntrez le mot de passe"
                label="Confirmation de mot de passe" />
        </div>
    )
}
