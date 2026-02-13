const fetch = require("node-fetch");
const apiKey = process.env.PEXELS_API_KEY;

async function searchPexels(query, perPage = 5) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`;

  const response = await fetch(url, {
    headers: {
      Authorization: apiKey,
    },
  });

  if (!response.ok) {
    console.error("Error fetching from Pexels API", await response.text());
    return [];
  }

  const data = await response.json();
  const images = data.photos.map((photo) => ({
    id: photo.id,
    url: photo.url,
    src: photo.src.medium,
    photographer: photo.photographer,
  }));

  return images;
}

(async () => {
  const query = process.argv.slice(2).join(" ") || "AI Future Robots Security DevSecOps";
  const images = await searchPexels(query);
  
  console.log("Top Pexels images:");
  images.forEach((img) => {
    console.log(`Photographer: ${img.photographer}`);
    console.log(`URL: ${img.url}`);
    console.log(`Image: ${img.src}`);
    console.log("---");
  });
})();