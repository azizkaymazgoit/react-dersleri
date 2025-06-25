function Title({ children }) {
  return <h1>{children}</h1>;
}

function Hero() {
  console.log("merhab");
  return (
    <>
      {/* <Title text={"Burası Başlık"} /> */}
      <Title>asdasd</Title>
      <section>Burası Hero section olacak</section>
    </>
  );
}

export default Hero;
