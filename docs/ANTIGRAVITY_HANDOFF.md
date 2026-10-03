# Antigravity geliştirme devri

## Başlangıç durumu

Bu bir araştırma pilotudur; Balkanların tamamı için temel coğrafya vardır, tarihsel veri kapsamı ağırlıkla Üsküp–Kalkandelen–Prizren hattıdır. Haritanın geniş coğrafi görünümü veri kapsamının genişliği anlamına gelmez.

Son değişiklikler: kâğıt/bakır paleti, hafif kontroller, sade mod menüsü, mobil zaman çizgisi, yakın işaretlerin sayı ile gruplanması. Grup tıklaması önce yakınlaştırır; zoom 12 ve üzerinde veya aynı konumdaki kayıtlar için liste açar. Gruplar yalnız ekran mesafesine göre oluşur, tarihsel bölge/idarî birim değildir.

## Korunması gereken veri kararları

- Üç pilot şehir için çekirdek tarih başlangıçlarını kesin kuruluş tarihi gibi sunma.
- Nüfus gözlemleri yalnız kaynak yılına aittir; aradaki yıllara otomatik dağıtılmaz.
- Araştırma paketinin koordinatsız iki yer kaydı katalogda tutulur; haritaya uydurma konum eklenmez.
- Kültür bölgelerinin üç null geometrisi ve göç iddialarının eksik rotaları çizilmez.
- İdarî merkez noktaları idarî sınır değildir.
- Yüzyıl aralığı olan miras tarihleri üst sınırdan gösterilir; tarih hassasiyeti metni korunur. Tarihi sayısallaştırılamayan kayıtlar yalnız 2026 görünümünde yer alır.
- Kısmi hasar, revak kaybı ve yeniden inşa bütün yapının yokluğu sayılmaz.
- Kalkandelen 1452 için 146 ve 159 hâne çelişkisi ayrı ve tartışmalı kayıtlardır.
- Lost Rumelia günümüz kayıp durumlarını tüm dönemleri birlikte göstererek inceler; normal yıl filtresiyle aynı semantik değildir.
- Filibe/Plovdiv eşleşmesi ad indeksinde vardır; henüz tam tarihsel veri işlenmiş bir şehir değildir.

## Geliştirme sırası

1. Fiziksel iPhone/Safari ve farklı Android cihazlarda harita açılışı, sheet kaydırma, safe-area, dokunma ve ağ kesintisi testleri.
2. `app/page.tsx` içindeki atlas durumunu, arama/timeline/panelleri ayrı bileşenlere böl; mevcut testlerin davranışını koru.
3. Araştırma kayıtlarının kaynak URL, sayfa/varak, yayın tarihi, konum hassasiyeti ve kronolojisini bağımsız olarak gözden geçir.
4. Veri şemasını çalışan `community` kategorisi, koordinatsız iddialar ve özgün ölçü birimleriyle hizala. SQL şemasındaki entity geometry NOT NULL ve dimension enum mevcut katalogla birebir aynı değildir; düzeltmeden otomatik içe aktarma yapma.
5. PostGIS/Supabase bağlantısı, gözlem bazında kaynak ve editoryal inceleme süreci; sonra incelenmiş tarihsel geometri ve PMTiles.
6. Kaynaklı verilerle diğer Balkan bölgelerine genişle. Yer adları veya din üzerinden etnisite üretme.

## Antigravity’ye verilecek başlangıç istemi

> Bu klasördeki mevcut RUMELIA ATLAS projesini geliştir. Önce README.md, docs/ANTIGRAVITY_HANDOFF.md, research/VALIDATION.md, lib/atlas-data.ts ve lib/atlas-map.ts dosyalarını oku. Yeni bir uygulama başlatma. Etkin motor Leaflet’tir; MapLibre kodu korunmaktadır. Next App Router yapısı Vinext/Vite/Cloudflare Worker üzerinden çalışır. Çalışan mobil tasarımı, harita görünürlüğünü, timeline’ı, katmanları, tarihsel ad aramasını, kaynakları ve Lost Rumelia davranışını koru. Din, etnisite, dil ve tarihsel cemaatleri birbirine dönüştürme. Koordinatsız veya kaynaksız geometri üretme. Önce projeyi yerelde çalıştır ve mevcut veri testlerini geçir. Sonra iyileştirmeleri küçük adımlar halinde uygula; her adımda değişikliği ve doğrulamayı açıkla. Supabase/PMTiles henüz canlı bağlı değildir; çalışan entegrasyon gibi varsayma.
