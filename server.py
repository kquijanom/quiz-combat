#!/usr/bin/env python3
import http.server
import socketserver
import os
from pathlib import Path

PORT = 8000
os.chdir(Path(__file__).parent / 'public')

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor corriendo en http://localhost:{PORT}")
    print(f"Abre http://localhost:{PORT}/app.html en tu navegador")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido.")
