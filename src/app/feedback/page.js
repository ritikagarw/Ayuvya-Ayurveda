/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import TraitButton from "@/components/TraitButton";
import TextArea from "@/components/TextArea";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Feedback = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [traits, setTraits] = useState([]);
  const [textValue, setTextValue] = useState("");
  const traitOptions = [
    "Product Range",
    "Health and Wellness Focus",
    "Consumer Education",
    "Sustainability and Ethical Practices",
    "Modern Marketing and Accessibility",
    "Quality Assurance",
    "Innovation and Research",
    "Trustworthy",
  ];

  const router = useRouter();

  const handleRating = (setRating, rating) => {
    setRating(rating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const feedback = {
      safetyRating,
      communicationRating,
      recommend,
      traits,
      textValue,
    };
    toast.success("Response Submitted!");
    console.log("Feedback submitted:", feedback);

    setTimeout(() => {
      window.location.reload();
    }, 1500);
    // Here you can handle the feedback submission, e.g., sending it to a server
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h1 className="heading">Leave a review</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label>Products:</label>
            <p>How much you like the products of Ayuvya Ayurveda?</p>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    cursor: "pointer",
                    color: safetyRating >= star ? "gold" : "gray",
                  }}
                  onClick={() => handleRating(setSafetyRating, star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <hr />
          <div style={{ marginBottom: "20px" }}>
            <label>Communication:</label>
            <p>How easy was to communicate with Ayuvya Ayurveda?</p>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    cursor: "pointer",
                    color: communicationRating >= star ? "gold" : "gray",
                  }}
                  onClick={() => handleRating(setCommunicationRating, star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <hr />
          <div style={{ marginBottom: "20px" }}>
            <label>Would you recommend Ayuvya Ayurveda products?</label>
            <p>Your opinion won't be posted publicly</p>
            <div className="thumbs">
              <span
                style={{
                  cursor: "pointer",
                  marginRight: "10px",
                  color: recommend === "down" ? "red" : "gray",
                }}
                onClick={() => setRecommend("down")}
              >
                <FontAwesomeIcon icon={faThumbsDown} size="2x" />
                <span>No</span>
              </span>
              <span
                style={{
                  cursor: "pointer",
                  color: recommend === "up" ? "#28a745" : "gray",
                }}
                onClick={() => setRecommend("up")}
              >
                <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                <span>Yes</span>
              </span>
            </div>
          </div>
          <hr />
          <div>
            <label>Praise</label>
            <p>What traits best describe Ayuvya Ayurveda?</p>
            <div className="traits">
              {traitOptions.map((trait) => (
                <TraitButton
                  key={trait}
                  trait={trait}
                  traits={traits}
                  setTraits={setTraits}
                />
              ))}
            </div>
          </div>
          <hr />
          <div>
            <label>Care to share more?</label>
            <p>
              How was your overall experience? What's that one thing you won't
              forget Ayuvya Ayurveda for?
            </p>
            <TextArea
              placeholder="Come on, you know the drill."
              textValue={textValue}
              setTextValue={setTextValue}
            />
          </div>
          <hr />
          <button type="submit" className="submitButton">
            Public Review
          </button>
        </form>
      </div>
    </>
  );
};

export default Feedback;
