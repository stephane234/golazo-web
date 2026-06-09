const fs = require("fs");
const path = require("path");

const apiKey = process.env.FOOTBALL_API_KEY || "";
const indexPath = path.join(__dirname, "..", "index.html");
const html = fs.readFileSync(indexPath, "utf8");
const metaPattern = /(<meta\s+name="api-key"\s+content=")([^"]*)(")/i;

if (!metaPattern.test(html)) {
  console.error('Could not find <meta name="api-key"> in index.html');
  process.exit(1);
}

fs.writeFileSync(indexPath, html.replace(metaPattern, "$1" + apiKey + "$3"));
