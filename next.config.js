const nextConfig = {
  output: 'export',
  srcDir: 'src',
  images: { unoptimized: true },
  basePath: '/qaziabdulrazamemorialclinic',
  assetPrefix: '/qaziabdulrazamemorialclinic/',
  eslint: { ignoreDuringBuilds: true },
  typescript: {
    // 💥 ye line error ignore karegi build ke dauran
    ignoreBuildErrors: true,
    tsconfigPath: './tsconfig.prod.json',
  },
};

export default nextConfig;