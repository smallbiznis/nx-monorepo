import { withNx } from '@nx/next/plugins/with-nx';

const nextConfig = withNx({
  nx: {
    svgr: false
  },
  experimental: {
    typedRoutes: true
  }
});

export default nextConfig;
