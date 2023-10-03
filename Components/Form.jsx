import React, { useState, useEffect } from "react";

export default function () {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function getMeme() {
    let random = Math.floor(Math.random() * allMemeImages.length);
    let url = allMemeImages[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function handleEnterPressKey(e) {
    if (e.key === "Enter") {
      setMeme((prevMeme) => ({
        ...prevMeme,
        topText: "",
        bottomText: "",
      }));
    }
  }

  return (
    <div className="app">
      <div action="" className="form">
        <input
          type="text"
          placeholder="Top-text"
          onChange={handleChange}
          onKeyPress={handleEnterPressKey}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom-text"
          onChange={handleChange}
          onKeyPress={handleEnterPressKey}
          name="bottomText"
          value={meme.bottomText}
        />
        <button onClick={getMeme}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
