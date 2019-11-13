import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";

const Story = ({ storyId }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <p>I'm a story {storyId}</p>
    </div>
  );
};

export default Story;
