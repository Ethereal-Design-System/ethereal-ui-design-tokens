# 🪽Ethereal UI Design Tokens
O **ethereal-ui-design-tokens** é o repositório central de design tokens do ecossistema Ethereal. Ele serve como a única fonte de verdade (single source of truth) para as nossas propriedades de design.

---

## Proposta
Esta biblioteca é **totalmente agnóstica de plataforma e linguagem**. O projeto foi estruturado utilizando o **Style Dictionary** sob o capô, permitindo transformar dados brutos de design em formatos nativos para qualquer plataforma (Web, Mobile, etc.).

## Governança & Sincronização
O repositório foi arquitetado prevendo uma colaboração fluida entre design e engenharia:
* **Design:** Mantido via **Figma** com o plugin **Tokens Studio**.
* **Devs:** Infraestrutura automatizada para ler os arquivos de design, compilar para código e publicar o pacote.

---

## Comandos Essenciais

### `build:tokens`
Lê a origem dos tokens e gera os arquivos finais nos formatos especificados no `sd.config.js`.
```bash
npm run build:tokens
```

### `build:package`
Executa o build:tokens e, em seguida, copia as declarações de tipo (.d.ts) dos tokens para a pasta dist, preparando o pacote para consumo.

```bash
npm run build:package
```

### changeset
Inicia o fluxo interativo para documentar novas alterações no código e determinar o nível da próxima versão semântica (patch, minor ou major).

```bash
npm run changeset
```

### version-packages
Consome os changesets pendentes, atualiza as versões no `package.json` e gera as entradas automáticas no `CHANGELOG.md`.

```bash
npm run version-packages
```

### version-check
Verifica o status atual das alterações e lista quais arquivos precisam de versionamento desde a branch `develop`. Útil para validação em pipelines de CI.

```bash
npm run version-check
```

### release
Publica a nova versão do pacote compilado no registry (npm) com as versões recém-geradas.

```bash
npm run release
```
