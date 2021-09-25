import Link from "next/link";

export default function IndexPage(props) {
  const { user } = props;
  return (
    <div>
      <div>Hello World. </div>
      <div>{JSON.stringify(user)}</div>
      <Link href="/about">About</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const url = getHost(req) + "/api/user";
  const user = await fetch(url).then((res) => res.json());
  return {
    props: {
      user
    }
  };
}

function getHost(req) {
  const protocol = process.env.NODE_ENV === "production" ? "https:" : "http:";
  const host = protocol + "//" + req.headers.host;
  return host;
}
