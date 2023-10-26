import Side_bottom from "./Side_bottom";
import Side_main from "./Side_main";
import "./side.css";

export default function Side() {
  return (
    <div id="side">
      <Side_main />
      <Side_bottom />
    </div>
  );
}
