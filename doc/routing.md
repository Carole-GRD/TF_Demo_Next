# Routing en next JS


## Le routing est basé sur la structure du dossier "page"
Remarque : les fichiers qui commencent avec un underscore sont ignorés

Exemple du principe de routing des pages en Next JS :
```
• pages
    ○ index.jsx           "/"
    ○ pavel.jsx           "/pavel"
    • nico
        ○ index.jsx       "/nico"
        ○ demo.jsx        "/nico/demo" 
    • carole
        ○ index.jsx       "/carole"
        ○ [id].jsx        "/carole/42"   (id -> 42)
```


## Pour créer des endpoints API

-> il faut les placer dans le dossier "pages/api"


Exemple du principe de routing pour les endpoints API en Next JS :
```
• pages
    • api
        ○ hello.js       "/api/hello"
        • product
            ○ index.js   "/api/product"
            ○ [id].js    "/api/product/42"
```