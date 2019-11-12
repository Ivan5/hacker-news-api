import axios from "axios";

export const baseUrl =
  "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty";

export const newStoriesUrl = `${baseUrl}newstories.json`;

export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(data => data);

  return result;
};
