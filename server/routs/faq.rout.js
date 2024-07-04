require('dotenv').config()

const express = require('express')
const router = express.Router()

const FAQModel = require('../models/faq.model.js')

/* Routes */
router.get('/', async (req, res) => {
  try {
      const FAQs = await FAQModel.find({})
      if (FAQs) {
          res.status(200).json(FAQs)
      } else {
          res.status(404).send('FAQ not found')
      }
  } catch (error) {
    res.status(500).send('Error fetching FAQs')
  }
})
  
const faqs = [
  {
    he: {
      questionAsHTML: "מה שעות הפעילות של החנות שלכם?",
      answerAsHTML: "החנות שלנו פועלת 24/7 באינטרנט. ניתן ליצור איתנו קשר בכל עת דרך דף 'צור קשר'.",
      tags: ["חנות", "שעות"],
      category: "מידע כללי"
    },
    en: {
      questionAsHTML: "What are your store hours?",
      answerAsHTML: "Our store is open online 24/7. You can reach us at any time through the 'Contact Us' page.",
      tags: ["shop", "hours"],
      category: "General Information"
    },
    createdAt: new Date()
  },
  {
    he: {
      questionAsHTML: "איך אפשר ליצור איתכם קשר?",
      answerAsHTML: "ניתן ליצור איתנו קשר דרך דף 'צור קשר' באתר או במייל שלנו info@skateshop.com.",
      tags: ["חנות", "קשר"],
      category: "מידע כללי"
    },
    en: {
      questionAsHTML: "How can I contact you?",
      answerAsHTML: "You can contact us through the 'Contact Us' page on our website or via email at info@skateshop.com.",
      tags: ["shop", "contact"],
      category: "General Information"
    },
    createdAt: new Date()
  },
  {
    he: {
      questionAsHTML: "אילו סוגי גלגיליות אתם מציעים?",
      answerAsHTML: "אנחנו מציעים מגוון רחב של גלגיליות לרמות שונות של ניסיון וסגנונות רכיבה.",
      tags: ["גלגיליות"],
      category: "מוצרים"
    },
    en: {
      questionAsHTML: "What types of skates do you offer?",
      answerAsHTML: "We offer a wide range of skates for different levels of experience and riding styles.",
      tags: ["skates"],
      category: "Products"
    },
    createdAt: new Date()
  },
  {
    he: {
      questionAsHTML: "האם אתם מוכרים אביזרים נוספים לגלגיליות?",
      answerAsHTML: "כן, אנחנו מציעים מבחר אביזרים נוספים לגלגיליות, כמו גלגלים, בלמים וריפודים.",
      tags: ["אביזרים"],
      category: "מוצרים"
    },
    en: {
      questionAsHTML: "Do you sell additional accessories for skates?",
      answerAsHTML: "Yes, we offer a variety of additional accessories for skates, such as wheels, brakes, and padding.",
      tags: ["accessories"],
      category: "Products"
    },
    createdAt: new Date()
  },
  {
    he: {
      questionAsHTML: "מהי מדיניות המשלוחים שלכם?",
      answerAsHTML: "אנחנו מציעים משלוחים לכל העולם עם זמן אספקה של 7-14 ימים.",
      tags: ["משלוחים"],
      category: "הזמנות ומשלוחים"
    },
    en: {
      questionAsHTML: "What is your shipping policy?",
      answerAsHTML: "We offer worldwide shipping with a delivery time of 7-14 days.",
      tags: ["shipping"],
      category: "Orders and Shipping"
    },
    createdAt: new Date()
  },
  {
    he: {
      questionAsHTML: "איך ניתן לעקוב אחר הזמנת המשלוח שלי?",
      answerAsHTML: "לאחר ביצוע ההזמנה תקבלו מספר מעקב למייל שלכם לצורך מעקב אחר ההזמנה.",
      tags: ["מעקב", "הזמנות"],
      category: "הזמנות ומשלוחים"
    },
    en: {
      questionAsHTML: "How can I track my order?",
      answerAsHTML: "After placing an order, you will receive a tracking number via email to track your shipment.",
      tags: ["delivery", "orders"],
      category: "Orders and Shipping"
    },
    createdAt: new Date()
  },
  {
    he: {
      questionAsHTML: "מהי מדיניות ההחזרות שלכם?",
      answerAsHTML: "ניתן להחזיר מוצרים בתוך 30 ימים מיום הקנייה לקבלת החזר מלא.",
      tags: ["החזרות"],
      category: "החזרות והחלפות"
    },
    en: {
      questionAsHTML: "What is your return policy?",
      answerAsHTML: "Products can be returned within 30 days of purchase for a full refund.",
      tags: ["returns"],
      category: "Returns and Exchanges"
    },
    createdAt: new Date()
  },
  {
    he: {
      questionAsHTML: "איך ניתן להחליף מוצר?",
      answerAsHTML: "כדי להחליף מוצר, נא ליצור קשר עם שירות הלקוחות שלנו דרך דף 'צור קשר'.",
      tags: ["החלפות"],
      category: "החזרות והחלפות"
    },
    en: {
      questionAsHTML: "How can I exchange a product?",
      answerAsHTML: "To exchange a product, please contact our customer service through the 'Contact Us' page.",
      tags: ["exchanges"],
      category: "Returns and Exchanges"
    },
    createdAt: new Date()
  },
  {
    he: {
      questionAsHTML: "איך אפשר לקבל הנחה של 10% על קניות?",
      answerAsHTML: "ניתן לשלוח לנו שיר, סיפור או כל צורת טקסט אחרת דרך דף 'אמנות' באתר שלנו ולקבל קוד הנחה של 10%.",
      tags: ["אמנות", "הנחה"],
      category: "אמנות וקהילה"
    },
    en: {
      questionAsHTML: "How can I get a 10% discount on purchases?",
      answerAsHTML: "You can send us a poem, story, or any form of text through the 'Art' page on our website and receive a 10% discount code.",
      tags: ["art", "discount"],
      category: "Art and Community"
    },
    createdAt: new Date()
  },
  {
    he: {
      questionAsHTML: "האם אתם מציעים פלטפורמה לשיתוף אמנות של גולשים?",
      answerAsHTML: "כן, אנחנו מעודדים את הלקוחות שלנו לשתף את האמנות שלהם בעמוד האינסטגרם שלנו עם התגית #SpaceSkateArt.",
      tags: ["אמנות", "קהילה"],
      category: "אמנות וקהילה"
    },
    en: {
      questionAsHTML: "Do you offer a platform for sharing user art?",
      answerAsHTML: "Yes, we encourage our customers to share their art on our Instagram page with the hashtag #SpaceSkateArt.",
      tags: ["art", "community"],
      category: "Art and Community"
    },
    createdAt: new Date()
  }
];


const uploadPlaceholderFaqs = async () => {
  console.log(123)
  try {
    await FAQModel.insertMany(faqs);
    console.log('20 placeholder FAQs uploaded successfully');
  } catch (err) {
    console.error('Failed to upload placeholder FAQs', err);
  }
};

// uploadPlaceholderFaqs();

module.exports = router