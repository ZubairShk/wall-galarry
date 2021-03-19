import React, { useState, useEffect } from "react";
import Loading from "./loading";
import Galary from "./galary";
import Clicked from "./clicked";

function App() {
  const [loading, setLoading] = useState(true);
  const [pictures, setPictures] = useState([]);
  const [selected, setSelected] = useState(null);

  const url = " http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0";

  const fetchApi = async () => {
    const response = await fetch(url);
    const pictures = await response.json();
    setLoading(false);
    setPictures(pictures);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <>
      <Galary pictures={pictures} setSelected={setSelected} />
      {selected && <Clicked selected={selected} setSelected={setSelected} />}
    </>
  );
}

export default App;
