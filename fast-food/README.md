# Fast Food

Aplicacion web del menu y panel de administracion, preparada para ejecutarse con Laragon.

## Abrir con Laragon

1. Copia o deja esta carpeta dentro de `C:\laragon\www\`.
2. Abre Laragon y pulsa **Start All** para iniciar Apache.
3. Pulsa **Reload** y abre una de estas direcciones:
   - `http://fast-food.test` si Laragon creo el host automatico.
   - `http://localhost/fast-food/` si el host automatico esta desactivado.
4. El menu publico se abre en la pagina principal. El panel privado esta en `/admin.html`.

Las paginas deben abrirse desde Laragon y no mediante doble clic sobre los archivos HTML, porque el panel usa PHP y sesiones para iniciar sesion.

## Requisitos

- Laragon con Apache y PHP.
- El proyecto ubicado dentro de la carpeta `www` de Laragon.
- JavaScript habilitado en el navegador.

## Panel de administracion

La contrasena se valida en `backend/login.php`. El menu editado se guarda actualmente en el almacenamiento local del navegador.
