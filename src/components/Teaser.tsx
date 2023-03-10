import * as React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";

const Teaser = ({ blok }: { blok: any }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1>{blok.headline}</h1>
    </div>
  );
};

export default Teaser;
