import KnightImage from "../images/hollow knight.png";
import { Header } from "../components/index";

interface Props {
  imgSrc: string;
  imgAlt: string;
}

const ContentLine = ({ imgSrc, imgAlt }: Props) => {
  return (
    <>
      <div className="flex flex-row gap-5 justify-around px-5 py-3">
        <img src={imgSrc} alt={imgAlt} className="w-2/5 rounded-lg" />
        <div className="flex flex-col justify-between py-2">
          <h2 className="font-bold text-4xl">Hollow Knight</h2>
          <p className="leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            excepturi perspiciatis aspernatur veritatis dignissimos delectus.
            Asperiores, eligendi dicta eveniet odit, corporis deleniti quisquam
            vero inventore ipsa ea totam porro, numquam labore quaerat iusto!
            Reprehenderit, quam. Assumenda reiciendis quis quos eaque facere.
            Debitis est fuga placeat. Sint, excepturi? Consequatur laudantium
            cumque a eius suscipit ducimus facilis quaerat. Eligendi alias ipsa
            quibusdam, fugit cumque vel recusandae facilis ducimus laboriosam
            temporibus, commodi consequuntur.
          </p>
        </div>
      </div>
    </>
  );
};

function Home() {
  return (
    <>
      <main>
        <div className="flex flex-col gap-16">
          <ContentLine imgSrc={KnightImage} imgAlt="image" />
          <ContentLine imgSrc={KnightImage} imgAlt="image" />
          <ContentLine imgSrc={KnightImage} imgAlt="image" />
        </div>
      </main>
    </>
  );
}

export default Home;
