import { imageIcon } from "../../../../../assets"
import { Input } from "../../../components"

export const Identification = () => {

    const handleImport = () => {

    };

    return (
        <div className="flex-1 flex flex-col justify-start items-stretch gap-5">
            <h3 className="font-bold text-lg">Photo de Profil</h3>
            <p className="text-sm text-gray-600">Téléchargez une photo recto de votre Carte Étudiant. Assurez-vous que tous les détails sont clair.</p>
            <div className="p-16 flex flex-col justify-center items-center gap-4 bg-input">
                <img src={imageIcon} />
                <p>Glisser la photo de votre carte d’étudiant, ou <a onClick={handleImport} className="text-primary cursor-pointer">importer</a></p>
            </div>
        </div>
    )
}
