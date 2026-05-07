const fs = require('fs');
const path = require('path');

const images = {
  "hero-bg.jpg":        "https://www.figma.com/api/mcp/asset/237279a0-3b5d-4a38-bcfd-94f9a3a16191",
  "hero-beans.jpg":     "https://www.figma.com/api/mcp/asset/d20e2892-5b74-402b-b849-a38ea6d56468",
  "about-product.jpg":  "https://www.figma.com/api/mcp/asset/f8bf83bd-8a1d-499a-a881-b4c7b9f2057e",
  "about-side.jpg":     "https://www.figma.com/api/mcp/asset/edad8ab9-57de-490b-8dbe-8d9a9e6e9aac",
  "about-side2.jpg":    "https://www.figma.com/api/mcp/asset/ff4aac1e-47b9-43fd-82a7-0d1454ed4d0b",
  "product-pro.jpg":    "https://www.figma.com/api/mcp/asset/c5ac41a8-bda2-472c-9148-749408d5b69e",
  "product-starter.jpg":"https://www.figma.com/api/mcp/asset/a53c4841-2421-4cd6-b737-39c38db80a9d",
  "product-custom.jpg": "https://www.figma.com/api/mcp/asset/4f0b21dd-ee3f-4beb-a2f6-36d224e8eb4b",
  "step-circle.png":    "https://www.figma.com/api/mcp/asset/278a0462-e80e-469c-b495-72a928687068",
  "footer-bg.jpg":      "https://www.figma.com/api/mcp/asset/9c0a3e97-87f0-47fb-b6d3-9e587ccbfa9e",
  "avatar.png":         "https://www.figma.com/api/mcp/asset/6ad17a18-912b-4040-bf27-3abca12ac896",
  "gallery1.jpg":       "https://www.figma.com/api/mcp/asset/276eb19c-04ed-4b8e-b33b-6f96f8ca88a2",
  "gallery2.jpg":       "https://www.figma.com/api/mcp/asset/59a7883b-e092-412f-9d35-a4b52b4326d6",
  "gallery3.jpg":       "https://www.figma.com/api/mcp/asset/50598b2a-bb19-4e43-8d35-a15f6de83d6a",
  "gallery4.jpg":       "https://www.figma.com/api/mcp/asset/a35bfd2d-be39-473f-8a47-3a06ee7e2b43",
  "logo.png":           "https://www.figma.com/api/mcp/asset/7271fe4b-fede-44d9-a3e8-1701764b35f0",
  "icon-bolt.png":      "https://www.figma.com/api/mcp/asset/53f978ce-3f62-4d77-8755-e3b21bc9e870",
  "product-card-bg.jpg":"https://www.figma.com/api/mcp/asset/90d73eb4-096b-40bb-a6d6-a18d6084fb6c",
  "step1-icon.png":     "https://www.figma.com/api/mcp/asset/528b31d4-cc44-4f85-bc3b-28acc1f857aa",
  "step2-icon.png":     "https://www.figma.com/api/mcp/asset/8e92dc3a-84ed-47bb-b9c6-68c834c1a751",
  "step3-icon.png":     "https://www.figma.com/api/mcp/asset/c316e885-0e86-44ec-b161-f4567b365311",
  "arrow.png":          "https://www.figma.com/api/mcp/asset/ec56d5ba-ce0a-4a9a-834e-527b72201bed",
  "footer-logo.png":    "https://www.figma.com/api/mcp/asset/3dd0eff6-e3ab-411b-b92e-03d5e47c7d17",
  "icon-instagram.png": "https://www.figma.com/api/mcp/asset/b74adf91-df8a-4325-9fe0-aaaacf49e955",
  "icon-youtube.png":   "https://www.figma.com/api/mcp/asset/3481fe8e-9ae6-426a-9464-a46d171b55a4",
  "icon-facebook.png":  "https://www.figma.com/api/mcp/asset/7716ce65-db3e-4ae1-999c-2ea38002a071",
  "icon-linkedin.png":  "https://www.figma.com/api/mcp/asset/fb8be0c7-bffb-4751-a881-a408eab90b6e",
  "icon-web.png":       "https://www.figma.com/api/mcp/asset/a9998368-4e72-44bf-970d-a54964d1712b",
  "stars.png":          "https://www.figma.com/api/mcp/asset/17295605-85fd-434e-848d-c0b2a689190e",
  "icon-msg.png":       "https://www.figma.com/api/mcp/asset/9ba29b5f-bd5f-404d-aeb8-d6933b6c47b5",
  "kafeno-vector.png":  "https://www.figma.com/api/mcp/asset/9c1b50db-4b6b-4f77-b105-8ff3ae96d422",
};

async function downloadAll() {
  for (const [filename, url] of Object.entries(images)) {
    try {
      const dest = path.join('src/assets', filename);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const buf = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(buf));
      console.log('Downloaded:', filename);
    } catch (err) {
      console.error('Failed to download:', filename, err.message);
    }
  }
}

downloadAll();
