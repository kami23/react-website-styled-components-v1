import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "translated-paragraph":
        "We are going to translate this paragraph - how will it be in Polish?",
    },
  },
  pl: {
    translation: {
      "translated-paragraph":
        "Przetlumaczymy ten paragraf - jak to bedzie po Polsku?",
    },
  },
  ar: {
    translation: {
      "translated-paragraph": "فقرة تمت ترجمتها",
      Home: "الرئيسية",
      Biography: "السيرة الذاتية",
      Vision: "الرؤية",
      Values: "القيم",
      "Fields of intervention": "مجالات التدخل",
      Activities: "الأنشطة",
      "Issam NECHMA": "نشمة عصام",
      "Trust the future": "الثقة في المستقبل",

      
      "Issam NECHMA, General Manager of an industrial Group and president of the Al-Taraji Sports Club Of el-Hadjar, holder a bachelor's of science in financial mathematics and a master's degree in aerospace engineering. A member an affiliate mechanical engineer of the IMechE institute of England since 2007.":
      "نشمة عصام، مدير عام لمجمع صناعي ورئيس نادي الترجي الرياضي الحجار، متحصل على شهادة ليسانس في الرياضيات المالية وعلى ماجيستير هندسة طيران، عضو في معهد أيماك (IMechE) الانجليزي ومهندس ميكانيكي معترف به من طرف المعهد منذ 2007. ",

"Born on 1986 in Annaba where he grew up and studied until he received a bachelor's degree in experimental sciences in 2003. He later on moved to England to peruse higher education, first, receiving a diploma in English language from King's College London in 2004, then specializing in aerospace engineering obtaining a Master's degree in 2007 from Queen Mary University (University of London) and earning an aviation certificate specializing in stability and control from Cranfield Airport."
:"ولد في 1986 بولاية عنابة أين زاول دراسته حتى المرحلة الثانوية، تحصل على شهادة البكالوريا سنة 2003 شعبة علوم تجريبية. انتقل فيما بعد إلى إنجلترا من أجل اتمام الدراسات العليا فتحصل بداية على شهادة في اللغة الإنجليزية من كلية الملك-لندن (king's college London) سنة 2004, ثم تخصص في هندسة الطيران ليتحصل على شهادة الماجيستير سنة 2007 من جامعة الملكة ماري لندن (Queen Mary University of London)، وتمكن فيما بعد من الحصول على شهادة طيران تخصص ثبات وتحكم من مطار كرانفيلد (Cranfield Airport). ",


"During his time at the University of London, he was no stranger to social work and student movements, as he was a member of the University of London Union where he served as a student representative for two years. He also joined many social organizations such as the Arab Society Organization, the Greek Society and many others. He then perused a bachelor’s of science in financial mathematics at the University of Surrey, that he obtained in 2010. Following graduation and after assembling enough experience, Issam NECHMA returned home, intending to participate in the development of the local community and the nation using all possible means."
: " خلال فترة دراسته بجامعة لندن لم يكن غريبا عن العمل الاجتماعي والحركات الطلابية، إذ كان عضوا في اتحاد طلاب لندن وعمل كممثل للطلاب لمدة عامين، كما انخرط في العديد من المنظمات الاجتماعية كمنظمة المجتمع العربي والمجتمع اليوناني وغيرهم.اتجه فيما بعد لمواصلة دراسته في جامعة سوري  ( University of Surrey) أين تحصل على شهادة ليسانس في الرياضيات المالية سنة 2010. بعد استكمال مشواره الدراسي واكتساب الكم الكافي من الخبرات، رجع نشمة عصام لموطنه راميا إلى المشاركة في تطوير المجتمع المحلي والوطن بما أمكن من وسائل.",
      
"Since his return, he took part in running the family business, established by his father in 1990 until he was handed over the responsibility of running it in 2014. As the general manager, he played a pivotal role in transforming the company into an industrial group with an important position in the local and national market, thus proving his high competency for management and business development. This encouraged him to share his experiences to promote local development projects and help his fellow compatriots create the suitable conditions for growth in order to build a better tomorrow and a better future for Algeria. Front El-Moustakbel Party was the most adequate for his own principles and goals so he joined it, running afterwards for People's Provincial Assembly elections in 2012."
:"شارك منذ عودته في تسيير الشركة العائلية المؤسسة من طرف والده سنة 1990 حتى سلمت له مسؤولية إدارتها فأصبح المدير العام لها منذ 2014 حتى اليوم. تمكن خلال هذه الفترة من تحويل الشركة إلى مجمع صناعي ذو مكانة هامة في السوق المحلي والوطني مثبتا بذلك قدرته العالية على التسيير وتطوير الأعمال، ما شجعه على مشاركة خبراته لتعزيز مشاريع التنمية والتطوير المحليين ومساعدة أبناء وطنه في خلق ظروف النمو الملائمة لبناء غد أفضل ومستقبل أفضل للجزائر كان حزب جبهة المستقبل الوجهة الأكثر تلاؤما مع مبادئه وأهدافه فانضم إليه، ليترشح بعد ذلك لانتخابات المجالس الشعبية المحلية لعام 2021."
},
  },
};

const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  detection: DETECTION_OPTIONS,
  resources,
  fallbackLng: "en",
});

export default i18n;
