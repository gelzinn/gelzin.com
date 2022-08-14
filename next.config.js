/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  root: true,
  images: {
    disableStaticImages: true,
  },
  env: {
    node: true,
    YT_PLAYLIST_ITEMS_API:
      "https://www.googleapis.com/youtube/v3/playlistItems",
    YT_API_KEY: "AIzaSyB-FmgrlTJvlXpYvodv4IL8BlilJNuvWHc",
    YT_PLAYLIST_ID: "PLCiyjeRATa4EwTgLmmempup_eVmfS2IfU",
    API_FLASH_KEY: "4bea36c098e64604b9cc8c6e60d2c4f8",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/warnings",
  ],
  rules: {
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"]],
        "newlines-between": "always",
      },
    ],
  },
};
