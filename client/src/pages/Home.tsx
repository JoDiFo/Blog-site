import { useEffect, useState } from "react";
import { Footer, Article } from "../components/index";

const imagesURL = "http://localhost:8000/images/";

type ArticleData = {
  id: string;
  title: string;
  imageName: string;
  body: string;
}[];

function Home() {
  const [articlesData, setArticlesData] = useState<ArticleData>();

  const getData = () => {
    fetch("http://localhost:8000/articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticlesData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main>
        <div className="flex flex-col gap-16">
          {articlesData === undefined ? (
            <div className="text-2xl text-gray-400 text-center">
              No articles
            </div>
          ) : (
            articlesData.map((item) => (
              <Article
                key={item.id}
                title={item.title}
                imgSrc={imagesURL + item.imageName}
                body={item.body}
              />
            ))
          )}

          {/* <Article
            title="Hollow Knight"
            imgSrc={KnightImage}
            body="as;ldkfjas;dlfkjas;ldfkjas;ldfkjasdk;lfj"
          />
          <Article
            title="Hollow Knight"
            imgSrc={KnightImage}
            body="as;ldkfjas;dlfkjas;ldfkjas;ldfkjasdk;lfj"
          />
          <Article
            title="Hollow Knight"
            imgSrc={KnightImage}
            body="as;ldkfjas;dlfkjas;ldfkjas;ldfkjasdk;lfj"
          /> */}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
