import Link from "next/link"
export default function DropDownItem({children, linkTo=""}){
    return(
        <Link href={linkTo} >
            <a>{children}</a>
        </Link>
    )
}