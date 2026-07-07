$ErrorActionPreference = "Stop"

$root = (Resolve-Path ".").Path
$publicDir = Join-Path $root "public"
$inbox = Join-Path $publicDir "assets\_inbox"
$dataDir = Join-Path $publicDir "data"
$out = Join-Path $dataDir "cardManifest.json"

New-Item -ItemType Directory -Force $inbox, $dataDir | Out-Null

$extensions = @(".png", ".jpg", ".jpeg", ".webp", ".gif", ".mp4", ".webm", ".mov")

$files = Get-ChildItem -Path $inbox -Recurse -File |
  Where-Object { $extensions -contains $_.Extension.ToLowerInvariant() } |
  Sort-Object FullName

$cards = foreach ($file in $files) {
  $relative = $file.FullName.Substring($publicDir.Length).TrimStart("\", "/")
  $url = "/" + ($relative -replace "\\", "/")
  $name = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
  $safeId = ($name.ToLowerInvariant() -replace "[^a-z0-9]+", "-").Trim("-")

  [pscustomobject]@{
    id = $safeId
    title = $name
    type = if (@(".mp4", ".webm", ".mov") -contains $file.Extension.ToLowerInvariant()) { "video" } else { "image" }
    src = $url
    filename = $file.Name
    bytes = $file.Length
    modified = $file.LastWriteTimeUtc.ToString("o")
    batch = Split-Path $file.DirectoryName -Leaf
    tags = @("inbox", "pennycore", "spinner")
  }
}

$manifest = [pscustomobject]@{
  schema = "pennycore.cardManifest.v1"
  generatedAt = (Get-Date).ToUniversalTime().ToString("o")
  source = "/assets/_inbox"
  count = $cards.Count
  cards = @($cards)
}

$manifest | ConvertTo-Json -Depth 8 | Set-Content -Path $out -Encoding UTF8

Write-Host "Built manifest with $($cards.Count) assets:"
Write-Host $out
