# SpotLite 7 - Reprodutor de Música PWA

Um reprodutor de música moderno e elegante para Android, desenvolvido com React e otimizado como Progressive Web App (PWA). Inspirado no design do Spotify com funcionalidades completas para reprodução local de músicas.

![SpotLite 7 Logo](https://private-us-east-1.manuscdn.com/sessionFile/OncSAya2mG3yLHRTiIFx35/sandbox/JoewZ0Qart48ru5yUn2100-images_1757904489791_na1fn_L2hvbWUvdWJ1bnR1L3Nwb3RsaXRlLTcvc3JjL2Fzc2V0cy9sb2dvLXNwb3RsaXRlLTc.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT25jU0F5YTJtRzN5TEhSVGlJRngzNS9zYW5kYm94L0pvZXdaMFFhcnQ0OHJ1NXlVbjIxMDAtaW1hZ2VzXzE3NTc5MDQ0ODk3OTFfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwzTndiM1JzYVhSbExUY3ZjM0pqTDJGemMyVjBjeTlzYjJkdkxYTndiM1JzYVhSbExUYy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=EyCUhxnxH-AnHy9QkWaoh4ztnOv6j1aJQOXZdiaa5R7-arQPpcdw3MGZd9vQV9J7LqL5oS8F5roTcGzHF7PAB1d4lxnjehcV1S8LJzpUm~lT4is1D-NKxEA3nWmqJITg2cDwmDwkouT8O7~WhzyUgtdlVnCDSRP-zgv5LA-rnGdr2zRYNBK3gY-5Dm~yYJxs6Vshbn~UU02dSU1gnxDx4yZwjknkbc8unUNlSxyAoomDmlVMfAYxuqc-6vkhm~eLw-8tcuf70b6P8Kr-10jhwZqzW~~pxqHFFF9ItE9HPmfhfmyAilI2y~t3z5XaskhF9GAlT7HNjcr05~9CPEgihg__)

## 🎵 Funcionalidades

### Reprodução de Música
- ✅ **Controles completos**: Play/Pause, Anterior/Próximo
- ✅ **Modos de reprodução**: Shuffle (aleatório) e Repeat (repetir uma/todas)
- ✅ **Controle de volume**: Slider interativo
- ✅ **Barra de progresso**: Navegação temporal na música
- ✅ **Informações da faixa**: Título, artista e capa do álbum

### Gerenciamento de Playlist
- ✅ **Carregar arquivos individuais**: Suporte a MP3, WAV, OGG, FLAC, M4A, AAC, WMA
- ✅ **Carregar pastas completas**: Seleção de diretórios com busca recursiva
- ✅ **Organização por gênero**: Cada pasta vira uma playlist separada
- ✅ **Busca em tempo real**: Filtro por título ou artista
- ✅ **Interface visual**: Lista organizada com indicadores de reprodução

### Progressive Web App (PWA)
- ✅ **Instalação no Android**: Botão de instalação integrado
- ✅ **Funcionamento offline**: Service Worker com cache inteligente
- ✅ **Ícones adaptativos**: Múltiplos tamanhos para Android
- ✅ **Manifest otimizado**: Configurações específicas para Android
- ✅ **File handlers**: Abertura de arquivos de áudio pelo sistema

### Design e Usabilidade
- ✅ **Tema Spotify**: Cores verde (#1DB954), preto e cinza
- ✅ **Interface responsiva**: Otimizada para dispositivos móveis
- ✅ **Feedback visual**: Indicadores de status e carregamento
- ✅ **Otimizações Android**: Touch targets, prevenção de zoom, performance

## 🚀 Como usar

### Instalação no Android via PWABuilder

1. **Acesse o PWABuilder**: Vá para [https://www.pwabuilder.com/](https://www.pwabuilder.com/)

2. **Faça upload do projeto**: 
   - Faça upload da pasta `dist/` gerada pelo build
   - Ou hospede o projeto em um servidor e use a URL

3. **Configure para Android**:
   - Selecione "Android" como plataforma
   - Configure as opções de build
   - Baixe o APK gerado

4. **Instale no Android**:
   - Transfira o APK para seu dispositivo Android
   - Ative "Fontes desconhecidas" nas configurações
   - Instale o APK
   - O app aparecerá na tela inicial do Android

### Instalação via Navegador (Alternativa)

1. Abra o Chrome ou Edge no seu Android
2. Acesse a URL do SpotLite 7
3. Clique no botão "Instalar App" no cabeçalho
4. Confirme a instalação
5. O app aparecerá na tela inicial do Android

### Adicionando Músicas

1. **Pasta completa**: Clique em "Escolher Pasta" para carregar uma pasta inteira
2. **Arquivos individuais**: Clique em "Adicionar Arquivos" para músicas específicas
3. **Organização**: Cada pasta carregada vira uma playlist separada
4. **Busca**: Use a barra de busca para filtrar músicas

### Controles de Reprodução

- **Play/Pause**: Botão central verde
- **Anterior/Próximo**: Setas laterais
- **Shuffle**: Ativa/desativa modo aleatório
- **Repeat**: Cicla entre OFF → ONE → ALL
- **Volume**: Slider no canto inferior direito
- **Playlists**: Botões para alternar entre pastas/gêneros

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Estilização
- **shadcn/ui**: Componentes de interface
- **Lucide React**: Ícones
- **PWA**: Service Worker e Manifest
- **File System Access API**: Seleção de pastas (Chrome/Edge)
- **Web Audio API**: Reprodução de áudio

## 📱 Compatibilidade

### Navegadores Suportados
- ✅ **Chrome Android** (recomendado)
- ✅ **Edge Android**
- ✅ **Firefox Android** (funcionalidades limitadas)
- ✅ **Samsung Internet**

### Formatos de Áudio
- ✅ MP3
- ✅ WAV
- ✅ OGG
- ✅ FLAC
- ✅ M4A
- ✅ AAC
- ✅ WMA

## 🔧 Desenvolvimento

### Scripts Disponíveis
```bash
pnpm run dev        # Servidor de desenvolvimento
pnpm run build      # Build para produção
pnpm run preview    # Preview do build
```

### Estrutura do Projeto
```
src/
├── assets/           # Imagens e recursos
├── components/ui/    # Componentes shadcn/ui
├── hooks/           # Hooks customizados (PWA)
├── App.jsx          # Componente principal
├── App.css          # Estilos customizados
└── main.jsx         # Entry point

public/
├── manifest.json    # PWA manifest
├── sw.js           # Service Worker
└── icon-*.png      # Ícones do app

dist/               # Build de produção (gerado)
```

## 📦 Build e Deploy

### Para PWABuilder.com

1. **Gerar build de produção**:
   ```bash
   pnpm run build
   ```

2. **Upload no PWABuilder**:
   - Acesse [https://www.pwabuilder.com/](https://www.pwabuilder.com/)
   - Faça upload da pasta `dist/`
   - Configure para Android
   - Baixe o APK

3. **Instalar no Android**:
   - Transfira o APK para o dispositivo
   - Instale e aproveite!

### Para hospedagem web

1. Faça upload da pasta `dist/` para qualquer servidor web
2. Configure HTTPS (obrigatório para PWA)
3. Acesse via navegador móvel
4. Use o botão "Instalar App"

## 🎨 Características do Design

- **Mobile-first**: Interface otimizada para smartphones
- **Cores do Spotify**: Verde (#1DB954), preto (#191414), cinza
- **Touch-friendly**: Botões com área mínima de 44px
- **Feedback tátil**: Animações e transições suaves
- **Sem zoom indesejado**: Prevenção de zoom em inputs
- **Performance otimizada**: Animações com GPU acceleration

## 📄 Licença

Este projeto foi desenvolvido como demonstração de um reprodutor de música PWA moderno para Android.

---

**SpotLite 7** - Sua música, em qualquer lugar! 🎵

## 🔗 Links Úteis

- [PWABuilder.com](https://www.pwabuilder.com/) - Para gerar APK
- [Web.dev PWA](https://web.dev/progressive-web-apps/) - Documentação PWA
- [Spotify Design](https://developer.spotify.com/documentation/general/design-and-branding/) - Guia de design

## 🤝 Contribuição

Este é um projeto de demonstração. Para melhorias ou sugestões, sinta-se à vontade para fazer um fork e contribuir!

