import Header from "../components/Header";
import Link from "next/link";

const Home = ({ data }) => {
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      {data.map((item) => (
        <>
          <Link href={`/details/${item.id}`} passHref>
            <a>
              <h1>{item.id}</h1>
              <p>{item.title}</p>
            </a>
          </Link>
        </>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;
