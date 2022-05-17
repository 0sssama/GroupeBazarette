function NameSection({ collection, reference, title }) {
  return (
    <div className="ProductPage-main-name-title w-full flex flex-col items-start row-gap-s">
      <p className="text">
        {collection} - {reference}
      </p>
      <h1 className="title primary">{title}</h1>
    </div>
  );
}

export default NameSection;
