# Passo à passo

## Execução de comandos no terminal.

```shell
 ionic g page characters/characters-list
> ng generate page characters/characters-list --project=app
CREATE src/app/characters/characters-list/characters-list-routing.module.ts (380 bytes)
CREATE src/app/characters/characters-list/characters-list.module.ts (530 bytes)
CREATE src/app/characters/characters-list/characters-list.page.scss (0 bytes)
CREATE src/app/characters/characters-list/characters-list.page.html (320 bytes)
CREATE src/app/characters/characters-list/characters-list.page.spec.ts (501 bytes)
CREATE src/app/characters/characters-list/characters-list.page.ts (291 bytes)
UPDATE src/app/app-routing.module.ts (657 bytes)
[OK] Generated page!
```
```shell
 ionic g page characters/characters-detail
> ng generate page characters/characters-detail --project=app
CREATE src/app/characters/characters-detail/characters-detail-routing.module.ts (388 bytes)
CREATE src/app/characters/characters-detail/characters-detail.module.ts (544 bytes)
CREATE src/app/characters/characters-detail/characters-detail.page.scss (0 bytes)
CREATE src/app/characters/characters-detail/characters-detail.page.html (324 bytes)
CREATE src/app/characters/characters-detail/characters-detail.page.spec.ts (513 bytes)
CREATE src/app/characters/characters-detail/characters-detail.page.ts (299 bytes)
UPDATE src/app/app-routing.module.ts (828 bytes)
[OK] Generated page!
```

## Para executar o projeto
```shell
ionic serve
```

### Para visualizar o projeto no plugin preview
Pressione CRTL+SHIFT+P = Preview Android

## Criar a camada de serviço
```shell
ionic g service characters/characters-list/characters
> ng generate service characters/characters-list/characters --project=app
CREATE src/app/characters/characters-list/characters.service.spec.ts (377 bytes)
CREATE src/app/characters/characters-list/characters.service.ts (139 bytes)
[OK] Generated service!
```
