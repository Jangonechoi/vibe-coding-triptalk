/** @type {import('next').NextConfig} */
const nextConfig = {
  // Storybook 파일들을 빌드에서 제외
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  webpack: (config, { isServer }) => {
    // Storybook 파일들을 완전히 무시
    config.module.rules.push({
      test: /\.stories\.(js|jsx|ts|tsx)$/,
      use: "ignore-loader",
    });

    // Storybook 파일들을 resolve에서도 제외
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    return config;
  },
};

export default nextConfig;
