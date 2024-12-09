import { socialMediaIcons } from "@/constants";
const Footer = () => {
  return (
    <footer className="xs:flex-col lg:flex lg:justify-between lg:items-start px-8 pt-6 pb-12">
      <div className="xs:flex-col lg:flex lg:items-start lg:justify-between lg:w-8/12">
        <img
          src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649148/nav-logo_mzbjy5.png"
          alt="footer-logo"
          className="w-[135px] h-[70px] cursor-pointer mb-8"
        />
        <ul className="mb-6">
          <h4 className="font-semibold text-sm mb-2">INFOS PRATIQUES</h4>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            À propos
          </li>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            Livraisons & Reprises
          </li>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            Mode d’emploi
          </li>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            F.A.Q
          </li>
        </ul>
        <ul className="mb-6">
          <h4 className="font-semibold text-sm mb-2">LÉGAL</h4>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            Mentions légales
          </li>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            CGU
          </li>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            CGV
          </li>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            Politique de confidentialité
          </li>
        </ul>
        <ul className="mb-6">
          <h4 className="font-semibold text-sm mb-2">MON COMPTE</h4>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            Accéder à mon compte
          </li>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            Ma liste d’envie
          </li>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            Créer un compte
          </li>
          <li className="text-[16px] text-[#393939] mb-2 cursor-pointer">
            Mot de passe oublié
          </li>
        </ul>
      </div>
      <div className="">
        <h3 className="font-semibold text-sm mb-3">NOUS SUIVRE</h3>
        <ul className="flex gap-x-2 ">
          {socialMediaIcons.map((eachIcon) => (
            <li
              key={eachIcon.id}
              className=" border-[0.5px] border-[#39393959] p-2 rounded-md cursor-pointer"
            >
              <img
                src={eachIcon.iconUrl}
                alt={eachIcon.socialMedia}
                className="w-[24px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
