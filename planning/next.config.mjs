import {
  createVanillaExtractPlugin
} from '@vanilla-extract/next-plugin';

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  const withVanillaExtract = createVanillaExtractPlugin();
  return withVanillaExtract(config);
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
});
