import "../../css/components/home-filas.css";

export default function HomeFilas({ title, body, image, reverse = false }) {
  return (
    <div className={`home-row ${reverse ? "reverse" : ""}`}>
      {reverse && <div className="home-image" style={{ backgroundImage: `url('${image}')` }}></div>}

      <div className="home-block">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      {!reverse && <div className="home-image" style={{ backgroundImage: `url('${image}')` }}></div>}
    </div>
  );
}
