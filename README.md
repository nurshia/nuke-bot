# 🚀 AntiGravity Discord Bot

Discord sunucunuz için gelişmiş yönetim ve otomasyon botu. Modern Discord.js v14 altyapısı ile hem slash komutları hem de prefix komutları destekler.

## ✨ Özellikler

- ⚡ **Hybrid Komut Sistemi**: Hem slash (/) hem prefix (+) komutları
- 🎯 **Modüler Yapı**: Kolay genişletilebilir mimari
- 🔐 **Yetki Sistemi**: Owner bazlı güvenli komut kontrolü
- 📁 **Otomatik Yükleme**: Komutlar ve eventler otomatik algılanır
- 🔄 **Global Slash Komutlar**: Tüm sunucularda çalışan komutlar
- 🛠️ **Kolay Yapılandırma**: .env dosyası ile basit kurulum

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/nurshia/nuke-bot.git
cd antigravity-discord-bot
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env` dosyasını düzenleyin:
```env
TOKEN=BOT_TOKEN_BURAYA
CLIENT_ID=BOT_CLIENT_ID_BURAYA
GUILD_ID=TEST_SUNUCU_ID_BURAYA
PREFIX=+
OWNER_ID=DISCORD_ID_BURAYA
```

4. Botu başlatın:
```bash
npm start
```

## 📺 Video Anlatım

Kurulum ve kullanım hakkında detaylı video anlatım:

[![AntiGravity Bot Kurulum](https://img.youtube.com/vi/cCsexGncXQ0/maxresdefault.jpg)](https://www.youtube.com/watch?v=cCsexGncXQ0)

[🎥 YouTube'da İzle](https://www.youtube.com/watch?v=cCsexGncXQ0)

## 🎮 Kullanım

### Prefix Komutları
```
+yardım [kanal-adı]     - Yardım komutu
+kurulum [kanal-adı]    - Kurulum komutu
+setup [kanal-adı]      - Setup komutu
+mesaj [mesaj]          - Mesaj komutu
+full [kanal] [mesaj]   - Full paket komutu
```

### Slash Komutları
```
/yardım [kanaladi]      - Yardım komutu
/mesaj [mesaj]          - Mesaj komutu
/full [kanal] [mesaj]   - Full paket komutu
```

> **Not**: Tüm komutlar sadece bot sahibi (OWNER_ID) tarafından kullanılabilir.

## 🔧 Gereksinimler

- Node.js v18.9.0 veya üzeri
- Discord.js v14.21.0
- Gerekli bot izinleri:
  - Manage Channels
  - Manage Messages
  - Send Messages
  - View Channels
  - Administrator (önerilen)

## 📁 Proje Yapısı

```
nuke-bot/
├── eventler/              # Bot event handler'ları
│   ├── ready.js          # Bot hazır olduğunda
│   ├── interactionCreate.js  # Slash komut işleyici
│   └── messageCreate.js  # Prefix komut işleyici
├── interactionlar/        # Slash komutları
│   ├── full.js
│   ├── mesaj.js
│   └── yardim.js
├── komutlar/             # Prefix komutları
│   └── admin/
│       ├── full.js
│       ├── mesaj.js
│       └── yardim.js
├── utils/                # Yardımcı fonksiyonlar
│   └── serverTemplate.js
├── .env                  # Yapılandırma dosyası
├── index.js              # Ana bot dosyası
└── package.json
```

## 🔨 Geliştirme

### Yeni Komut Ekleme

**Prefix Komutu:**
```javascript
// komutlar/admin/ornek.js
module.exports = {
  name: "ornek",
  aliases: ["alias1", "alias2"],
  async execute(message, args, client) {
    // Komut kodu
  }
};
```

**Slash Komutu:**
```javascript
// interactionlar/ornek.js
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ornek")
    .setDescription("Örnek komut"),
  async execute(interaction, client) {
    // Komut kodu
  }
};
```

### Yeni Event Ekleme

```javascript
// eventler/ornekEvent.js
module.exports = {
  name: "eventAdi",
  once: false, // veya true
  async execute(...args) {
    // Event kodu
  }
};
```

## ⚙️ Yapılandırma

### .env Parametreleri

| Parametre | Açıklama | Zorunlu |
|-----------|----------|---------|
| TOKEN | Discord bot token | ✅ |
| CLIENT_ID | Bot client ID (slash komutlar için) | ❌ |
| GUILD_ID | Test sunucu ID | ❌ |
| PREFIX | Komut prefix'i (varsayılan: +) | ❌ |
| OWNER_ID | Bot sahibinin Discord ID'si | ✅ |

### Bot İzinleri

Bot'u sunucuya eklerken şu URL formatını kullanın:
```
https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID_BURAYA&permissions=8&scope=bot%20applications.commands
```

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🔗 Bağlantılar

- [Discord.js Dokümantasyonu](https://discord.js.org/)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Node.js İndirme](https://nodejs.org/)

## 💬 Destek

Sorularınız veya sorunlarınız için:
- [![Discord Invite](https://dc.oksi.dev/npm)](https://discord.gg/npm)

## ⚠️ Uyarı

Bu bot güçlü sunucu yönetim yetkilerine sahiptir. Sadece güvendiğiniz sunucularda ve sorumlu bir şekilde kullanın. Bot sahibi kimlik bilgilerinizi kimseyle paylaşmayın.

---

⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!

**Made with ❤️ by OXY**
