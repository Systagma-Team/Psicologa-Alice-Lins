$ErrorActionPreference = "Stop"
$OutDir = Join-Path $PSScriptRoot "downloaded"
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$assets = @(
  @{ Name = "psychologist-reference-01.png"; Url = "https://mir-s3-cdn-cf.behance.net/project_modules/source/5fb7d5190809487.65c11c318b9f5.png" },
  @{ Name = "psychologist-reference-02.png"; Url = "https://mir-s3-cdn-cf.behance.net/project_modules/source/ba0571190809487.65c11c3188aab.png" },
  @{ Name = "psychologist-reference-03.png"; Url = "https://mir-s3-cdn-cf.behance.net/project_modules/source/3b1489190809487.65c11c318abb6.png" },
  @{ Name = "psychologist-reference-04.png"; Url = "https://mir-s3-cdn-cf.behance.net/project_modules/source/cfd332190809487.65c11c31896d1.png" },
  @{ Name = "psychologist-reference-05.png"; Url = "https://mir-s3-cdn-cf.behance.net/project_modules/source/671ae7190809487.65c11c3187e63.png" }
)

foreach ($asset in $assets) {
  $dest = Join-Path $OutDir $asset.Name
  Write-Host "Downloading $($asset.Name)..."
  Invoke-WebRequest -Uri $asset.Url -OutFile $dest -UseBasicParsing
}

Write-Host "Done. Files saved to $OutDir"