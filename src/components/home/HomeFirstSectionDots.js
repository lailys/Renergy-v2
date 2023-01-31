function HomeFirstSectionDots() {
  return (
    <div className="HomeFirstSectionDotsWrapper">
      {[...Array(42)].map((a, i) => (
        <div className="Dot" key={i} />
      ))}
    </div>
  );
}

export default HomeFirstSectionDots;
