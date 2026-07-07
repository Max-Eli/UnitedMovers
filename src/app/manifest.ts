import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "United Movers",
    short_name: "United Movers",
    description:
      "South Florida moving company in Sunny Isles Beach. Local, long distance, condo, office, packing, and storage.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F3EE",
    theme_color: "#0B1E33",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
