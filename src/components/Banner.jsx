import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <video
        className="banner-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source
          src="https://media.rolex.com/video/upload/c_limit,w_2440/f_auto:video/q_auto:eco/v1/rolexcom/new-watches/2024/hub-watches/videos/cover/rolex-watches-collection-hub-cover-autoplay"
          type="video/mp4"
        />
        Tu navegador no soporta videos HTML5.
      </video>
      <div className="banner-content">
        <h1 className="banner-title">Coder Clock</h1>
        <img src="./src/assets/rolex.png" alt="Reloj" className="banner-image" />
      </div>
    </div>
  );
};

export default Banner;
