# 📄 WhatsApp Audio Transcriber

## 🎯 Descripción

Este proyecto es una aplicación web que permite:

- Subir archivos de audio `.opus` (formato común en WhatsApp)
- Convertirlos a `.wav` (o `.mp3`, futuro)
- Descargar el archivo convertido
- (Próximamente) Transcribir el audio usando Vosk

Todo el flujo funciona localmente con Node.js y FFmpeg, sin necesidad de servicios en la nube.

## ⚙️ Tecnologías utilizadas

- **Node.js** + **Express**: servidor backend
- **Multer**: subida de archivos
- **FFmpeg**: conversión de audio
- **HTML + JS puro**: frontend sin frameworks
- **Vosk** (próximo): transcripción offline
- **Git** y **GitHub**: control de versiones

## 📁 Estructura del proyecto

wassap noice/
├── backend/
│ └── index.js
│ └── package.json
├── frontend/
│ └── index.html
├── uploads/ ← Archivos subidos temporalmente
├── converted/ ← Archivos convertidos listos para descarga
├── .gitignore
├── README.md
└── 🎯 Workflow Document conver opus-wav.docx

bash
Copiar
Editar
```)
## 🚀 Instrucciones para correr el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/mym2013/-whatsapp-audio-transcriber.git
cd whatsapp-audio-transcriber
git checkout dev
2. Instalar dependencias del backend
cd backend
npm install
3. Ejecutar el backend
bash
Copiar
Editar
node index.js
# Servidor en http://localhost:4000
4. Instalar servidor web para el frontend (una sola vez)
bash
Copiar
Editar
npm install -g serve
5. Servir el frontend
bash
Copiar
Editar
cd ../frontend
serve
# Normalmente disponible en http://localhost:3000
🧪 Cómo usar la app
Abrir http://localhost:3000 en el navegador.

Seleccionar un archivo .opus desde tu equipo.

Hacer clic en Convertir.

Descargar el archivo .wav convertido automáticamente.

📌 Notas adicionales
Si serve usa el mismo puerto que el backend, cambia el puerto del backend (index.js) a 4000 y ajustá el fetch() en index.html.

El backend y el frontend funcionan en local de forma independiente, conectados por HTTP.

Los archivos convertidos se guardan en la carpeta /converted hasta ser descargados.

Los archivos subidos van a la carpeta /uploads de forma temporal.

📚 Próximos pasos
Agregar transcripción automática offline con Vosk (Python)

Opción para convertir también a .mp3

Interfaz web con barra de progreso y mejora visual (CSS)

Página de historial de archivos convertidos

yaml
Copiar
Editar

---

📌 Cuando termines de pegarlo y guardar el archivo, hacé:

```bash
git add README.md
git commit -m "README completo corregido y documentado"
git push