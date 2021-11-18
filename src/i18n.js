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

      "Born on the 25 of august 1986, Issam NECHMA took his baccalaureate in experimental sciences with a good mention in 2003 and went on to peruse his studies in United Kingdom starting his educational journey with and English diploma from king’s college of London which he obtained in 2004 where he was a member of University of London Union where he worked as a student representative for two years.":
        "نشمة عصام، مدير عام لمجمع صناعي ورئيس نادي الترجي الرياضي الحجار، متحصل على شهادة ليسانس في الرياضيات المالية وعلى ماجيستير هندسة طيران، عضو في معهد أيماك (IMechE) الانجليزي ومهندس ميكانيكي معترف به من طرف المعهد منذ 2007. ولد في 1986 بولاية عنابة أين زاول دراسته حتى المرحلة الثانوية، تحصل على شهادة البكالوريوس سنة 2003 شعبة علوم تجريبية.",
      "In 2007 he got an MSC In aerospace engineering from Queen Mary University (the university of London) and in 2010 he pursued a BSC in Financial mathematics at surrey University During his years of study in the UK he participated in associative work under different association such as the Arabic society association and the Greek society ":
        " انتقل فيما بعد إلى انجلترا من أجل اتمام الدراسات العليا فتحصل بداية على شهادة في اللغة الانجليزية من كلية الملك لندن(king's college London) سنة 2004, ثم تخصص في هندسة الطيران ليتحصل على شهادة الماجيستير سنة 2007 من جامعة الملكة ماري لندن (Queen Mary University of London)، وتمكن فيما بعد من الحصول على شهادة طيران تخصص ثبات وتحكم من مطار كرانفيلد (Cranfield Airport). خلال فترة دراسته بجامعة لندن لم يكن غريبا عن العمل الاجتماعي والحركات الطلابية، اذ كان عضوا في اتحاد طلاب لندن وعمل كممثل للطلاب لمدة عامين، كما انخرط في العديد من المنظمات الاجتماعية كمنظمة المجتمع العربي والمجتمع اليوناني وغيرهم.",

      "A member and an affiliate mechanical engineer at the IMechE institution of England since 2007Certificate in aviation specializing in stability and control from the Cranfield airport ":
        "تجه فيما بعد لمواصلة دراسته في جامعة سوري ( University of Surrey) أين تحصل على شهادة ليسانس في الرياضيات المالية سنة 2010. بعد استكمال مشواره الدراسي واكتساب الكم الكافي من الخبرات، رجع نشمة عصام لموطنه راميا الى المشاركة في تطوير المجتمع المحلي والوطن بما أمكن من وسائل.",
      "He is today the general manager of an industrial group and the president of the sports club “Esperance sportive d’El hadjar” With a young mindset and a passion for development NECHMA Issam today decides to give back to his community and participate in the development of his region by sharing his ideas and development project. As a in the People's Provincial Assembly elections, NECHMA Issam will be in the most adequate place to participate in improving the everyday lives of his community members and creating a better tomorrow.":
        "شارك منذ عودته في تسيير الشركة العائلية المؤسسة من طرف والده سنة 1990 حتى سلمت له مسؤولية إدارتها فأصبح المدير العام لها منذ 2014 وحتى اليوم. تمكن خلال هذه الفترة من تحويل الشركة الى مجمع صناعي ذو مكانة هامة في السوق المحلي والوطني مثبتا بذلك قدرته العالية على التسيير وتطوير الأعمال، ما شجعه على مشاركة خبراته لتعزيز مشاريع التنمية والتطوير المحليين ومساعدة أبناء وطنه في خلق ظروف النمو الملائمة لبناء غد أفضل ومستقبل أفضل للجزائر.كان حزب جبهة المستقبل الوجهة الأكثر تلاءما مع مبادئه وأهدافه فانضم إليه، ليترشح بعد ذلك لانتخابات المجالس الشعبية المحلية لعام 2021.",
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
