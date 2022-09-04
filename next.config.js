module.exports = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"],

  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  env: {
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },

}