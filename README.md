# 🐍 Serpiente por turnos

Juego clásico de **Snake** desarrollado con **React + TypeScript**.

La serpiente se mueve utilizando las flechas del teclado y debe recoger la comida para crecer. El tablero tiene un tamaño de **8 × 8**.

## 🎮 Cómo jugar

1. Abre el juego.
2. **Haz clic dentro del área del juego (`div`) para darle foco.**
3. Utiliza las teclas de dirección del teclado:

   * ⬆️ `ArrowUp` — Mover hacia arriba
   * ⬇️ `ArrowDown` — Mover hacia abajo
   * ⬅️ `ArrowLeft` — Mover hacia la izquierda
   * ➡️ `ArrowRight` — Mover hacia la derecha
4. Come la comida para hacer crecer la serpiente.

> ⚠️ **Importante:** debes hacer clic primero dentro del área del juego para que el `div` tenga el foco. Si no tiene el foco, las teclas de dirección no controlarán la serpiente.

## 💥 Reglas

* El tablero tiene un tamaño de **8 × 8**.
* La serpiente comienza con 3 partes.
* La cabeza tiene un estilo diferente al cuerpo.
* La comida aparece dentro del tablero.
* Al comer la comida, la serpiente aumenta de tamaño.
* La nueva comida aparece en una posición aleatoria.
* Si la serpiente sale del tablero, se reinicia.
* Si la serpiente choca con su propio cuerpo, se reinicia.

## 🛠️ Tecnologías

* React
* TypeScript
* CSS
* Vite

## 📦 Instalación local

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/jaykeyl/serpiente-por-turnos.git
cd serpiente-por-turno
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Luego abre en el navegador la dirección que indique Vite, normalmente:

```text
http://localhost:5173
```

## 🌐 Página publicada

Puedes probar el juego directamente desde la página publicada:

👉 **[Jugar Snake](https://jaykeyl.github.io/serpiente-por-turnos/)**

## Realizado por jaykeyl.
