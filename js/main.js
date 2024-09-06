$(function() {
  "use strict";

    const content = {
        fa: {
            ofis_tel_no: "شماره تلفن دفتر : 0312 231 99 40",
            eposta: "pehlivanguvenhukuk@gmail.com",
            farsça: "فارسی",
            türkçe: "ترکی",
            pehlivanguvenhukukbürosu:" موسسه حقوقی پهلوان گوون",
            anasayfa: "صفحه اصلی",
            hakkımızda: "درباره ما",
            çalışmaalanlarımız: "فعالیت های ما",
            ekibimiz: " تیم ما   ",
            blog: " وبلاگ",
            iletişim: " ارتباط با ما",
            hızlıveetkilihukukidanışmanlıkhizmeti: "خدمات مشاوره حقوقی سریع و موثر",
            hakkımızda_paragraf1: "  ما به عنوان موسسه حقوقی پهلوان گوون مفتخریم که با بالاترین کیفیت خدمات مشاوره حقوقی و وکالت را به مشتریان خود ارائه دهیم." +
                "دفتر ما دارای بینش حقوقی عمیقی است، که با گردآوری سیستم حقوقی مختلف به ویژه در زمینه های حقوق خارجی ها، قانون تجارت، قانون بیمه و حقوق پناهندگان که تجربه بالای دارند.\n",
            hakkımızda_paragraf2:"وکیل آیدن گوون ( خویینی)  عضو کانون وکلای آنکارا حرفه حقوقی خود را از ایران شروع کرده و در ترکیه ادامه داده، حقوق اتباع خارجی به ویژه ایرانیان تخصص دارد. او به زبان های فارسی و ترکی صحبت می کند و در زمینه های حقوقی، کیفری، اداری، پناهندگی و حقوق شهروندی  به موکلین خود بصورت تخصصی و حرفه ای مشاوره میدهد.",
            hakkımızda_paragraf3:"وکیل عبدالرحمن پهلیوان عضو کانون وکلای آنکارا در زمینه های مختلفی از جمله حقوق پناهندگی، حقوق املاک، حقوق ارث و حقوق جبران خسارت فعالیت می کند و همچنین مصالحه کننده و بصورت تخصصی عضو شوارای حل اختلاف آنکارا می باشد. او انگلیسی صحبت می کند و خدمات حقوقی جامعی را به مشتریان خود ارائه می دهد.",
            hakkımızda_paragraf4:"وکیل جانان پهلوان عضو کانون وکلای آنکارا در زمینه هایی مانند حقوق مالکیت معنوی و رقابت، حقوق علائم تجاری و حقوق املاک و مستغلات تخصص دارد و و همچنین مصالحه کننده و بصورت تخصصی عضو شوارای حل اختلاف آنکارا می باشد. او دانش عمیقی در زمینه های مختلف حقوق خصوصی دارد. ",
            hakkımızda_paragraf5:"ما بعنوان موسسه حقوقی پهلوان گوون ، مبنا  را به ارائه راه حل های موثر و نتیجه گرا برای کلیه نیازهای حقوقی موکلین خود  اتخاذ کرده ایم.",
            yabancılarhukuku: " حقوق خارجی ها ",
            işhukuku:" حقوق کار ",
            ailehukukuveboşanma: "حقوق خانواده ",
            mirashukuku: " حقوق ارث و میراث ",
            kirahukuku: " حقوق موجر و مستاجر ",
            tazminathukuku: " حقوق ضرر و زیان ",
            idaridavalar: " دعاوی اداری ",
            dahafazlası:"و خدمات دیگر ",
            tümçalışmaalanlarımız: "کلیه فعالیت های ما ",
            deneyimlikadrohızlıçözüm: "با افراد مجرب و حل سریع مسله ",
            alanındauzmandeneyimliavukatlarımızlahızlıveetkilihizmetlerPEHLİVANGÜVENHukukBürosunda: "خدمات سریع و موثر با وکلای مجرب و متخصص در زمینه های خود در موسسه حقوقی پهلوان گوون ",
            virgül: ",",
            bizeulaşın: " ارتباط با ما",
            adres_necatibeycaddesi_no_40_10: " آدرس : جاده نجاتی بی، پلاک 40 واحد 10 چانکایا- آنکارا ",
            tel: " تلفن ",
            mail_pehlivanguvenhukuk_gmail_com: "    ایمیل : pehlivanguvenhukuk@gmail.com",
            menü: " منو ",
            çalışma_alanlarımız_paragraf1_yabancılarhukuku_kısa: " حوزه فیالیت ما – پاراگراف 1-حقوق خارجی ها" +
                " خارجیانی که در کشور ما تابعیت می گیرند، اجازه کار و اقامت در کشور ما، خرید ملک توسط خارجیان، و مسائل دیگری مانند طلاق اتباع خارجی و غیر در این زمینه ارزیابی می شود.\n",
            çalışma_alanlarımız_paragraf1_yabancılarhukuku_uzun:[
                " حوزه فیالیت ما – پاراگراف 1-حقوق خارجی ها" ,
                " خارجیانی که در کشور ما تابعیت می گیرند، اجازه کار و اقامت در کشور ما، خرید ملک توسط خارجیان، و مسائل دیگری مانند طلاق اتباع خارجی و غیر در این زمینه ارزیابی می شود.\n" ,
                "[bold] برخی از موارد مربوط به قانون اتباع خارجی در زیر ذکر شده است:[/bold]\n" ,
                "• شرایط تجارت اتباع خارجی  در کشور ما\n" ,
                "• مراحل تنظیم قراردادهای خرید و فروش، حمل و نقل، ساخت و ساز و خدمات،\n" ,
                "•  اتباع خارجی که در بانک های ترکیه حساب سپرده باز می کنند،\n" ,
                "•  مراحل تعقیب و تحقیقات علیه اتباع خارجی در دادگاها، \n" ,
                "• اجرا احکام، تقسیم اموال مشترک، حضانت فرزند،\n" ,
                "• به طور معمولی، درخواست و اخذ تابعیت  درترکیه،\n" ,
                "•  به طور استثنایی درخواست و اخذ تابعیت در ترکیه،\n" ,
                "• اخذ تابعیت از طریق ازدواج و ضوابط در نظر گرفته شده در این خصوص\n" ,
                "• ابطال و پیگیری مراحل مربوطه در صورت رد درخواست شهروندی،\n" ,
                "• اقدامات و تشریفات مربوط به ترک تابعیت، دوتابعیتی و موارد چند تابعیتی.\n",
            ],

            çalışma_alanlarımız_paragraf2_işhukuku_kısa: "قانون کار یک حوزه خدماتی است که از نظر زندگی کاری و شرایط شغلی حائز اهمیت است.",
            çalışma_alanlarımız_paragraf2_işhukuku_uzun: [
                "قانون کار یک حوزه خدماتی است که از نظر زندگی کاری و شرایط شغلی حائز اهمیت است." ,
                " دادگاه های کار به پرونده هایی بین کارفرمایان و کارمندان رسیدگی می کنند که حوزه تخصصی آنها اختلافات مربوط به کار است که به دلیل مشکلات شغلی و حقوق مطالبات ناشی از زندگی کاری شکل می گیرد.\n" ,
                "[bold]➥پرونده هایی که عموماً در این دادگاه ها رسیدگی می شود به شرح زیر است:[/bold]\n" ,
                "• پرونده اعاده به کار،\n" ,
                "• پرونده جبران خسارت های ناشی از کار،\n" ,
                "• دعوی حقوق و دستمزد،\n" ,
                "• دعوای غرامت اخطاریه،\n" ,
                "• پرونده تعیین خدمات انجام شده،\n" ,
                "• پرونده غرامت نیت بد،\n" ,
                "• دعوی مطالبه اضافه کار،\n" ,
                "• موارد فسخ عادلانه یا غیرمنصفانه،\n" ,
                "• دعاوی در خصوص مطالبات حقوق،\n" ,
                "• دریافت مطالبه تعطیلات ملی و تعطیلات هفته ،\n" ,
                "• مطالبه غرامت ناشی از ناتوانی در کار و فوت،\n" ,
                "• سایر موارد ناشی از کار و روابط شغلی.،\n" ,
            ],

            çalışma_alanlarımız_paragraf3_ailehukuku_boşanma_kısa: "قانون مدنی ترکیه که به شماره 4721  می باشد قانون خانواده را تشکیل می دهد. به عبارت دیگر قانون خانواده بر اساس قانون مدنی ترکیه شکل می گیرد. تمام مسائل مربوط به خانواده در حیطه حقوق خانواده است. علاوه بر این، قانون مدنی گاهی اوقات در شرایط طلاق خارجی هایی که در ترکیه ازدواج کرده اند، اعمال شود.",
            çalışma_alanlarımız_paragraf3_ailehukuku_boşanma_uzun: [
                "قانون مدنی ترکیه که به شماره 4721  می باشد قانون خانواده را تشکیل می دهد. به عبارت دیگر قانون خانواده بر اساس قانون مدنی ترکیه شکل می گیرد. تمام مسائل مربوط به خانواده در حیطه حقوق خانواده است. علاوه بر این، قانون مدنی گاهی اوقات در شرایط طلاق خارجی هایی که در ترکیه ازدواج کرده اند، اعمال شود.\n" ,
                "[bold]➥مطابق با قوانین خانواده، موضوعات زیر شامل قوانین خانواده می شود:[/bold]\n" ,
                "• شرایط ازدواج قانونی\n" ,
                "• مراحل و شرایط ازدواج،\n" ,
                "• شرایط طلاق و نحوه وقوع طلاق\n" ,
                "• شرایط طلاق توافقی\n" ,
                "• طلاق اعتراضی،\n" ,
                "• تقسیم مال مشترک،\n" ,
                "• تعریف تقسیم مال مشترک ،\n" ,
                "• مسائل مربوط به مسکن خانواده،\n" ,
                "• مسائل مربوط به نسب خانوادگی،\n" ,
                "• شرایط فرزند خواندگی،\n" ,
                "• شرایط حضانت و تعاریف حضانت،\n" ,
                "• شرایط و میزان دریافت نفقه فرزندان\n" ,
                "• حقوق کودکان،\n" ,
                "• حقوق زنان،\n" ,
                "• مسائل سرپرستی،\n" ,
                "• مسائل مربوط به نهاد قیمومت،\n" ,
                "• شرایط کمک به نفقه،\n" ,
                "• شرایط زندگی مشترک خارج از ازدواج،\n" ,
                "• پیشگیری از خشونت خانگی،\n" ,
                "• مجازات کودک ربایی،\n" ,
                "• پیشگیری از کودک آزاری،\n" ,
                "• مسائل مربوط به جایگزین رحم  مادر،\n" ,
                "• موارد پدری،\n" ,
                "• پرونده های فسخ ازدواج،\n" ,
                "• مسائل مربوط به به رسمیت شناختن حکم دادگاه های خارجی توسط دادگاه های ترکیه.،\n",
            ],

            çalışma_alanlarımız_paragraf4_mirashukuku_kısa: " حقوق ارث یکی از موضوعات مهم در رشته حقوق خصوصی است. این شاخه ای از حقوق است که حقوق و مطالبات قانونی کسانی را که پس از فوت شخص مستحق ارثی هستند و نیز اختیارات مربوط به فوت را تعیین می کند. قانون ارث از نظر ماهیت واگذاری ها و به اشتراک گذاری ارزش دارایی ها بین ذینفعان پس از مرگ اهمیت دارد.",
            çalışma_alanlarımız_paragraf4_mirashukuku_uzun: [
                "حقوق ارث یکی از موضوعات مهم در رشته حقوق خصوصی است. این شاخه ای از حقوق است که حقوق و مطالبات قانونی کسانی را که پس از فوت شخص مستحق ارثی هستند و نیز اختیارات مربوط به فوت را تعیین می کند. قانون ارث از نظر ماهیت واگذاری ها و به اشتراک گذاری ارزش دارایی ها بین ذینفعان پس از مرگ اهمیت دارد.\n" ,
                "[bold]➥در زمینه حقوق ارث به طور کلی دعاوی زیر می شود انجام داد:[/bold]\n" ,
                "• دعوای بطلان تصرفاتی که مورث به تقلب در آن قبل از مرگ انجام داده است.\n" ,
                "• دعوای ابطال تصرفاتی که موجب تداخل با سهم الرث ثلث میراث وراث می باشد.\n" ,
                "• پرونده فسخ وراثت،\n" ,
                "• دعوای وراثت،\n" ,
                "• دعوای رد ترکه،\n" ,
                "• پرونده انصراف از ارث،\n" ,
                "• ابطال سند انحصار وراثت\n" ,
                "• ابطال سند مالکیت و موارد ثبتی ناشی از وراثت،\n" ,
                "• دعوای انحلال شرکت تضامنی ناشی از وراثت،\n" ,
                "• دعوی در مورد ثلث ارث :\n" ,
            ],

            çalışma_alanlarımız_paragraf5_kirahukuku_kısa: "پرونده هایی که در قانون اجاره مطرح می شود عموماً مربوط به اختلافات بین مستاجر و موجر است، در این زمینه مواردی که به ما خدمت می کنیم، تعیین اجاره، تعدیل اجاره بها و موارد تخلیه است.",
            çalışma_alanlarımız_paragraf5_kirahukuku_uzun: [
                "پرونده هایی که در قانون اجاره مطرح می شود عموماً مربوط به اختلافات بین مستاجر و موجر است، در این زمینه مواردی که به ما خدمت می کنیم، تعیین اجاره، تعدیل اجاره بها و موارد تخلیه است.\n"  ,
                "[bold] ➥این دلایل به وضوح در ماده 350 و مواد بعدی قانون تعهدات ترکیه تنظیم شده است. بر این اساس؛ [/bold]\n" ,
                "• دعوی تخلیه به دلیل نیاز موجر و بستگان وی به مال مورد اجاره.\n" ,
                "• پرونده تخلیه به دلیل نیاز مالک جدید،\n" ,
                "• مورد تخلیه موجر به منظور بازسازی یا بازسازی ملک مورد اجاره،\n" ,
                "• تعهد مستاجر به تخلیه،\n" ,
                "• عدم پرداخت اجاره بها توسط مستاجر،\n" ,
                "• مستاجر محل سکونت دیگری برای زندگی دارد،\n" ,
                "• اجاره ملک مورد اجاره توسط مستاجر به دیگری،\n" ,
                "• تخلیه املاک مورد اجاره از طریق اجرا،\n" ,
                "• اخراج بدون حکم به دلیل عدم پرداخت اجاره\n" ,
            ],

            çalışma_alanlarımız_paragraf6_tazminathukuku_kısa: "هدف قانون جبران خسارت جبران خسارت مادی و معنوی افراد است. این شاخه حقوقی است که خسارات وارده به مردم را در نتیجه اقدامات ناعادلانه ترمیم می کند.",
            çalışma_alanlarımız_paragraf6_tazminathukuku_uzun: [
                "هدف قانون جبران خسارت جبران خسارت مادی و معنوی افراد است. این شاخه حقوقی است که خسارات وارده به مردم را در نتیجه اقدامات ناعادلانه ترمیم می کند.\n" ,
                "در دو زمینه مادی و معنوی ارزیابی می شود. غرامت مالی به دلایل زیر باز می شود:\n" ,
                "پرونده غرامت در دو زمینه مادی و معنوی رسیدگی می شود. بیشتر به زیر شاخه های زیر تقسیم می شود:\n" ,
                "دعاوی اقامه شده در موارد بازداشت ناعادلانه،\n" ,
                "دعاوی ناشی از بیماری های شغلی\n" ,
                "دعاوی جبران خسارت وارده در موارد فوت یا جراحت شدید در اثر حوادث کار،\n" ,
                "پرونده های جبران خسارت وارده در نتیجه فوت یا جراحت جدی در نتیجه حوادث رانندگی،\n" ,
                "دعاوی جبران خسارت در محدوده حمایت از حقوق شخصی،\n" ,
                "دعاوی جبران خسارت وارده به دلیل قصور (حالت های ناشی از خطای پزشک).\n" ,
                "غرامت غیر مادی به قربانی داده می شود تا رنج اخلاقی فرد یا افراد در نتیجه اعمال ناعادلانه کاهش یابد.   \n" ,
                "[bold]غرامت ناشی از حوادث رانندگی :[/bold]\n" ,
                "[bold] ➥کاهش ارزش خودرو[/bold]\n" ,
                "• استهلاک خودرو که در اثر یک حادثه رانندگی آسیب دیده و در نتیجه تعمیر، ارزش خودرویی کم شده و  در بازار ارزش خودرو به ارزش دست دوم  افتاده است. \n" ,
                "• از دست دادن ارزش وسیله نقلیه عبارت است از تفاوت بین ارزش خسارت وسیله نقلیه در تاریخ حادثه و ارزش پس از اصلاح خسارت.\n" ,
                "گر وسیله نقلیه ای تصادف کند و آسیب ببیند شکی نیست که ارزش اقتصادی آن هر چقدر هم که تعمیر شود کاهش پیدا می کند. دیوان عالی کشور نیز در بسیاری از تصمیمات خود این موضوع را می پذیرد.\n" ,
                "[bold] ➥غرامت ناشی از خسارات بدنی[/bold]\n" ,
                "• در حادثه رانندگی براب جراحات وارده، شخص مصدوم می تواند برای جبران خسارت مادی/معنوی شکایت کند. در اینجا شخص آسیب دیده می تواند جبران خسارت مالی از دست دادن نیروی کاری که در زندگی کاری خود متحمل شده یا خواهد شد و همچنین غم و اندوهی که در اثر حادثه رانندگی تجربه کرده است را مطالبه کند.\n" ,
                "• در صورت وقوع حوادث رانندگی فوتی، افرادی که در زمان حیات متوفی که زندگی شان از طریق وی تامین می‌شد، می‌توانند مطالبه غرامت مادی و معنوی کنند.\n" ,
                "این فرض پذیرفته شده است که متوفی در صورت متاهل نبودن  مادر و پدر، در صورت متاهل بودن همسر، فرزندان مادر یا پدر را تامین مالی کرده  این افراد نیاز به اثباط و ارایه دلیل ندارند و می توانند غرامت مادی و معنوی مطالبه کنند.   عمه، دایی، نامزد متوفی و... در صورتی که  ثابت کنند از طرف متوفی تامین مالی می شده اند نیز می توانند غرامت مادی و معنوی مطالبه کنند.»\n" ,
            ],

            çalışma_alanlarımız_paragraf7_idarihukuku_kısa:"در عدالت اداری سه نوع پرونده وجود دارد. اینها پرونده های ابطال، پرونده های صلاحیت کامل و پرونده های ناشی از قراردادهای اداری است.",
            çalışma_alanlarımız_paragraf7_idarihukuku_uzun:[
                " در عدالت اداری سه نوع پرونده وجود دارد. اینها پرونده های ابطال اداری، پرونده های تضمینات کامل و پرونده های ناشی از قراردادهای اداری است. بر اساس ماده2، قانون دادرسی اداری دعوای بطلان از طرف کسانی اقامه می‌شود که منافع آنها برای بطلان معاملات اداری به دلیل غیرقانونی بودن آنها از جهات حجیت، شکل، دلیل، موضوع  اقامه می‌شود. تضمینات کامل  کسانی که حقوق شخصی آنها مستقیماً به دلیل اقدامات و رویه های اداری نقض شده است. به استثنای اختلافات ناشی از شرایط امتیاز و قراردادهایی که مستلزم داوری هستند، دعاوی ناشی از قراردادهای اداری در مورد اختلافات ناشی از انواع قراردادهای اداری منعقد شده برای اجرای یکی از خدمات عمومی ممکن است اقامه شود." ,
                "پرونده تضمینات کامل؛ نوعی دعوای اداری است که برای جبران خسارات مادی و معنوی آن ها از سوی کسانی که حقوق شخصی آنها در اثر تشریفات یا اقدامات اداری تضییع شده است، اقامه می شود. دعوای صلاحیت کامل یک دعوای جبران خسارت معمولی است. معادل پرونده های جبران خسارت در حقوق خصوصی در پرونده های اداری است.\n" ,
                "کسانی که حقوق شخصی آنها بر اثر تشریفات و اقدامات اداری تضییع شده است، با درخواست تضمینات کامل، جبران خسارات وارده را می طلبند. اداره ممکن است از طریق معاملات و اعمال معین، دانسته یا ندانسته، بی عیب یا بدون عیب، خسارات مختلفی را وارد کند. این خسارات که در نتیجه فعالیت های اداره ایجاد می شود ممکن است متوجه دارایی های مردم یا حقوق شخصی آنها باشد. هر گونه خسارتی که در نتیجه فعالیت های اداره ایجاد شود باید توسط اداره جبران شود. در مواردی که چنین مسئولیتی بر عهده اداره باشد، ممکن است دعوای تضمینات کامل علیه اداره اقامه شود و از اداره خوانده خواسته شود تا خسارات وارده را از طریق مرجع قضایی جبران کند. الزام به جبران خسارات وارده با طرح دعوی حقوقی ناشی می شود. دعاوی جبران خسارتی که باید علیه اداره اقامه شود، دعاوی تضمینات کامل نامیده می شود.\n" ,
                "[bold] ➥در صورتی که دعوای تضمینات کامل به دلیل یک اقدام اداری اقامه شود به 3 طریق قابل طرح است. اینها؛ [/bold]\n" ,
                "• با پرونده ابطال،\n" ,
                "• پس از قطعی شدن پرونده ابطال\n" ,
                "• پس از تصمیم دادگاه محلی می توان پرونده ابطال را تشکیل داد.\n",
            ],

            ekibimiz_1: [
                "<h2><p>AYDIN GÜVEN - وکیل - مترجم قسم خورده </p></h2>",
                "</p>  وکیل آیدین گوون وی  در ایران به دنیا آمد و در سال 2006 از دانشگاه آزاد زنجان فارغ التحصیل شد. او دوره کارآموزی وکالت خود را در ایران گذراند و پس از مدتی کار در ایران در سال 2011 به ترکیه آمد. به محض ورود به ترکیه، در سال 2012 مدرک کارشناسی ارشد خود را در رشته حقوق تجارت در دانشکده حقوق دانشگاه غازی آغاز کرد.<p>",
                "</p> وی پس از گذراندن دوره کارشناسی ارشد در رشته حقوق تجارت در دانشگاه غازی ترکیه در سال 2016، دومین دوره کارشناسی ارشد خود را در رشته بیمه در دانشگاه غازی در سال 2016 آغاز کرد و در سال 2018 با موفقیت از این گروه فارغ التحصیل شد.<p>",
                "</p> وی در سال 2020 با گذراندن کلیه دروس معادل سازی از دانشگاه Hacettepe ترکیه فارغ التحصیل شد و از سال 2022 به عنوان وکیل در آنکارا وابسته به کانون وکلای آنکارا مشغول به کار است. فارسی و ترکی صحبت می کند.<p>",
                "</p>  او در حرفه حقوقی خود در زمینه حقوق اتباع خارجی به ویژه ایرانیان تخصص دارد و در زمینه های مدنی، کیفری، اداری، حقوق پناهندگی و تابعیت و سایر حقوق خصوصی فعالیت می کند.<p>",
                "✦ انشگاه آزاد زنجان 2002-2006",
                "✦ کارشناسی ارشد حقوق تجارت دانشگاه غازی-2012-2016",
                "✦ کارشناسی ارشد بیمه دانشگاه غزی-2016-2018",
                "✦ دانشکده حقوق دانشگاه Hacettepe – 2020-2021",
                "✦ وکیل کانون وکلای آنکارا-2022-در حال انجام",
                "✦ مترجم رسمی ",
                "<p></p>",
                // "✦ ",
            ],
            ekibimiz_tel_1: "0542 405 60 94",

            ekibimiz_2: [
                "<h2><p>Abdurrahman PEHLİVAN – وکیل - میانجی </p></h2>" ,
                "</p> او در سال 1990 در پایتخت آنکارا به دنیا آمد و در سال 2012 از دانشکده حقوق دانشگاه گازی آنکارا فارغ التحصیل شد. او از سال 2013 به عنوان وکیل در آنکارا و وابسته به کانون وکلای آنکارا مشغول به کار است.<p>",
                "</p> او در سال 2018 عنوان داور رسمی دادگستری دریافت کرد و به عنوان داور رسمی دادگستری زیر نظر دفتر دادستان عمومی آنکارا کار می کند. وی دوره کارشناسی ارشد خود را در رشته حقوق عمومی در دانشگاه آتلیم در سال 2019 آغاز کرد و همچنان ادامه دارد. وی از سال 2020 با دریافت عنوان میانجی به حرفه خود ادامه می دهد. وی با اخذ گواهینامه در رشته های حقوق کار، تجارت و بیمه به وظیفه خود به عنوان داور رسمی دادگستری خبره ادامه می دهد.<p>",
                "</p> او از سال 2016 به عنوان یکی از اعضای کانون حقوق پناهندگان کانون وکلای آنکارا فعال بوده است. به غیر از قانون پناهندگی، او همچنین در هیئت هایی مانند هیئت مدیره مرکز حقوق مصرف کننده و هیئت حقوق مالیاتی و اداری در کانون وکلای آنکارا خدمت می کرد.<p>",
                "</p> وی در حرفه حقوقی خود در زمینه های حقوق پناهندگی، حقوق اتباع خارجی، درخواست تابعیت و پیگیری، پرونده های طلاق، حقوق املاک، حقوق ارث، حقوق جبران خسارت، حقوق اداری، کار و تامین اجتماعی، حقوق بیمه، کیفری فعالیت می کند. قانون، حقوق اجاره و سایر حقوق خصوصی. او هم انگلیسی صحبت می کند.<p>",
                "✦ دانشکده حقوق دانشگاه گازی آنکارا 2008 – 2012",
                "✦ وکیل کانون وکلای آنکارا 2013 - در حال انجام",
                "✦ مصالحه کننده دفتر دادستانی عمومی آنکارا - 2018 - در حال انجام",
                "✦ مدرک کارشناسی ارشد حقوق عمومی دانشگاه آتلیم 2019 - در حال انجام",
                "✦ میانجی – 2020 – در حال انجام»",
                "<p></p>",
            ],
            ekibimiz_tel_2: "0554 303 98 54",

            ekibimiz_3:[
                "<h2><p>Canan Pehlivan - وکیل - شاهد کارشناس - میانجی </p></h2>" ,
                "</p> او در سال 1990 در بایبورت به دنیا آمد. پس از اتمام تحصیلات دبیرستانی خود در قونیه، در سال 2012 از دانشکده حقوق دانشگاه غازی آنکارا فارغ التحصیل شد. او از سال 2013 به عنوان وکیل در آنکارا و وابسته به کانون وکلای آنکارا مشغول به کار است.<p>",
                "</p> وی دوره کارشناسی ارشد خود را در رشته حقوق عمومی در دانشگاه آتلیم در سال 2019 آغاز کرد و همچنان ادامه دارد. وی از سال 2020 با دریافت عنوان داور رسمی دادگستری به حرفه خود ادامه می دهد. وی با اخذ گواهینامه در رشته های حقوق کار، تجارت و بیمه به وظیفه خود به عنوان داور رسمی دادگستری ادامه می دهد.<p>",
                "</p> او در هیئت هایی مانند هیئت مالکیت فکری و رقابت، هیئت مدیره مرکز حقوق مصرف کننده و هیئت حقوقی مالیاتی و اداری در کانون وکلای آنکارا خدمت کرد. وی همچنین به عنوان کارشناس حقوق معنوی و مالکیت - حقوق علائم تجاری فعالیت می کند.<p>",
                "</p> در حرفه وکالت، حقوق اتباع خارجی، درخواست تابعیت و پیگیری، حقوق معنوی و مالکیت، دعاوی طلاق، طلاق اتباع خارجی، حقوق املاک، حقوق ارث، قانون جبران خسارت، حقوق اداری، قانون کار و تامین اجتماعی، قانون بیمه، حقوق جزا، حقوق اجاره و غیره او در زمینه های حقوق خصوصی فعالیت می کند.<p>",
                "✦ دانشکده حقوق دانشگاه گازی آنکارا 2008 – 2012",
                "✦ وکیل کانون وکلای آنکارا 2013 - در حال انجام",
                "✦ مدرک کارشناسی ارشد حقوق عمومی دانشگاه آتلیم 2019 - در حال انجام",
                "✦ داور رسمی دادگستری - 2020 - در حال انجام",
                "✦ کارشناس رسمی دادگستری - 2021 - در حال انجام",
                "<p></p>",
            ],
            ekibimiz_tel_3: "0554 303 98 54",

            iran_ekibimiz_1:[
                "<h2><p>Mehdi Ceferzade</p></h2>",
                "</p>وی در حرفه حقوقی خود در زمینه های حقوق پناهندگی، حقوق اتباع خارجی، درخواست تابعیت و پیگیری، پرونده های طلاق، حقوق املاک، حقوق ارث، حقوق جبران خسارت، حقوق اداری، کار و تامین اجتماعی، حقوق بیمه، کیفری فعالیت می کند. قانون، حقوق اجاره و سایر حقوق خصوصی. او به زبان های انگلیسی، فارسی و ترکی صحبت می کند.<p>",
                "➥[bold]تحصیلات:[/bold] دانشگاه تبریز",
                "✦ دانشکده حقوق 2000-2004  کارشناسی تبریز/ایران",
                "✦ کارشناسی ارشد 2007-2011     حقوق خصوصی دانشگاه پیام نور تهران/ایران",
                "✦ شغل: کارآموزی وکالت کانون وکلای مرکز",
                "✦ وکیل دادگستری مرکز تهران عضو 2008 ",
                "<p></p>",
                "➥[bold]حرفه شغلی:[/bold]",
                "✦ کارآموزی وکالت کانون وکلای مرکز",
                "✦ وکیل دادگستری مرکز تهران عضو 2008",
                "<p></p>",
                "[bold] آدرس: [/bold] تهران-میدان توحید-خیابان اسکندری شمالی-پلاک47-طبقه 3-واحد11",
                "<p></p>",
            ],
            iran_ekibimiz_1_tel:"",

            iran_ekibimiz_2:[
                "<h2><p>Hamid Valaei</p></h2>",
                "</p>وی در حرفه حقوقی خود در زمینه های حقوق پناهندگی، حقوق اتباع خارجی، درخواست تابعیت و پیگیری، پرونده های طلاق، حقوق املاک، حقوق ارث، حقوق جبران خسارت، حقوق اداری، کار و تامین اجتماعی، حقوق بیمه، کیفری فعالیت می کند. قانون، حقوق اجاره و سایر حقوق خصوصی. او به زبان های انگلیسی، فارسی و ترکی صحبت می کند.<p>",
                "➥[bold]تحصیلات:[/bold] دانشگاه تبریز",
                "✦  دانشکده حقوق 2000-2004  کارشناسی تبریز/ایران",
                "✦ کارشناسی ارشد 2009-2012 دانشکده حقوق دانشگاه تبریز",
                "✦ دکتری 2023- در حال انجام دانشکده حقوق دانشگاه تبریز",
                "<p></p>",
                "➥[bold]حرفه شغلی:[/bold]",
                "✦ وکیل دادگستری، عضو کانون وکلای دادگستری آذربایجان شرقی، 2007",
                "✦ پژوهشگر حقوق فناوری اطلاعات و ارتباطات",
                "✦ روزنامه نگار",
                "<p></p>",
                "➜ [bold]رسانه های اجتماعی که من کار می کنم و مدیریت می کنم:[/bold]",
                "<a href=\"https://azarvakil.com/\">Azar Vakil</a>",
                "<p></p>",
                "➜ [bold]کانال تلگرام و صفحه اینستاگرام گروه وکلای ایران و ترکیه[/bold]",
                "<p><a href=\"https://telegram.me/Hamidvalaei\">حمید ولایی در تلگرام</a></p>",
                "<p><a href=\"https://www.instagram.com/hamidvalae/\">حمید ولایی در اینستاگرام</a></p>",
                "➜ [bold]حقوق فناوری اطلاعات و ارتباطات کانال تلگرام و صفحه اینستاگرام[/bold]",
                "<p><a href=\"https://telegram.me/ITLAW\">ITLAW در تلگرام</a></p>",
                "<p><a href=\"https://instagram.com/itlaw.azarvakil\">ITLAW آذر وکیل در اینستاگرام</a></p>",
                "➜ [bold]کانال تلگرام و صفحه اینستاگرام گروه حقوقی آذروکیل[/bold]",
                "<p><a href=\"https://telegram.me/yasalaw\">قانون یاسا در تلگرام</a></p>",
                "<p><a href=\"https://instagram.com/azarvakil.lawfirm\">موسسه حقوقی آذر وکیل در اینستاگرام</a></p>",
                "➜ [bold]مقالات و کتابها:[/bold]",
                "مقالاتی که در مورد موضوعات مختلف در نشریات و کنفرانس های مختلف نوشته ام",
                "جزوه حقوقی که در مورد قانون جزا، قانون حمایت خانواده و قوانین چک چاپ کردم",
                "<p></p>",
                "دفتر وکالت حمید والایی : آدرس دفتر  ایران (تبریز):  تبریز- چهارراه منصور – برج ابریشم، طبقه  8 غربی – واحد 6",
                "<p></p>",
            ],
            iran_ekibimiz_2_tel:"",

            çözüm_ortaklarımız:"شرکای راه حل ما",
            iletişim_adres:  "آنکارا",
            çalışma_günleri: "دوشنبه – جمعه",
            çalışma_saatleri: "09:00 – 18:00",
            mail_yazı:  "به ما می توانید امیل بفرستن و یا از واتساپ پیام بدین",




},
        tr: {
            ofis_tel_no: "Ofis Tel: 0312 231 99 40",
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
            hakkımızda_paragraf1:"Pehlivan & Güven Hukuk Bürosu olarak, müvekkillerimize en yüksek kalitede hukuki danışmanlık ve temsil hizmetleri sunmaktan gurur duyuyoruz. Büromuz, farklı kültürleri ve hukuk sistemlerini bir araya getiren bir uzmanlıkla, özellikle yabancılar hukuku, ticaret hukuku, sigorta hukuku ve mülteci hakları alanlarında derin bilgi birikimine sahiptir." ,
            hakkımızda_paragraf2:"Av. Aydın Güven, İran'da başladığı hukuk kariyerini Türkiye'de geliştirmiş, İranlılar başta olmak üzere yabancılar hukukunda uzmanlaşmıştır. Farsça ve Türkçe bilmektedir ve müvekkillerine hukuki, cezai, idari, mülteci ve vatandaşlık hukuku alanlarında profesyonel destek sunmaktadır.",
            hakkımızda_paragraf3:"Av. Abdurrahman Pehlivan, Ankara Barosu’na bağlı olarak mülteci hukuku, taşınmaz hukuku, miras hukuku ve tazminat hukuku gibi çeşitli alanlarda çalışmakta olup, aynı zamanda uzlaştırmacı ve uzman arabulucudur. İngilizce bilmektedir ve müvekkillerine kapsamlı hukuki hizmetler sunmaktadır.",
            hakkımızda_paragraf4:"Av. Canan Pehlivan, Fikri Mülkiyet ve Rekabet Hukuku, Marka Hukuku, taşınmaz hukuku gibi alanlarda uzmanlaşmış olup, aynı zamanda bilirkişilik ve arabuluculuk görevlerini de başarıyla yürütmektedir. Çeşitli özel hukuk alanlarında derinlemesine bilgiye sahiptir.",
            hakkımızda_paragraf5:"Pehlivan & Güven Hukuk Bürosu olarak, müvekkillerimizin her türlü hukuki ihtiyaçlarına etkin ve sonuç odaklı çözümler sunmayı ilke edinmiş durumdayız. Hukukun her alanında profesyonel desteğimizle yanınızdayız.",
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
            adres_necatibeycaddesi_no_40_10: "Adres : Necatibey Caddesi No:40/10",
            tel: "Ofis Tel: 0312 231 99 40",
            mail_pehlivanguvenhukuk_gmail_com: "Mail: pehlivanguvenhukuk@gmail.com",
            menü: "Menü",
            çalışma_alanlarımız_paragraf1_yabancılarhukuku_kısa: "Yabancıların ülkemizde vatandaşlık alması, ülkemizde çalışma ve ikamet izinleri, yabancıların mülk edinimi, yabancıların boşanması gibi bir dizi konu bu kapsamda değerlendirilmektedir. " ,
            çalışma_alanlarımız_paragraf1_yabancılarhukuku_uzun: [
                "Yabancıların ülkemizde vatandaşlık alması, ülkemizde çalışma ve ikamet izinleri, yabancıların mülk edinimi, yabancıların boşanması gibi bir dizi konu bu kapsamda değerlendirilmektedir.\n"
                ,"[bold]Yabancılar hukuku ile ilgili bazı konular aşağıda sıralanmıştır:[/bold]\n"
                ,"• Yabancı uyruklu kişilerin ülkemizde ticaret yapma şartları,\n"
                ,"• Alım-satım, taşıma, inşaat ve hizmet sözleşmelerinin hazırlanma usulleri,\n"
                ,"• Yabancıların Türk bankalarında mevduat hesabı açmaları,\n"
                ,"• Yabancılara yönelik uygulanacak kovuşturma ve soruşturma işlemleri,\n"
                ,"• Tenfiz, mal paylaşımı, velayet,\n"
                ,"• Genel anlamda Türk vatandaşlığına başvuru ve vatandaşlığın alınması,\n"
                ,"• İstisnaî anlamda Türk vatandaşlığına başvuru yapılması ve vatandaşlığın alınması,\n"
                ,"• Evlenme yoluyla vatandaşlığın edinilmesi ve buna ilişkin dikkate alınan ölçütler,\n"
                ,"• Vatandaşlığı edinmeye dair başvuruların reddi halinde buna dair işlemlerin iptali ve takibi,\n"
                ,"• Vatandaşlıktan çıkma ve çifte vatandaşlık ve çoklu vatandaşlık hallerine ilişkin iş ve işlemler."
            ],
            çalışma_alanlarımız_paragraf2_işhukuku_kısa: "İş hukuku çalışma yaşamı ve iş ve istihdam koşulları bakımından önem arz eden bir hizmet alanıdır." ,
            çalışma_alanlarımız_paragraf2_işhukuku_uzun: [
                "İş hukuku çalışma yaşamı ve iş ve istihdam koşulları bakımından önem arz eden bir hizmet alanıdır." ,
                      "İş mahkemeleri çalışma yaşamında ortaya çıkan istihdam ve alacak haklarına dair sorunlar sebebiyle teşkil edilmiş bulunan uzmanlık alanı iş kaynaklı anlaşmazlıklar olan, işveren ile işçi arasındaki davalar İş Mahkemelerinde görülmektedir." ,
    "                [bold]➥Bu mahkemelerde genel olarak görülen davalar şunlardır:[/bold]" ,
    "                • İşe iade davası," ,
    "                • İş kazası tazminat davası," ,
    "                • Kıdem tazminatı alacağı davası," ,
    "                • İhbar tazminatı alacağı davası," ,
    "                • Hizmet tespiti davası," ,
    "                • Kötü niyet tazminatı davası," ,
    "                • Fazla mesai alacağı davası," ,
    "                • Haklı veya haksız fesih davaları," ,
    "                • Maaş alacağı davaları," ,
    "                • Ulusal bayram ve hafta tatili alacağı," ,
    "                • Maluliyet ve ölüm sebebiyle tazminat davası," ,
    "                • Çalışma ve istihdam ilişkisinden doğan diğer davalar.",
            ],

            çalışma_alanlarımız_paragraf3_ailehukuku_boşanma_kısa:"",
            çalışma_alanlarımız_paragraf3_ailehukuku_boşanma_uzun: [
                "4721 sayılı Türk Medeni Kanunu, aile hukukunun temelini teşkil eder. Yani Aile hukuku, Türk Medeni Kanunu’na göre şekillenmiştir. Aile ile ilgili tüm konular, aile hukukunun kapsamındadır. Ayrıca Türkiye de evlenmiş olan yabancıların boşanma koşullarında da bazen Medeni Hukuk uygulanması gerekmektedir." ,
                "[bold]➥Aile hukuku mevzuat gereği aşağıdaki konular, aile hukukunu kapsamaktadır:[/bold]" ,
                "• Kanuni olarak nikah yapma koşulları," ,
                "• Evlenme işlemleri ve koşulları," ,
                "• Boşanma şartları ve boşanmanın nasıl olacağı," ,
                "• Anlaşmalı boşanma şartları," ,
                "• Çekişmeli boşanma," ,
                "• Mal paylaşımı," ,
                "• Mal rejiminin tanımlanması," ,
                "• Aile konutuna ait konular," ,
                "• Soybağı ile ilgili konular," ,
                "• Evlat edinme şartları," ,
                "• Velayet şartları ve velayetin tanımları," ,
                "• Çocukların nafaka alması şartları ve miktarları," ,
                "• Çocuk hakları," ,
                "• Kadın hakları," ,
                "• Vesayet konuları," ,
                "• Kayyımlık kurumu ile ilgili konular," ,
                "• Yardım nafakası şartları," ,
                "• Evlilik dışı ortak yaşamın şartları," ,
                "• Aile içi şiddetin önlenmesi," ,
                "• Çocuk kaçırma cezaları," ,
                "• Çocuk istismarının önlenmesi," ,
                "• Taşıyıcı annelik konuları," ,
                "• Babalık davaları," ,
                "• Evliliğin iptali davaları," ,
                "• Yabancı mahkeme kararlarının Türk Mahkemeleri tarafından tanınması konuları.",
            ],
            çalışma_alanlarımız_paragraf4_mirashukuku_uzun: [
                "Miras Hukuku, Özel Hukuk alanının en önemli konuları arasında yer almaktadır. Bir kişinin ölümü sonrasında bıraktıklarına dair mirasta hak sahibi olanların hukuki açıdan hak ve taleplerine dair işlemler ile ölüme bağlı tasarrufları belirleyen bir hukuk dalıdır. Miras Hukuku, tasarrufların niteliğine ve ölüm sonrasında malvarlığı değerlerinin hak sahipleri arasında paylaşımı bakımından önem arz eder." ,
                "[bold]➥Miras hukuku alanında genel olarak aşağıdaki davalarla karşılaşılaktadır;[/bold]" ,
                "• Ölümden önce miras bırakanın yaptığı muvazaalı olduğu düşünülen tasarruflarının iptali davası," ,
                "• Saklı paylara müdahale anlamına gelen tasarrufların iptali davası," ,
                "• Mirastan çıkarmanın iptali davası," +
                "• Mirasta istihkak davası," ,
                "• Terekenin reddi davası," ,
                "• Mirastan feragat davası," ,
                "• Veraset İlamının iptali," ,
                "• Miras kaynaklı tapu iptal ve tescil davaları," ,
                "• Miras kaynaklı ortaklığın giderilmesi davası," ,
                "• Tenkis davası.",
            ],
            çalışma_alanlarımız_paragraf5_kirahukuku_uzun: [
                "Kira hukukunda açılan davalar genellikle kiracı ile kiralayan arasındaki uyuşmazlıkları konu etmektedir. Bu kapsamda hizmet verdiğimiz davalar kira tespit, kira uyarlama ve tahliye davalarıdır." ,
                "[bold]➥Bu sebepler Türk Borçlar Kanunu’nun 350. ve devamı maddelerinde açıkça düzenlenmiştir. Buna göre;[/bold]" ,
                "• Kiraya vereninin ve yakınlarının kiralanana duyduğu gereksinim nedeniyle tahliye davası," ,
                "• Yeni malikin İhtiyacı Nedeniyle Tahliye Davası," ,
                "• Kiraya Verenin Sözleşmeyi Kiralananı Yeniden inşası veya İmarı Amacıyla Tahliye Davası," ,
                "• Kiracının Boşaltmayı Taahhüt Etmesi," ,
                "• Kiracı Tarafından Kira Bedelinin Ödenmemesi," ,
                "• Kiracının Oturacak Başka Konutunun Olması," ,
                "• Kiracı Tarafından Kiralananın Başkasına Kiraya Verilmesi," ,
                "• Kiralanan Taşınmazın İcra Yolu İle Tahliyesi," ,
                "• Kira Bedelinin Ödenmemesi Sebebiyle İlamsız Tahliye,",
            ],
            çalışma_alanlarımız_paragraf6_tazminathukuku_uzun: [
                "Tazminat hukuku, kişilerin maddi ve manevi olarak gördükleri zararlı gidermeyi amaçlar. Kişilerin haksız eylemler sonucunda gördükleri zararları gideren hukuk dalıdır." ,
                "[bold]➥Maddi ve manevi olmak üzere iki kapsamda değerlendirilir. Maddi tazminat aşağıdaki nedenlerden dolayı açılır:[/bold]" ,
                "[bold]➥Tazminat davası, maddi ve manevi olmak üzere iki kapsamda ele alınır. Ayrıca aşağıdaki alt kollara ayrılmıştır:[/bold]" ,
                "• Haksız gözaltı durumlarında açılan davalar," ,
                "• Meslek hastalıklarından kaynaklanan davalar," ,
                "• İş kazaları sonucu ölüm ya da ağır yaralanma durumlarında açılan tazminat davaları," ,
                "• Trafik kazaları sonucunda ölüm ya da ağır yaralanma sonucu açılan tazminat davaları," ,
                "• Kişilik haklarının korunması kapsamında açılan tazminat davaları," ,
                "• Malpraktis (doktor hatasından kaynaklanan durumlar) dolayısıyla açılan tazminat davaları." ,
                "• Manevi tazminat ise haksız fiiller sonucunda kişi ya da kişilerin manevi acılarının giderilmesi amacıyla mağdur olan kişiye verilir." ,
                "[bold]Trafik Kazalarından Doğan Tazminatlar[/bold]" ,
                "[bold]Araç Değer Kaybı[/bold]" ,
                "• Araç değer kaybı, meydana gelen trafik kazası neticesinde hasara uğrayan ve bu sebeple bakım, onarım, tadilat gören bir aracın bundan sonra ikinci el piyasasındaki değerini ifade etmektedir. Aracın değer kaybı zararı, aracın olay tarihindeki hasar değeriyle hasarı giderildikten sonra edeceği değer arasındaki farktan ibarettir." ,
                "• Bir araç kaza yapar ve hasara uğrarsa, ne kadar iyi şekilde tamir edilmiş olursa olsun ekonomik değerinde bir azalma meydana geleceği kuşkusuzdur. Yargıtay da pek çok kararında bunu kabul etmektedir." ,
                "[bold]Bedensel Zararlardan Doğan Tazminat[/bold]" ,
                "• Yaralanmalı trafik kazalarında yaralanan kişi bizzat kendisi maddi / manevi  tazminat davasını açabilir. Burada yaralanan kişi çalışma hayatında uğradığı ve uğrayacağı  iş gücü kaybı nedeniyle maddi tazminat talebinde bulunabileceği gibi, trafik kazası nedeniyle yaşadığı keder, üzüntü nedeniyle de manevi tazminat talebinde bulunabilir." ,
                "• Ölümlü trafik kazalarında ise ölen kişi hayatta iken ondan destek alan kişiler maddi manevi tazminat talebinde bulunabilirler. Ölen kişinin evli olmaması halinde annesi ve babasına, evli olması halinde eşine, anne veya babanın çocuklarına destek verdiği karine olarak kabul edilir ve bu hallerde bu kişilerin destek aldıklarına dair herhangi bir ispatları aranmaz. Ölen kişinin teyzesi, dayısı, nişanlısı vb. kişilerin her halükarda ölen kişiden destek aldığını ispatlaması gerekecektir.",
            ],
                çalışma_alanlarımız_paragraf7_idarihukuku_uzun: [
                "İdari yargıda dava türleri üçe ayrılır. Bunlar, iptal davası, tam yargı davası ve idari sözleşmelerden doğan davalardır. İYUK m. 2 gereğince, idari işlemler hakkında yetki, şekil, sebep, konu ve maksat yönlerinden biri ile hukuka aykırı olduklarından dolayı iptalleri için menfaatleri ihlal edilenler tarafından iptal davası; idari eylem ve işlemlerden dolayı kişisel hakları doğrudan ihlal edilenler tarafından tam yargı davası; tahkim yolu öngörülen imtiyaz şartlaşma ve sözleşmelerinden doğan uyuşmazlıklar hariç, kamu hizmetlerinden birinin yürütülmesi için yapılan her türlü idari sözleşmelerden dolayı taraflar arasında çıkan uyuşmazlıklara ilişkin idari sözleşmelerden doğan davalar açılabilir." ,
                "Tam yargı davası; idari işlem veya eylemlerden dolayı kişisel hakları ihlal edilenler tarafından idareye karşı, maddi ve manevi zararının tazmini amacıyla açtığı bir idari dava türüdür. Tam yargı davası tipik bir tazminat davasıdır. Özel hukuktaki tazminat davalarının idari davalarda karşılığı niteliğindedir." ,
                "İdari işlem ve eylemlerden dolayı kişisel hakları ihlal edilenler tam yargı davası yoluna başvurarak uğramış oldukları zararların giderilmesini talep ederler. İdare, bilerek ya da bilmeyerek, kusurlu ya da kusursuz yapılan bir takım işlem ve eylemler yoluyla çeşitli zararlara neden olabilir. İdarenin faaliyetleri neticesi ortaya çıkan bu zararlar, kişilerin malvarlıklarına yönelik olabileceği gibi kişilik haklarına yönelik de olabilir. İdarenin faaliyetleri sonucu meydana gelen her türlü zararın yine idarece tazmin edilmesi gerekmektedir. İdarenin böyle bir sorumluluğunun ortaya çıktığı durumlarda ise, idareye karşı tam yargı davası açılabilecek ve davalı idareden yargı organı aracılığıyla uğranılan zararların tazmini istenebilecektir. Uğranılan zararların tazmini yükümlülüğü, bir dava ile ortaya çıkar. İdareye karşı açılacak tazminat davalarına [bold]tam yargı davası[/bold] denir." ,
                "[bold]➥Tam yargı davası, idari işlemden kaynaklı açılıyorsa 3 şekilde açılabilir. Bunlar;[/bold]" ,
                "• İptal davası ile birlikte," ,
                "• İptal davası kesinleştikten sonra" ,
                "• İptal davası hakkında yerel mahkeme karar verdikten sonra açılabilir.",
            ],
            ekibimiz_1: [
                "<h2><p>AYDIN GÜVEN-Avukat- Yeminli Tercüman</p></h2>" ,
                "<p>1978 yılında İran da doğmuş, 2006 yılında İran’da Zanjan Azad Üniversitesi’nden mezun olmuştur. İran da avukatlık stajını yapmış ve bir süre İran’da çalıştıktan sonra 2011 yılında Türkiye’ye gelmiştir. Türkiye’ye gelir gelmez 2012 yılında Gazi Üniversitesi Hukuk Fakültesi Ticaret Hukuku’nda yüksek lisansına başlamıştır.</p>" ,
                "<p>2016 yılında Türkiye de Gazi Üniversitesi Ticaret Hukuku’nda yüksek lisansını tamamlaması ardından 2016 yılında Gazi Üniversitesi Sigortacılık Bölümünde ikinci yüksek lisansına başlamış ve 2018 yılında bu bölümden de başarı ile mezun olmuştur .</p>" ,
                "<p>2020 yılında Türkiye’de Hacettepe Üniversitesi’nde denklik derslerini tamamını vererek mezun olmuş ve 2022 yılından beri Ankara Barosu’na bağlı olarak Ankara’da Avukat olarak çalışmaktadır. Farsça ve Türkçe bilmektedir.</p>" ,
                "<p>Avukatlık mesleğinde özellikle İranlılar başta olmak üzere yabancılar hukukunda uzmanlaşmış olup,  Hukuk, Ceza, İdari, Mülteci ve Vatandaşlık Hukuku ile diğer özel hukuk alanlarında çalışmaktadır.</p>" ,
                "✦ Zanjan Azad Üniversitesi 2002-2006" ,
                "✦ Gazi Üniversitesi Ticaret Hukuku Yüksek Lisans-2012-2016" ,
                "✦ Gazi Üniversitesi Sigortacılık Yüksek Lisans-2016-2018" ,
                "✦ Hacettepe Üniversitesi Hukuk Fakültesi  -2020-2021" ,
                "✦ Avukat Ankara Barosu-2022-Devam ediyor" ,
                "✦ Yeminli Tercüman-2021-Devam ediyor",
                "<p></p>",
            ],
            ekibimiz_tel_1: "0542 405 60 94",
            ekibimiz_2: [
                "<h2><p>Abdurrahman PEHLİVAN – Avukat ve Arabulucu</p></h2>" ,
                "<p>1990 yılında Başkent Ankara’da doğmuş.2012 yılında Ankara Gazi Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. Ankara Barosu’na bağlı olarak 2013 yılından beri Ankara’da Avukat olarak çalışmaktadır.</p>" ,
                "<p>2018 yılında Uzlaştırmacı unvanını alarak Ankara Cumhuriyet Başsavcılığı’na bağlı olarak Uzlaştırmacı olarak çalışmaktadır. 2019 yılında Atılım Üniversitesi Kamu Hukuku yüksek lisans eğitimine başlamış ve halen devam etmektedir. 2020 yılından itibaren de Arabulucu unvanını alarak mesleğine devam etmektedir. Arabulucu olarak İş hukuku ve Ticaret Hukuku ile Sigorta Hukuku alanlarında sertifikalar alarak Uzman Arabulucu olarak görevine devam etmektedir.</p>" ,
                "<p>2016 yılından beri Ankara Barosu Mülteci Hakları Merkezi’nde üye olarak aktif görev almaktadır. Ankara Barosu’nda mülteci hukuku dışında Tüketici Hakları Merkezi Kurulu ile Vergi ve İdare Hukuku Kurulu gibi kurullarda görev almıştır.</p>" ,
                "<p>Avukatlık mesleğinde mülteci hukuku, yabancılar hukuku, vatandaşlık başvuruları ve takibi , boşanma  davaları, taşınmaz hukuku, miras hukuku, tazminat hukuku, idare hukuku, iş ve sosyal güvenlik hukuku, sigorta hukuku, ceza hukuku, kira hukuku ile diğer özel hukuk alanlarında çalışmaktadır. İngilizce bilmektedir.</p>" ,
                "✦ Ankara Gazi Üniversitesi Hukuk Fakültesi 2008 – 2012 " ,
                "✦ Avukat Ankara Barosu 2013 – Devam ediyor" ,
                "✦ Ankara Cumhuriyet Başsavcılığı  Uzlaştırmacı – 2018 – Devam ediyor" ,
                "✦ Atılım Üniversitesi Kamu Hukuku Yüksek Lisans 2019 – Devam ediyor" ,
                "✦ Arabulucu – 2020 – Devam ediyor",
                "<p></p>",
            ],
            ekibimiz_tel_2: "0554 303 98 54",

            ekibimiz_3: [
                "<h2><p>Canan Pehlivan Avukat-Bilirkişi-Arabulucu</p></h2>" ,
                "<p>1990 yılında Bayburt’ta doğmuştur. Konya’da Lise Eğitimini tamamlaması ardından 2012 yılında Ankara Gazi Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. Ankara Barosu’na bağlı olarak 2013 yılından beri Ankara’da Avukat olarak çalışmaktadır.</p>" ,
                "<p>2019 yılında Atılım Üniversitesi Kamu Hukuku yüksek lisans eğitimine başlamış ve halen devam etmektedir. 2020 yılından itibaren de Arabulucu unvanını alarak mesleğine devam etmektedir. Arabulucu olarak İş hukuku, Ticaret Hukuku ile Sigorta Hukuku alanlarında sertifikalar alarak Uzman Arabulucu olarak görevine devam etmektedir.</p>" ,
                "<p>Ankara Barosu’nda Fikri Mülkiyet ve Rekabet Kurulu, Tüketici Hakları Merkezi Kurulu ile Vergi ve İdare Hukuku Kurulu gibi kurullarda görev almıştır. Ayrıca Fikri ve Mülkiyet Hukuku-Marka Hukuku kapsamında Bilirkişilik yapmaktadır.</p>" ,
                "<p>Avukatlık mesleğinde yabancılar hukuku, vatandaşlık başvuruları ve takibi , fikri ve mülkiyet hukuku, boşanma  davaları, yabancıların boşanma davaları,  taşınmaz hukuku, miras hukuku, tazminat hukuku, idare hukuku, iş ve sosyal güvenlik hukuku, sigorta hukuku, ceza hukuku, kira hukuku ile diğer özel hukuk alanlarında çalışmaktadır.</p>" ,
                "✦ Ankara Gazi Üniversitesi Hukuk Fakültesi 2008 – 2012" ,
                "✦ Avukat Ankara Barosu 2013 – Devam ediyor" ,
                "✦ Atılım Üniversitesi Kamu Hukuku Yüksek Lisans 2019 – Devam ediyor" ,
                "✦ Arabulucu – 2020 – Devam ediyor" ,
                "✦ Bilirkişilik- 2021 – Devam ediyor",
                "<p></p>",
            ],
            ekibimiz_tel_3: "0554 303 98 54",

            iran_ekibimiz_1:[
                "<h2><p>Mehdi Ceferzade</p></h2>",
                "<p>Avukatlık mesleğinde mülteci hukuku, yabancılar hukuku, vatandaşlık başvuruları ve takibi, boşanma davaları, taşınmaz hukuku, miras hukuku, tazminat hukuku, idare hukuku, iş ve sosyal güvenlik hukuku, sigorta hukuku, ceza hukuku, kira hukuku ile diğer özel hukuk alanlarında çalışmaktadır. İngilizce, Farsça ve Türkçe bilmektedir.</p>",
                "✦ Tebriz Üniversitesi Hukuk Fakültesı 2000-2004 Lisans Tebriz/İran",
                "✦ Yüksek Lisans 2007-2011 Özel Hukuk Payame Noor Üniversitesi Tahran/İran",
                "✦ Kariyer: Avukatlık Stajı --> Merkez Barosu",
                "✦ Avukat --> Tahran Merkez Baro Üye 2008",
                "<p></p>",
                "<p>➥[bold]ADRES:[/bold] Tohid Mey. Eskenderi Şomali Cad. No:47 Üni:11 Tahran/İran</p>",
            ],
            iran_ekibimiz_1_tel:"<li><a href=\"tel:+98 2166126248\"><span class=\"align-middle\"><i class=\"ti-mobile\"></i></span>+98 2166126248</a></li>\n" +
                "\t\t\t\t\t  <li><a href=\"tel:+98 9125124866\"><span class=\"align-middle\"><i class=\"ti-mobile\"></i></span>+98 9125124866</a></li>\n" +
                "\t\t\t\t\t  <li><a href=\"mailto:JAFARZADE.M@GMAIL.COM\"><span class=\"align-middle\"><i class=\"ti-email\"></i></span>JAFARZADE.M@GMAIL.COM</a></li>\n",

            iran_ekibimiz_2:[
                "<h2><p>Hamid Valaei</p></h2>",
                "<p>Avukatlık mesleğinde mülteci hukuku, yabancılar hukuku, vatandaşlık başvuruları ve takibi, boşanma davaları, taşınmaz hukuku, miras hukuku, tazminat hukuku, idare hukuku, iş ve sosyal güvenlik hukuku, sigorta hukuku, ceza hukuku, kira hukuku ile diğer özel hukuk alanlarında çalışmaktadır. İngilizce, Farsça ve Türkçe bilmektedir.</p>",
                "✦ Tebriz Üniversitesi Hukuk Fakültesi 2000-2004 Lisans Tebriz/İran",
                "✦ Yüksek Lisans 2009-2012 Tebirz Üniversitesi Hukuk Fakültesi",
                "✦ Doktora 2023-devam ediyor Tebriz Üniversitesi Hukuk Fakültesi",
                "<p></p>",
                "[bold]Kariyer[/bold]",
                "✦ Avukat Doğu Azerbaycan Barosu üyesi 2007",
                "✦ Bilgi ve İletişim Teknolojileri Hukuku Araştırmacısı",
                "✦ Gazeteci",
                // "✦ ",
                "<p></p>",
                "[bold]Çalıştığım ve Yönettiğim Sosyal Medya[/bold]",
                "<a href=\"https://azarvakil.com/\">Azar Vakil</a>",
                "<p></p>",
                "[bold]“İran ve Türkiye Avukatlar Grubu” Telegram kanalı ve Instagram sayfası[/bold]",
                "<p><a href=\"https://telegram.me/Hamidvalaei\">Telegram'da Hamid Valaei</a></p>",
                "<p><a href=\"https://www.instagram.com/hamidvalae/\">Instagram'da Hamid Valaei</a></p>",
                "[bold]Bilgi ve iletişim teknolojisi hakları Telegram kanalı ve Instagram sayfası[/bold]",
                "<p><a href=\"https://telegram.me/ITLAW\">Telegram'da ITLAW</a></p>",
                "<p><a href=\"https://instagram.com/itlaw.azarvakil\">Instagram'da ITLAW Azar Vakil</a></p>",
                "[bold]Azarvakil yasal grubunun Telegram kanalı ve Instagram sayfası[/bold]",
                "<p><a href=\"https://telegram.me/yasalaw\">Telegram'da Yasa Law</a></p>",
                "<p><a href=\"https://instagram.com/azarvakil.lawfirm\">Instagram'da Azar Vakil Law Firm</a></p>",
                "[bold]Makale ve kitaplar[/bold]",
                "Çeşitli yayınlarda ve konferanslarda çok sayıda ve çeşitli konularda yazdığım makaleler",
                "Ceza Kanunu, Aile Koruma kânunun ve Çek Kanununlar ile İlgili bastırdığım Kanun kitapçılığı",
                "<p></p>",
               ],
            iran_ekibimiz_2_tel:" <li><a href=\"tel:09144092006\"><span class=\"align-middle\"><i class=\"ti-mobile\"></i></span>09144092006</a></li>\n" +
                "\t\t\t\t\t\t  <li><a href=\"mailto:Hamid.valai@gmail.com\"><span class=\"align-middle\"><i class=\"ti-email\"></i></span>Hamid.valai@gmail.com</a></li>\n",

            çözüm_ortaklarımız:"ÇÖZÜM ORTAKLARIMIZ",
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

    function updateContent(lang) {
        let translations = content[lang];

        for (let i = 0; i < elementsToTranslate.length; i++) {
            let element = elementsToTranslate[i];
            let key = $(element).data("translate");

            if (translations[key]) {
                let text = translations[key];
                if (Array.isArray(text)) {
                    let ul = $("<ul></ul>");
                    text.forEach(function(item) {
                        ul.append($("<li></li>").html(processBold(item)));
                    });
                    $(element).html(ul);
                } else {
                    $(element).html(processBold(text));
                }
            }
        }
    }

    function processBold(text) {
        // [bold] işaretçilerini <strong> etiketleri ile değiştir
        return text.replace(/\[bold\](.*?)\[\/bold\]/g, "<strong>$1</strong>");
    }


    // Sayfa yüklendiğinde dil tercihini kontrol et
    $(document).ready(function () {
        const savedLang = localStorage.getItem('language') || 'tr'; // Varsayılan dil 'tr'
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


