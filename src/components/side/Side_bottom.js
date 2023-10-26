import add from "./images/add.svg";

export default function Side_bottom() {
  return (
    <div id="Side_bottom">
      <div id="Side_bottom_circle">
        <img src={add} alt="add" id="add" />
      </div>
      <p>Tap “+” to add friends</p>
    </div>
  );
}
