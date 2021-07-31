import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(term =>
      (<Entry
      key={term.id}
      emoji={term.emoji}
      name={term.name}
      meaning={term.meaning}
      />)
      )}
    </dl>
    </div>
  );
}

export default App;
