const site = process.env.SITE_URL;
const outputPathPart = process.env.OUTPUT_PATH_PART;

if (!site || !outputPathPart) {
  throw new Error(
    "SITE_URL or OUTPUT_PATH_PART environment variables are not provided."
  );
}

const config = {
  site: site,
  outputPath: `public/unlighthouse/${outputPathPart}`,
  routerPrefix: "/unlighthouse",
  cache: true,
  debug: true,
};

export default config;
