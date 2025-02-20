function BeginButton({ Begin, Able }) {
  return Able ? (
    <img
      src="/images/BeginPIC.jpg"
      onClick={() => {
        console.log("已按下開始");
        Begin();
      }}
      style={{
        width: "150px",
        height: "50px",
        cursor: "pointer",
      }}
    />
  ) : (
    <img
      src="/images/BeginPIC.jpg"
      style={{
        width: "150px",
        height: "50px",
        filter: "grayscale(100%)",
      }}
    />
  );
}

export default BeginButton;
