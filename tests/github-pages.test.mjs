import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

test("GitHub Pages package uses docs as the publish root", () => {
  assert.equal(existsSync("docs/index.html"), true);
  assert.equal(existsSync("docs/.nojekyll"), true);
  assert.equal(existsSync("docs/basic-electricity/index.html"), true);
  assert.equal(existsSync("docs/electronics/index.html"), true);
});

test("subject pages return to GitHub Pages relative homepage", () => {
  const basicHtml = readFileSync("docs/basic-electricity/index.html", "utf8");
  const electronicsHtml = readFileSync("docs/electronics/index.html", "utf8");

  for (const html of [basicHtml, electronicsHtml]) {
    assert.match(html, /id="homeLink"/);
    assert.match(html, /href="\.\.\/"/);
    assert.doesNotMatch(html, /basic-electricity-tutor\.web\.app/);
  }
});

test("GitHub Pages static app does not call Firebase Functions by default", () => {
  const basicApp = readFileSync("docs/basic-electricity/src/app-classic.js", "utf8");
  const electronicsApp = readFileSync("docs/electronics/src/app-classic.js", "utf8");
  const config = readFileSync("docs/config.js", "utf8");

  for (const source of [basicApp, electronicsApp]) {
    assert.match(source, /HANDWRITING_ANALYSIS_ENDPOINT/);
    assert.doesNotMatch(source, /return window\.location\?\.protocol\?\.startsWith\("http"\) \? "\/api\/analyze-handwriting" : ""/);
  }

  assert.match(config, /interactive-tutor-handwriting\.bee6389\.workers\.dev/);
});

test("subject pages load shared handwriting endpoint config", () => {
  const basicHtml = readFileSync("docs/basic-electricity/index.html", "utf8");
  const electronicsHtml = readFileSync("docs/electronics/index.html", "utf8");

  for (const html of [basicHtml, electronicsHtml]) {
    assert.match(html, /<script src="\.\.\/config\.js"><\/script>/);
  }
});

test("GitHub Pages homepage keeps relative subject links", () => {
  const html = readFileSync("docs/index.html", "utf8");

  assert.match(html, /href="\.\/basic-electricity\/\?v=home-button-20260708c"/);
  assert.match(html, /href="\.\/electronics\/\?v=home-button-20260708c"/);
  assert.match(html, /href="\.\/math\/\?v=home-button-20260708c"/);
});
