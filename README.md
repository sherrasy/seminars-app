# seminars-app
Приложение для управления списком семинаров:

- локальный json-server c данными в папке data;

- просмотр списка на главной странице получаемого с сервера json-server;

    <details>
    <summary> 👀 Показать </summary>
    <p>
        <img src="https://github.com/user-attachments/assets/04f1cb6e-0da3-4c5b-8a49-a36915a3db17" hspace="10" width='700'>
    </p>
    </details>

- редактирование - по нажатию на кнопку карандаш появляется модальное окно с формой редактирования;
  
     <details>
    <summary> 👀 Показать </summary>
    <p>
        <img src="https://github.com/user-attachments/assets/781268da-adf8-427c-b8fc-43837d4ff713" hspace="10" width='700'>
    </p>
    </details>
    
- удаление - по нажатию на кнопку с корзиной появляется модальное окно для подтверждения действия.
  
    <details>
    <summary> 👀 Показать </summary>
    <p>
        <img src="https://github.com/user-attachments/assets/397ee8ff-95f3-4339-8ca8-d06351966eca" hspace="10" width='700'>
    </p>
    </details>
    
### Запуск приложения

```bash
cd seminars-app
npm i
npm run dev
```

json-server

```bash
npx json-server --watch ./data/seminars.json
```

Приложение будет доступно на `http://localhost:4001/seminars-app/`

json-server доступен на `http://localhost:3000/seminars`
