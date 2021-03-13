export default function name({ text, href }) {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );
}
