$(function() {
  "use strict";

    const content = {
        en: {
            anasayfa: "صفحه اصلی",

        },
        tr: {
            tel_no: "0312 231 99 40",
            eposta: "pehlivanguvenhukuk@gmail.com",
            farsça: "Farsça",
            türkçe: "Türkçe",
            pehlivanguvenhukukbürosu:"Pehlivan & Güven Hukuk Bürosu",
            anasayfa: "Anasayfa",
            hakkımızda: "Hakkımızda",
            çalışmaalanlarımız: "Çalışma Alanlarımız",
            ekibimiz: "Ekibimiz",
            blog: "Blog",
            iletişim: "İletişim",
            hızlıveetkilihukukidanışmanlıkhizmeti: "HIZLI VE ETKİLİ HUKUKİ DANIŞMANLIK HİZMETİ",
            paragraf1: "Pehlivan & Güven Hukuk Bürosu olarak, müvekkillerimize en yüksek kalitede hukuki danışmanlık ve temsil hizmetleri sunmaktan gurur duyuyoruz. Büromuz, farklı kültürleri ve hukuk sistemlerini bir araya getiren bir uzmanlıkla, özellikle yabancılar hukuku, ticaret hukuku, sigorta hukuku ve mülteci hakları alanlarında derin bilgi birikimine sahiptir." +
                "" +
                "Av. Aydın Güven, İran'da başladığı hukuk kariyerini Türkiye'de geliştirmiş, İranlılar başta olmak üzere yabancılar hukukunda uzmanlaşmıştır. Farsça ve Türkçe bilmektedir ve müvekkillerine hukuki, cezai, idari, mülteci ve vatandaşlık hukuku alanlarında profesyonel destek sunmaktadır." +
                "" +
                "Av. Abdurrahman Pehlivan, Ankara Barosu’na bağlı olarak mülteci hukuku, taşınmaz hukuku, miras hukuku ve tazminat hukuku gibi çeşitli alanlarda çalışmakta olup, aynı zamanda uzlaştırmacı ve uzman arabulucudur. İngilizce bilmektedir ve müvekkillerine kapsamlı hukuki hizmetler sunmaktadır." +
                "" +
                "Av. Canan Pehlivan, Fikri Mülkiyet ve Rekabet Hukuku, Marka Hukuku, taşınmaz hukuku gibi alanlarda uzmanlaşmış olup, aynı zamanda bilirkişilik ve arabuluculuk görevlerini de başarıyla yürütmektedir. Çeşitli özel hukuk alanlarında derinlemesine bilgiye sahiptir." +
                "" +
                "Pehlivan & Güven Hukuk Bürosu olarak, müvekkillerimizin her türlü hukuki ihtiyaçlarına etkin ve sonuç odaklı çözümler sunmayı ilke edinmiş durumdayız. Hukukun her alanında profesyonel desteğimizle yanınızdayız.",
            yabancılarhukuku: "YABANCILAR HUKUKU",
            işhukuku:"İŞ HUKUKU",
            ailehukukuveboşanma: "AİLE HUKUKU-BOŞANMA",
            mirashukuku: "MİRAS HUKUKU",
            kirahukuku: "KİRA HUKUKU",
            tazminathukuku: "TAZMİNAT HUKUKU",
            idaridavalar: "İDARİ DAVALAR",
            dahafazlası:"Daha Fazlası",
            tümçalışmaalanlarımız: "Tüm Çalışma Alanlarımız",
            deneyimlikadrohızlıçözüm: "Deneyimli kadro, hızlı çözüm",
            alanındauzmandeneyimliavukatlarımızlahızlıveetkilihizmetlerPEHLİVANGÜVENHukukBürosunda: "Alanında uzman, deneyimli avukatlarımızla hızlı ve etkili hizmetler PEHLİVAN & GÜVEN Hukuk Bürosu’nda",
            virgül: ",",
            bizeulaşın: "BİZE ULAŞIN",
            adres: "Adres",
            necatibeycaddesi_no_40_10: "Necatibey Caddesi No:40/10",
            tel: "Tel",
            mail_pehlivanguvenhukuk_gmail_com: "Mail: pehlivanguvenhukuk@gmail.com",
            menü: "Menü",
            çalışma_alanlarımız_paragraf1_yabancılarhukuku: "Yabancıların ülkemizde vatandaşlık alması, ülkemizde çalışma ve ikamet izinleri, yabancıların mülk edinimi, yabancıların boşanması gibi bir dizi konu bu kapsamda değerlendirilmektedir. " +
                "Yabancılar hukuku ile ilgili bazı konular aşağıda sıralanmıştır: " +
                "Yabancı uyruklu kişilerin ülkemizde ticaret yapma şartları," +
                "Alım-satım, taşıma, inşaat ve hizmet sözleşmelerinin hazırlanma usulleri," +
                "Yabancıların Türk bankalarında mevduat hesabı açmaları," +
                "Yabancılara yönelik uygulanacak kovuşturma ve soruşturma işlemleri," +
                "Tenfiz, mal paylaşımı, velayet," +
                "Genel anlamda Türk vatandaşlığına başvuru ve vatandaşlığın alınması," +
                "İstisnaî anlamda Türk vatandaşlığına başvuru yapılması ve vatandaşlığın alınması," +
                "Evlenme yoluyla vatandaşlığın edinilmesi ve buna ilişkin dikkate alınan ölçütler," +
                "Vatandaşlığı edinmeye dair başvuruların reddi halinde buna dair işlemlerin iptali ve takibi," +
                "Vatandaşlıktan çıkma ve çifte vatandaşlık ve çoklu vatandaşlık hallerine ilişkin iş ve işlemler.",
            çalışma_alanlarımız_paragraf2_işhukuku: "İş hukuku çalışma yaşamı ve iş ve istihdam koşulları bakımından önem arz eden bir hizmet alanıdır." +
                "İş mahkemeleri çalışma yaşamında ortaya çıkan istihdam ve alacak haklarına dair sorunlar sebebiyle teşkil edilmiş bulunan uzmanlık alanı iş kaynaklı anlaşmazlıklar olan, işveren ile işçi arasındaki davalar İş Mahkemelerinde görülmektedir." +
                "Bu mahkemelerde genel olarak görülen davalar şunlardır:" +
                "İşe iade davası," +
                "İş kazası tazminat davası," +
                "Kıdem tazminatı alacağı davası," +
                "İhbar tazminatı alacağı davası," +
                "Hizmet tespiti davası," +
                "Kötü niyet tazminatı davası," +
                "Fazla mesai alacağı davası," +
                "Haklı veya haksız fesih davaları," +
                "Maaş alacağı davaları," +
                "Ulusal bayram ve hafta tatili alacağı," +
                "Maluliyet ve ölüm sebebiyle tazminat davası," +
                "Çalışma ve istihdam ilişkisinden doğan diğer davalar.",
            çalışma_alanlarımız_paragraf3_ailehukuku_boşanma: "4721 sayılı Türk Medeni Kanunu, aile hukukunun temelini teşkil eder. Yani Aile hukuku, Türk Medeni Kanunu’na göre şekillenmiştir. Aile ile ilgili tüm konular, aile hukukunun kapsamındadır. Ayrıca Türkiye de evlenmiş olan yabancıların boşanma koşullarında da bazen Medeni Hukuk uygulanması gerekmektedir." +
                "Aile hukuku mevzuat gereği aşağıdaki konular, aile hukukunu kapsamaktadır: " +
                "Kanuni olarak nikah yapma koşulları," +
                "Evlenme işlemleri ve koşulları," +
                "Boşanma şartları ve boşanmanın nasıl olacağı," +
                "Anlaşmalı boşanma şartları," +
                "Çekişmeli boşanma," +
                "Mal paylaşımı," +
                "Mal rejiminin tanımlanması," +
                "Aile konutuna ait konular," +
                "Soybağı ile ilgili konular," +
                "Evlat edinme şartları," +
                "Velayet şartları ve velayetin tanımları," +
                "Çocukların nafaka alması şartları ve miktarları," +
                "Çocuk hakları," +
                "Kadın hakları," +
                "Vesayet konuları," +
                "Kayyımlık kurumu ile ilgili konular," +
                "Yardım nafakası şartları," +
                "Evlilik dışı ortak yaşamın şartları," +
                "Aile içi şiddetin önlenmesi," +
                "Çocuk kaçırma cezaları," +
                "Çocuk istismarının önlenmesi," +
                "Taşıyıcı annelik konuları," +
                "Babalık davaları," +
                "Evliliğin iptali davaları," +
                "Yabancı mahkeme kararlarının Türk Mahkemeleri tarafından tanınması konuları.",
            çalışma_alanlarımız_paragraf4_mirashukuku: "Miras Hukuku, Özel Hukuk alanının en önemli konuları arasında yer almaktadır. Bir kişinin ölümü sonrasında bıraktıklarına dair mirasta hak sahibi olanların hukuki açıdan hak ve taleplerine dair işlemler ile ölüme bağlı tasarrufları belirleyen bir hukuk dalıdır. Miras Hukuku, tasarrufların niteliğine ve ölüm sonrasında malvarlığı değerlerinin hak sahipleri arasında paylaşımı bakımından önem arz eder." +
                "Miras hukuku alanında genel olarak aşağıdaki davalarla karşılaşılaktadır;" +
                "Ölümden önce miras bırakanın yaptığı muvazaalı olduğu düşünülen tasarruflarının iptali davası," +
                "Saklı paylara müdahale anlamına gelen tasarrufların iptali davası," +
                "Mirastan çıkarmanın iptali davası," +
                "Mirasta istihkak davası," +
                "Terekenin reddi davası," +
                "Mirastan feragat davası," +
                "Veraset İlamının iptali," +
                "Miras kaynaklı tapu iptal ve tescil davaları," +
                "Miras kaynaklı ortaklığın giderilmesi davası," +
                "Tenkis davası.",
            çalışma_alanlarımız_paragraf5_kirahukuku: "Kira hukukunda açılan davalar genellikle kiracı ile kiralayan arasındaki uyuşmazlıkları konu etmektedir. Bu kapsamda hizmet verdiğimiz davalar kira tespit, kira uyarlama ve tahliye davalarıdır." +
                "Bu sebepler Türk Borçlar Kanunu’nun 350. ve devamı maddelerinde açıkça düzenlenmiştir. Buna göre;" +
                "Kiraya vereninin ve yakınlarının kiralanana duyduğu gereksinim nedeniyle tahliye davası," +
                "Yeni malikin İhtiyacı Nedeniyle Tahliye Davası," +
                "Kiraya Verenin Sözleşmeyi Kiralananı Yeniden inşası veya İmarı Amacıyla Tahliye Davası," +
                "Kiracının Boşaltmayı Taahhüt Etmesi," +
                "Kiracı Tarafından Kira Bedelinin Ödenmemesi," +
                "Kiracının Oturacak Başka Konutunun Olması," +
                " Kiracı Tarafından Kiralananın Başkasına Kiraya Verilmesi," +
                "Kiralanan Taşınmazın İcra Yolu İle Tahliyesi," +
                "Kira Bedelinin Ödenmemesi Sebebiyle İlamsız Tahliye,",
            çalışma_alanlarımız_paragraf6_tazminathukuku: "Tazminat hukuku, kişilerin maddi ve manevi olarak gördükleri zararlı gidermeyi amaçlar. Kişilerin haksız eylemler sonucunda gördükleri zararları gideren hukuk dalıdır." +
                "Maddi ve manevi olmak üzere iki kapsamda değerlendirilir. Maddi tazminat aşağıdaki nedenlerden dolayı açılır: " +
                "Tazminat davası, maddi ve manevi olmak üzere iki kapsamda ele alınır. Ayrıca aşağıdaki alt kollara ayrılmıştır: " +
                "Haksız gözaltı durumlarında açılan davalar," +
                "Meslek hastalıklarından kaynaklanan davalar," +
                "İş kazaları sonucu ölüm ya da ağır yaralanma durumlarında açılan tazminat davaları," +
                "Trafik kazaları sonucunda ölüm ya da ağır yaralanma sonucu açılan tazminat davaları," +
                "Kişilik haklarının korunması kapsamında açılan tazminat davaları," +
                "Malpraktis (doktor hatasından kaynaklanan durumlar) dolayısıyla açılan tazminat davaları." +
                "Manevi tazminat ise haksız fiiller sonucunda kişi ya da kişilerin manevi acılarının giderilmesi amacıyla mağdur olan kişiye verilir." +
                "" +
                "Trafik Kazalarından Doğan Tazminatlar" +
                "Araç Değer Kaybı" +
                "Araç değer kaybı, meydana gelen trafik kazası neticesinde hasara uğrayan ve bu sebeple bakım, onarım, tadilat gören bir aracın bundan sonra ikinci el piyasasındaki değerini ifade etmektedir. Aracın değer kaybı zararı, aracın olay tarihindeki hasar değeriyle hasarı giderildikten sonra edeceği değer arasındaki farktan ibarettir." +
                "Bir araç kaza yapar ve hasara uğrarsa, ne kadar iyi şekilde tamir edilmiş olursa olsun ekonomik değerinde bir azalma meydana geleceği kuşkusuzdur. Yargıtay da pek çok kararında bunu kabul etmektedir." +
                "Bedensel Zararlardan Doğan Tazminat" +
                "Yaralanmalı trafik kazalarında yaralanan kişi bizzat kendisi maddi / manevi  tazminat davasını açabilir. Burada yaralanan kişi çalışma hayatında uğradığı ve uğrayacağı  iş gücü kaybı nedeniyle maddi tazminat talebinde bulunabileceği gibi, trafik kazası nedeniyle yaşadığı keder, üzüntü nedeniyle de manevi tazminat talebinde bulunabilir." +
                "Ölümlü trafik kazalarında ise ölen kişi hayatta iken ondan destek alan kişiler maddi manevi tazminat talebinde bulunabilirler. Ölen kişinin evli olmaması halinde annesi ve babasına, evli olması halinde eşine, anne veya babanın çocuklarına destek verdiği karine olarak kabul edilir ve bu hallerde bu kişilerin destek aldıklarına dair herhangi bir ispatları aranmaz. Ölen kişinin teyzesi, dayısı, nişanlısı vb. kişilerin her halükarda ölen kişiden destek aldığını ispatlaması gerekecektir.",
            çalışma_alanlarımız_paragraf7_idarihukuku: "İdari yargıda dava türleri üçe ayrılır. Bunlar, iptal davası, tam yargı davası ve idari sözleşmelerden doğan davalardır. İYUK m. 2 gereğince, idari işlemler hakkında yetki, şekil, sebep, konu ve maksat yönlerinden biri ile hukuka aykırı olduklarından dolayı iptalleri için menfaatleri ihlal edilenler tarafından iptal davası; idari eylem ve işlemlerden dolayı kişisel hakları doğrudan ihlal edilenler tarafından tam yargı davası; tahkim yolu öngörülen imtiyaz şartlaşma ve sözleşmelerinden doğan uyuşmazlıklar hariç, kamu hizmetlerinden birinin yürütülmesi için yapılan her türlü idari sözleşmelerden dolayı taraflar arasında çıkan uyuşmazlıklara ilişkin idari sözleşmelerden doğan davalar açılabilir." +
                "Tam yargı davası; idari işlem veya eylemlerden dolayı kişisel hakları ihlal edilenler tarafından idareye karşı, maddi ve manevi zararının tazmini amacıyla açtığı bir idari dava türüdür. Tam yargı davası tipik bir tazminat davasıdır. Özel hukuktaki tazminat davalarının idari davalarda karşılığı niteliğindedir." +
                "İdari işlem ve eylemlerden dolayı kişisel hakları ihlal edilenler tam yargı davası yoluna başvurarak uğramış oldukları zararların giderilmesini talep ederler. İdare, bilerek ya da bilmeyerek, kusurlu ya da kusursuz yapılan bir takım işlem ve eylemler yoluyla çeşitli zararlara neden olabilir. İdarenin faaliyetleri neticesi ortaya çıkan bu zararlar, kişilerin malvarlıklarına yönelik olabileceği gibi kişilik haklarına yönelik de olabilir. İdarenin faaliyetleri sonucu meydana gelen her türlü zararın yine idarece tazmin edilmesi gerekmektedir. İdarenin böyle bir sorumluluğunun ortaya çıktığı durumlarda ise, idareye karşı tam yargı davası açılabilecek ve davalı idareden yargı organı aracılığıyla uğranılan zararların tazmini istenebilecektir. Uğranılan zararların tazmini yükümlülüğü, bir dava ile ortaya çıkar. İdareye karşı açılacak tazminat davalarına tam yargı davası denir." +
                " Tam yargı davası, idari işlemden kaynaklı açılıyorsa 3 şekilde açılabilir. Bunlar;" +
                "İptal davası ile birlikte," +
                "İptal davası kesinleştikten sonra" +
                "İptal davası hakkında yerel mahkeme karar verdikten sonra açılabilir.",
            ekibimiz_1: "Aydın Güven-Avukat- Yeminli Tercüman" +
                "1978 yılında İran da doğmuş, 2006 yılında İran’da Zanjan Azad Üniversitesi’nden mezun olmuştur. İran da avukatlık stajını yapmış ve bir süre İran’da çalıştıktan sonra 2011 yılında Türkiye’ye gelmiştir. Türkiye’ye gelir gelmez 2012 yılında Gazi Üniversitesi Hukuk Fakültesi Ticaret Hukuku’nda yüksek lisansına başlamıştır." +
                " 2016 yılında Türkiye de Gazi Üniversitesi Ticaret Hukuku’nda yüksek lisansını tamamlaması ardından 2016 yılında Gazi Üniversitesi Sigortacılık Bölümünde ikinci yüksek lisansına başlamış ve 2018 yılında bu bölümden de başarı ile mezun olmuştur ." +
                "2020 yılında Türkiye’de Hacettepe Üniversitesi’nde denklik derslerini tamamını vererek mezun olmuş ve 2022 yılından beri Ankara Barosu’na bağlı olarak Ankara’da Avukat olarak çalışmaktadır. Farsça ve Türkçe bilmektedir." +
                "Avukatlık mesleğinde özellikle İranlılar başta olmak üzere yabancılar hukukunda uzmanlaşmış olup,  Hukuk, Ceza, İdari, Mülteci ve Vatandaşlık Hukuku ile diğer özel hukuk alanlarında çalışmaktadır." +
                "Zanjan Azad Üniversitesi 2002-2006" +
                "Gazi Üniversitesi Ticaret Hukuku Yüksek Lisans-2012-2016" +
                "Gazi Üniversitesi Sigortacılık Yüksek Lisans-2016-2018" +
                "Hacettepe Üniversitesi Hukuk Fakültesi  -2020-2021" +
                "Avukat Ankara Barosu-2022-Devam ediyor" +
                "Yeminli Tercüman-2021-Devam ediyor",
            ekibimiz_tel_1: "0542 405 60 94",
            ekibimiz_2: "Abdurrahman PEHLİVAN – Avukat ve Arabulucu" +
                "1990 yılında Başkent Ankara’da doğmuş.2012 yılında Ankara Gazi Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. Ankara Barosu’na bağlı olarak 2013 yılından beri Ankara’da Avukat olarak çalışmaktadır." +
                " 2018 yılında Uzlaştırmacı unvanını alarak Ankara Cumhuriyet Başsavcılığı’na bağlı olarak Uzlaştırmacı olarak çalışmaktadır. 2019 yılında Atılım Üniversitesi Kamu Hukuku yüksek lisans eğitimine başlamış ve halen devam etmektedir. 2020 yılından itibaren de Arabulucu unvanını alarak mesleğine devam etmektedir. Arabulucu olarak İş hukuku ve Ticaret Hukuku ile Sigorta Hukuku alanlarında sertifikalar alarak Uzman Arabulucu olarak görevine devam etmektedir." +
                "2016 yılından beri Ankara Barosu Mülteci Hakları Merkezi’nde üye olarak aktif görev almaktadır. Ankara Barosu’nda mülteci hukuku dışında Tüketici Hakları Merkezi Kurulu ile Vergi ve İdare Hukuku Kurulu gibi kurullarda görev almıştır." +
                "Avukatlık mesleğinde mülteci hukuku, yabancılar hukuku, vatandaşlık başvuruları ve takibi , boşanma  davaları, taşınmaz hukuku, miras hukuku, tazminat hukuku, idare hukuku, iş ve sosyal güvenlik hukuku, sigorta hukuku, ceza hukuku, kira hukuku ile diğer özel hukuk alanlarında çalışmaktadır. İngilizce bilmektedir." +
                "Ankara Gazi Üniversitesi Hukuk Fakültesi 2008 – 2012 " +
                "Avukat Ankara Barosu 2013 – Devam ediyor" +
                "Ankara Cumhuriyet Başsavcılığı  Uzlaştırmacı – 2018 – Devam ediyor" +
                "Atılım Üniversitesi Kamu Hukuku Yüksek Lisans 2019 – Devam ediyor" +
                "Arabulucu – 2020 – Devam ediyor",
            ekibimiz_tel_2: "0554 303 98 54",
            ekibimiz_3: "Canan Pehlivan Avukat-Bilirkişi-Arabulucu" +
                "1990 yılında Bayburt’ta doğmuştur. Konyaekibimiz_tel_1:’da Lise Eğitimini tamamlaması ardından 2012 yılında Ankara Gazi Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. Ankara Barosu’na bağlı olarak 2013 yılından beri Ankara’da Avukat olarak çalışmaktadır." +
                "2019 yılında Atılım Üniversitesi Kamu Hukuku yüksek lisans eğitimine başlamış ve halen devam etmektedir. 2020 yılından itibaren de Arabulucu unvanını alarak mesleğine devam etmektedir. Arabulucu olarak İş hukuku, Ticaret Hukuku ile Sigorta Hukuku alanlarında sertifikalar alarak Uzman Arabulucu olarak görevine devam etmektedir." +
                "Ankara Barosu’nda Fikri Mülkiyet ve Rekabet Kurulu, Tüketici Hakları Merkezi Kurulu ile Vergi ve İdare Hukuku Kurulu gibi kurullarda görev almıştır. Ayrıca Fikri ve Mülkiyet Hukuku-Marka Hukuku kapsamında Bilirkişilik yapmaktadır." +
                "Avukatlık mesleğinde yabancılar hukuku, vatandaşlık başvuruları ve takibi , fikri ve mülkiyet hukuku, boşanma  davaları, yabancıların boşanma davaları,  taşınmaz hukuku, miras hukuku, tazminat hukuku, idare hukuku, iş ve sosyal güvenlik hukuku, sigorta hukuku, ceza hukuku, kira hukuku ile diğer özel hukuk alanlarında çalışmaktadır." +
                "Ankara Gazi Üniversitesi Hukuk Fakültesi 2008 – 2012" +
                "Avukat Ankara Barosu 2013 – Devam ediyor" +
                "Atılım Üniversitesi Kamu Hukuku Yüksek Lisans 2019 – Devam ediyor" +
                "Arabulucu – 2020 – Devam ediyor" +
                "Bilirkişilik- 2021 – Devam ediyor",
            iletişim_adres: "Sıhhıye/ANKARA",
            çalışma_günleri: "Pazartesi - Cuma",
            çalışma_saatleri: "09.00 - 18.00",
            mail_yazı: "Bize mesaj atabilirsiniz!",
        },
        // Diğer diller buraya eklenebilir...
    };

    const elementsToTranslate = $("[data-translate]"); // Tüm çeviri elementlerini bir kez seç

    // Dil seçimi yapıldığı zaman localStorage'a kaydet ve sayfayı güncelle
    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        updateContent(lang);
    }

    // Sayfa yüklendiğinde veya dil seçimi değiştiğinde içeriği güncelle
    function updateContent(lang) {
        // Tüm metinleri tek bir seferde hazırla
        let translations = content[lang];

        // Seçilen tüm elementlerde hızlı bir şekilde dön
        for (let i = 0; i < elementsToTranslate.length; i++) {
            let element = elementsToTranslate[i];
            let key = $(element).data("translate");  // jQuery kullanarak data-translate'i al
            if (translations[key]) {
                element.textContent = translations[key];  // Metin içeriğini direkt değiştir
            }
        }
    }

    // Sayfa yüklendiğinde dil tercihini kontrol et
    $(document).ready(function () {
        const savedLang = localStorage.getItem('language') || 'en'; // Varsayılan dil 'en'
        updateContent(savedLang);
    });

    // Dil seçimi butonlarına tıklanma olayı ekleyin
    $(".lang-select").on("click", function () {
        const selectedLang = $(this).data("lang");
        setLanguage(selectedLang);
    });

  // //------- Sticky Header -------//
  // $(".sticky-header").sticky();

  //------- video popup -------//
  $(".hero-banner__video, .video-play-button").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  // //------- mailchimp --------//  
	// function mailChimp() {
	// 	$('#mc_embed_signup').find('form').ajaxChimp();
  // }
  // mailChimp();

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


  if ($('.blog-slider').length) {
    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: true,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        navText : ["<div class='blog-slider__leftArrow'><img src='img/home/left-arrow.png'></div>","<div class='blog-slider__rightArrow'><img src='img/home/right-arrow.png'></div>"],
        responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    })
  }

  /*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
    if ($('.testimonial').length) {
        $('.testimonial').owlCarousel({
            loop: true,
            margin: 30,
            items: 5,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1
                }
            }
        })
    }

  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();
  
});


