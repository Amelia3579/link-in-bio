const Buttons = () => {
  const link = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="estilosButtons">
      <button
        className="buttonLink"
        onClick={() => link("https://www.linkedin.com/in/amelia-gallegos")}
      >
        Mi Linkedin
      </button>

      <button
        onClick={() => link("https://www.linkedin.com/in/amelia-gallegos")}
      >
        Trabajos Experimentales
      </button>

      <button onClick={() => link("https://mail.yahoo.com/")}>
        Enviame un email
      </button>
      
      <button onClick={() => link("https://holajuniors.com/")}>
        HolaJuniors.com
      </button>
    </div>
  );
};

export default Buttons;
