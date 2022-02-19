import Header from "../../components/Header";

const DetailsPage = ({ data }) => {
  return (
    <>
      <Header />
      <h1>DetailsPage</h1>
      <p>{data.body}</p>
    </>
  );
};

export const getStaticPaths = async () => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await result.json();

  const paths = data.map((elem) => {
    return {
      params: {
        detailId: elem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.detailId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default DetailsPage;
