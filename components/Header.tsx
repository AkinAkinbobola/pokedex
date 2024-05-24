import Image from "next/image";

const Header = () => {
    return (
        <header>
            <Image
                src={"/icons/Pokedex-logo.svg"}
                alt={"Pokedex Logo"}
                width={296}
                height={44}/>
        </header>
    );
};

export default Header;