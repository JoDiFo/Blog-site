interface Props {
  title: string;
  imgSrc: string;
  body: string;
}

export default function Article({ title, imgSrc, body }: Props) {
  return (
    <>
      <div className="flex flex-row gap-5 justify-around px-5 py-3">
        <img src={imgSrc} className="w-2/5 rounded-lg" />
        <div className="flex flex-col justify-between py-2">
          <h2 className="font-bold text-4xl">{title}</h2>
          <p className="leading-loose">{body}</p>
        </div>
      </div>
    </>
  );
}
