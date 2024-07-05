require('dotenv').config()

const express = require('express')
const router = express.Router()

const LegalModel = require('../models/legal.model.js')

/* Routes */
router.get('/', async (req, res) => {
  try {
      const documents = await LegalModel.find({})
      if (documents) {
          res.status(200).json(documents)
      } else {
          res.status(404).send('Document not found')
      }
  } catch (error) {
    res.status(500).send('Error fetching legal documents')
  }
})
  

const data = [
  {
      type: "termsAndConditions",
      sections: [
          {
              he: {
                  pointer: "introduction",
                  title: "הקדמה",
                  contentAsHTML: "<p>ברוכים הבאים לאתר שלנו. תנאים והגבלות אלו שולטים בשימושכם באתר ובשירותים שלנו, כולל כל הדפים בתוך אתר זה (המכונים יחד להלן 'האתר'). על ידי גישה לאתר זה, אתם מסכימים להיות כפופים לתנאים וההגבלות הללו. אם אינכם מסכימים עם חלק מהתנאים וההגבלות הללו, אנא אל תשתמשו באתר שלנו.</p>"
              },
              en: {
                  pointer: "introduction",
                  title: "Introduction",
                  contentAsHTML: "<p>Welcome to our website. These <strong>terms and conditions</strong> govern your use of our site and services, including all pages within this website (collectively referred to below as this 'Website'). By accessing this Website, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, please do not use our Website.</p>"
              },
              createdAt: Date.now()
          },
          {
              he: {
                  pointer: "user-agreement",
                  title: "הסכם משתמש",
                  contentAsHTML: "<p>הסכם משתמש זה מפרט את התנאים בהם תוכלו להשתמש בשירותים שלנו. השימוש בשירותים שלנו מהווה קבלה של הסכם משתמש זה. אתם אחראים לשמור על סודיות החשבון והסיסמה שלכם ולהגביל את הגישה למחשב שלכם, ואתם מסכימים לקבל אחריות על כל הפעולות המתרחשות תחת החשבון או הסיסמה שלכם.</p>"
              },
              en: {
                  pointer: "user-agreement",
                  title: "User Agreement",
                  contentAsHTML: "<p>This <strong>User Agreement</strong> outlines the terms under which you may use our services. The use of our services constitutes acceptance of this User Agreement. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.</p>"
              },
              createdAt: Date.now()
          },
          {
              he: {
                  pointer: "privacy-policy",
                  title: "מדיניות פרטיות",
                  contentAsHTML: "<p>אנו מחויבים להגן על הפרטיות והביטחון של המשתמשים שלנו. <a href='/privacy-policy'>מדיניות הפרטיות</a> שלנו, המקושרת מהחלק התחתון של דפי האינטרנט שלנו, מסבירה כיצד אנו אוספים, משתמשים ומגלים מידע על המשתמשים שלנו. על ידי שימוש באתר, אתם מסכימים לתנאי מדיניות הפרטיות הזו.</p>"
              },
              en: {
                  pointer: "privacy-policy",
                  title: "Privacy Policy",
                  contentAsHTML: "<p>We are committed to protecting the privacy and security of our users. Our <a href='/privacy-policy'>Privacy Policy</a>, linked to from the bottom of our webpages, explains how we collect, use, and disclose information about our users. By using the site, you agree to the terms of this Privacy Policy.</p>"
              },
              createdAt: Date.now()
          },
          {
              he: {
                  pointer: "payment-policy",
                  title: "מדיניות תשלום",
                  contentAsHTML: "<p>מדיניות התשלום שלנו מספקת מידע על אמצעי התשלום שהאתר שלנו מקבל וכל תנאי תשלום נוספים. אנא קראו בעיון את מדיניות התשלום שלנו לפני ביצוע רכישה, שכן ביצוע רכישה מהווה הסכמה לתנאים אלו.</p>"
              },
              en: {
                  pointer: "payment-policy",
                  title: "Payment Policy",
                  contentAsHTML: "<p>Our <strong>Payment Policy</strong> provides information about the payment methods that our website accepts and any additional payment terms or conditions. Please review our Payment Policy carefully before completing any purchase, as making a purchase indicates your agreement to these terms.</p>"
              },
              createdAt: Date.now()
          },
          {
              he: {
                  pointer: "amendments",
                  title: "תיקונים",
                  contentAsHTML: "<p>אנו שומרים לעצמנו את הזכות לשנות תנאים והגבלות אלו בכל עת. כל התיקונים לתנאים אלו יפורסמו באינטרנט. השימוש המתמשך באתר זה ייחשב כהסכמה לתנאים וההגבלות החדשים.</p>"
              },
              en: {
                  pointer: "amendments",
                  title: "Amendments",
                  contentAsHTML: "<p>We reserve the right to amend these terms and conditions at any time. All amendments to these terms will be posted online. Continued use of this Website will be deemed to constitute acceptance of the new terms and conditions.</p>"
              },
              createdAt: Date.now()
          },
          {
              he: {
                  pointer: "contact-us",
                  title: "צור קשר",
                  contentAsHTML: "<p>אם יש לכם שאלות לגבי תנאים והגבלות אלו, אנא <a href='mailto:contact@example.com'>שלחו לנו מייל לכתובת contact@example.com</a>. אנו מחויבים לספק שירותים איכותיים ולוודא שהשימוש שלכם באתר שלנו יהיה נעים ומועיל.</p>"
              },
              en: {
                  pointer: "contact-us",
                  title: "Contact Us",
                  contentAsHTML: "<p>If you have any questions about these terms and conditions, please <a href='mailto:contact@example.com'>email us at contact@example.com</a>. We are committed to providing quality services and ensuring that your use of our website is pleasant and productive.</p>"
              },
              createdAt: Date.now()
          }
      ],
      createdAt: Date.now()
  }
]

const update = () => {
  console.log(12345)
  LegalModel.insertMany(data)
}

// update()
module.exports = router