import "./main.css";
import wine from "../img/wine.jpg";
import food from "../img/food.jpg";

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <img className="main-image" src={food} alt="Francesinha"></img>
          <img className="main-image" src={wine} alt="Porto wine"></img>
        </div>
        <div className="text-container">
          <h2 className="blog-title">Blog Article</h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            repellendus reprehenderit ducimus eos qui quo unde adipisci in, sit
            aut atque fugiat! Inventore vel nemo, aperiam sapiente voluptates
            optio quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Commodi ipsa culpa alias minima, perferendis qui soluta tenetur sint
            cupiditate! Impedit itaque corrupti repellendus vero minus. Impedit
            tenetur dignissimos cum non? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae minima amet, ipsa explicabo, earum ab
            dignissimos ullam suscipit natus, doloremque ducimus architecto!
            Necessitatibus eveniet ducimus, sed numquam vel dolorem assumenda!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            tempore expedita necessitatibus, cumque culpa libero rerum maxime!
            Nulla cumque veniam ipsam doloremque esse architecto aut harum,
            numquam rerum tempore fugiat?
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
