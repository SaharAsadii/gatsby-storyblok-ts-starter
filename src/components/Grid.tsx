import React from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

const Grid = ({ blok }: { blok: any }) => (
  <ul {...storyblokEditable(blok)} key={blok._uid}>
    {blok.columns.map((blok: any) => (
      <li key={blok._uid}>
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </ul>
);

export default Grid;
