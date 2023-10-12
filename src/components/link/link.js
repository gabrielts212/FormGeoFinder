import Link from "next/link";

function CustomLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <text type="button">{children}</text>
    </Link>
  );
}

export default CustomLink;
