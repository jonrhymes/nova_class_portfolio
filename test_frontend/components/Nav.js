import Link from "next/link";

const Nav = () => {
    return (
        <>
        <nav>
        <Link href={'/'}><a>Home</a></Link>
        <br />
        <Link href={'/about'}><a>About</a></Link>
        <br />
        <Link href={'/contact'}><a>Contact</a></Link>
        </nav>
        </>
    )

};

export default Nav;