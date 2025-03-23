## Como contribuyo?
Si deseas contribuir, sigue los pasos a continuación adaptados al contexto de este repositorio:

- **Crea un fork**

    Haz un fork de este repositorio para tener una copia en tu cuenta de GitHub. Esto te permitirá trabajar en tus propios cambios sin afectar el repositorio original.

- **Clona el fork**

    Clona tu fork localmente usando el comando:  
    ```bash
    git clone <URL del fork>
    ```  
    Por ejemplo:  
    ```bash
    git clone https://github.com/<tu-usuario>/cards.git
    ```

- **Configura el Upstream**

    Configura un upstream para mantener tu fork sincronizado con el repositorio original:  
    ```bash
    git remote add upstream https://github.com/<repositorio-original>/cards.git
    ```  
    Para asegurarte de que tu copia está actualizada, usa:  
    ```bash
    git pull upstream main
    ```

- **Crea una rama para tu contribución**

    Crea una nueva rama para trabajar en tu contribución. Por ejemplo, si estás añadiendo una nueva tarjeta sobre "CSS Grid", puedes nombrar la rama:  
    ```bash
    git checkout -b css-grid-card
    ```

- **Realiza cambios y haz commit**

    Realiza los cambios necesarios en los archivos del proyecto. Por ejemplo, puedes añadir una nueva tarjeta en el formato adecuado. Luego, guarda los cambios y haz commit:  
    ```bash
    git add .
    git commit -m "Añadida tarjeta educativa sobre CSS Grid"
    ```

- **Sincroniza con el repositorio original**

    Antes de subir tus cambios, asegúrate de que tu rama está sincronizada con el repositorio original:  
    ```bash
    git pull upstream main
    ```

- **Sube tu rama al fork**

    Sube los cambios de tu rama al fork en GitHub:  
    ```bash
    git push origin css-grid-card
    ```

- **Crea un Pull Request (PR)**

    Ve a la página de tu fork en GitHub y haz clic en "Compare & pull request". Asegúrate de describir claramente los cambios que has realizado, como el propósito de la nueva tarjeta o las correcciones aplicadas.  
    ![img][def]

¡Gracias por contribuir a este proyecto educativo!


[def]: resources/image.png