import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";
import "./UploadPage.scss";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/videos", { title, description })
      .then(() => {
        alert("Video uploaded successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error(
          "Failed to upload video: ",
          error.response?.data || error.message
        );
        alert("Failed to upload video.");
      });
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form" onSubmit={handleSubmit}>
        <div className="upload__form-left">
          <p className="upload__label">VIDEO THUMBNAIL</p>
          <img
            className="upload__thumbnail"
            src={thumbnail}
            alt="Upload preview"
          />
        </div>
        <div className="upload__form-right">
          <label className="upload__label" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="upload__input"
            name="title"
            placeholder="Add a title to your video"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label className="upload__label" htmlFor="description">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload__textarea"
            name="description"
            placeholder="Add a description of your video"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="upload__action">
          <button type="submit" className="upload__submit">
            <img
              className="search__submit-icon"
              src={uploadIcon}
              alt="upload icon"
            />{" "}
            PUBLISH
          </button>
          <Link to="/" className="upload__cancel">
            CANCEL
          </Link>
        </div>
      </form>
    </section>
  );
};

export default UploadPage;
