#!/usr/bin/env node

const homepage = "https://dbaileyfam.github.io/sawdustandstrings/";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchText(url) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: { "cache-control": "no-cache", pragma: "no-cache" },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url} (${res.status})`);
  }
  return res.text();
}

async function fetchOk(url) {
  const res = await fetch(url, {
    method: "HEAD",
    redirect: "follow",
    headers: { "cache-control": "no-cache", pragma: "no-cache" },
  });
  return res.ok;
}

async function verifyOnce() {
  const html = await fetchText(`${homepage}?v=${Date.now()}`);

  if (html.includes("/src/main.tsx")) {
    throw new Error(
      [
        "GitHub Pages is serving the dev index.html from main (blank/broken page).",
        "Fix: repo Settings → Pages → Source → Deploy from a branch → gh-pages → / (root).",
      ].join(" ")
    );
  }

  const jsHref = html.match(/<script[^>]+src=["']([^"']+)["']/)?.[1];
  const cssHref = html.match(/<link[^>]+href=["']([^"']+\.css)["']/)?.[1];

  if (!jsHref?.includes("/sawdustandstrings/assets/")) {
    throw new Error(`Live HTML missing built JS path. Got: ${jsHref ?? "none"}`);
  }
  if (!cssHref?.includes("/sawdustandstrings/assets/")) {
    throw new Error(`Live HTML missing built CSS path. Got: ${cssHref ?? "none"}`);
  }

  const [jsOk, cssOk] = await Promise.all([
    fetchOk(new URL(jsHref, homepage).toString()),
    fetchOk(new URL(cssHref, homepage).toString()),
  ]);

  if (!jsOk) throw new Error(`JS bundle not reachable: ${jsHref}`);
  if (!cssOk) throw new Error(`CSS bundle not reachable: ${cssHref}`);
}

async function main() {
  let lastErr = null;
  for (let i = 0; i < 8; i++) {
    try {
      await verifyOnce();
      console.log(`Pages check passed: ${homepage}`);
      return;
    } catch (err) {
      lastErr = err;
      await sleep(5000);
    }
  }
  throw lastErr ?? new Error("Pages verification failed.");
}

main().catch((err) => {
  console.error(`Pages check failed: ${err.message}`);
  process.exit(1);
});
