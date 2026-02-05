import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["thread-stream", "why-is-node-running"],
};

export default withNextIntl(nextConfig);
