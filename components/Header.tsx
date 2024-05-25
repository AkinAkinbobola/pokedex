import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <Link href={"/"}>
                <Image
                    src={"/icons/Pokedex-logo.svg"}
                    alt={"Pokedex Logo"}
                    width={296}
                    height={44}/>
            </Link>
        </header>
    );
};

export default Header;