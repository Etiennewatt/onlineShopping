import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
      resolveAlias: {
        underscore: 'lodash',
      },
      resolveExtensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);