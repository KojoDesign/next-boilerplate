import type { NextConfig } from "next";

import Icons from "unplugin-icons/webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      treeShaking: true,
    },
  },
  webpack(config) {
    config.plugins.push(
      Icons({
        compiler: "jsx",
        jsx: "react",
      }),
    );

    return config;
  },
};

export default nextConfig;
