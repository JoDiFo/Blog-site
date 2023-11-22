interface Props {
  title: string;
  imgSrc: string;
  body: string;
}

export default function Article({ title, imgSrc, body }: Props) {
  return (
    <>
      <div className="flex flex-row gap-2 justify-around px-5 py-3 w-[80%] mx-auto">
        <img src={imgSrc} className="w-[40%] rounded-lg" />
        <div className="flex flex-col justify-start py-2">
          <h2 className="font-bold text-3xl">{title}</h2>
          <p className="leading-loose">{body}</p>
        </div>
      </div>
    </>
  );
}
