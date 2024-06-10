import { ChangeEvent, useState } from "react";
import { Input } from "../../../components"

export const PersonalInformation = () => {

    const [genre, setGenre] = useState<string>('homme');

    const handleSexChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGenre(event.target.value);
        console.log(event.target.value);
        
    };

    return (
        <div className="flex-1 flex flex-col justify-start items-stretch gap-5">
            <Input
                type="text"
                id="nom"
                placeholder="Votre nom ici"
                label="Nom" />
            <h3 className="font-bold">Genre  </h3>
            <div className="px-6 flex flex-1 bg-input max-h-10 items-center gap-3 rounded-xl">
                <label htmlFor="homme">
                    <input
                        type="radio"
                        value="homme"
                        checked={genre === 'homme'}
                        onChange={handleSexChange}
                        id="homme"
                        className="mr-4"
                    />
                    Homme
                </label>
                <label htmlFor="femme">
                    <input
                        type="radio"
                        value="femme"
                        checked={genre === 'femme'}
                        onChange={handleSexChange}
                        id="femme"
                        className="mr-4"
                    />
                    Female
                </label>
            </div>
        </div>
    )
}
