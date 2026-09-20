#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$DIR/downloaded"
mkdir -p "$OUT"

curl -L --fail --retry 2 -o "$OUT/psychologist-reference-01.png" "https://mir-s3-cdn-cf.behance.net/project_modules/source/5fb7d5190809487.65c11c318b9f5.png"
curl -L --fail --retry 2 -o "$OUT/psychologist-reference-02.png" "https://mir-s3-cdn-cf.behance.net/project_modules/source/ba0571190809487.65c11c3188aab.png"
curl -L --fail --retry 2 -o "$OUT/psychologist-reference-03.png" "https://mir-s3-cdn-cf.behance.net/project_modules/source/3b1489190809487.65c11c318abb6.png"
curl -L --fail --retry 2 -o "$OUT/psychologist-reference-04.png" "https://mir-s3-cdn-cf.behance.net/project_modules/source/cfd332190809487.65c11c31896d1.png"
curl -L --fail --retry 2 -o "$OUT/psychologist-reference-05.png" "https://mir-s3-cdn-cf.behance.net/project_modules/source/671ae7190809487.65c11c3187e63.png"

echo "Done. Files saved to $OUT"