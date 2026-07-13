$PublicPath = Join-Path $PSScriptRoot "public"
$Port = 8000

# Cambiar a directorio public
Push-Location $PublicPath

# Crear un listener
$Listener = New-Object System.Net.HttpListener
$Listener.Prefixes.Add("http://localhost:$Port/")
$Listener.Start()

Write-Host "Servidor ejecutándose en http://localhost:$Port"
Write-Host "Abre http://localhost:$Port/app.html en tu navegador"
Write-Host "Presiona Ctrl+C para detener"

# Loop principal
while ($Listener.IsListening) {
    $Context = $Listener.GetContext()
    $Request = $Context.Request
    $Response = $Context.Response

    $LocalPath = $Request.Url.LocalPath
    if ($LocalPath -eq "/") {
        $LocalPath = "/app.html"
    }

    $FilePath = Join-Path $PublicPath $LocalPath.TrimStart("/")

    if (Test-Path $FilePath -PathType Leaf) {
        $Content = [System.IO.File]::ReadAllBytes($FilePath)
        $Response.ContentLength64 = $Content.Length

        # Set content type
        if ($FilePath.EndsWith(".html")) {
            $Response.ContentType = "text/html"
        } elseif ($FilePath.EndsWith(".css")) {
            $Response.ContentType = "text/css"
        } elseif ($FilePath.EndsWith(".js")) {
            $Response.ContentType = "application/javascript"
        }

        $Response.OutputStream.Write($Content, 0, $Content.Length)
    } else {
        $Response.StatusCode = 404
        $Response.OutputStream.Close()
    }

    $Response.Close()
}

$Listener.Stop()
Pop-Location
