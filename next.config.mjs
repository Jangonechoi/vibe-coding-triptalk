/** @type {import('next').NextConfig} */
const nextConfig = {
  // Storybook 파일들을 빌드에서 제외
  webpack: (config) => {
    config.module.rules.push({
      test: /\.stories\.(js|jsx|ts|tsx)$/,
      use: "ignore-loader",
    });
    return config;
  },
};

export default nextConfig;
