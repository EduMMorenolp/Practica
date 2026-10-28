# 📖 Módulo 6: Arquitectura Basada en Eventos (EventEmitter)

Gran parte de la arquitectura de Node.js (servidores HTTP, streams, sockets) está construida sobre la clase `EventEmitter` del módulo `events`.

---

## 1. El Emisor de Eventos
- `emitter.on(evento, listener)`: Suscribe una función al evento.
- `emitter.emit(evento, ...args)`: Dispara el evento pasando argumentos.
- `emitter.once(evento, listener)`: Escucha el evento solo la primera vez.
- `emitter.removeListener(evento, listener)`: Desuscribe un callback.

---

## 2. Herencia de EventEmitter
Permite a cualquier clase de negocio comportarse como emisor de eventos:
```javascript
class Descargador extends EventEmitter {
  iniciar() {
    this.emit('inicio');
  }
}
```

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_event_emitter_basico.js](./01_event_emitter_basico.js):
   - **1.1** Suscribir con `.on()` y disparar con `.emit()`.

2. [02_clases_con_eventos.js](./02_clases_con_eventos.js):
   - **2.1** Extender de `EventEmitter` en una clase de servicio.
