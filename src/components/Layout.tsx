import * as React from "react";
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok";
import Teaser from "./Teaser";
import configuration from "../../gatsby-config";
import Grid from "./Grid";
import Feature from "./Feature";

type OptionsType = {
  resolve: string;
  options: {
    accessToken: string;
  };
};

const sbConfig = configuration?.plugins?.find(
  (item: any) => item.resolve === "gatsby-source-storyblok"
) as OptionsType;

storyblokInit({
  accessToken: sbConfig?.options.accessToken,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  },
});

const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
