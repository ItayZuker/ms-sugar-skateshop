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

// router.post('/upload-placeholder-faq', async (req, res) => {
//     const placeholderData = [
//         {
//             questionAsHTML: "What drives our cosmic journey at [Brand Name]?",
//             answerAsHTML: "At [Brand Name], our mission is to explore the outer edges of skateboarding, pushing the boundaries of what's possible on a board. Inspired by the vastness of space, we're dedicated to innovation, community, and sustainability, ensuring every skater can ride the cosmic waves with confidence and style.",
//             tags: ["mission", "journey", "innovation"],
//             category: "Mission"
//         },
//         {
//             questionAsHTML: "How does [Brand Name] contribute to sustainability in the universe of skateboarding?",
//             answerAsHTML: "Sustainability is at the core of our interstellar mission. [Brand Name] crafts durable and eco-friendly skateboards, using materials that minimize our ecological footprint. We're committed to preserving our planet and its cosmic playgrounds for future generations of skaters.",
//             tags: ["sustainability", "eco-friendly", "materials"],
//             category: "Mission"
//         },
//         {
//             questionAsHTML: "What role does community play in [Brand Name]'s vision?",
//             answerAsHTML: "At [Brand Name], we believe the skateboarding community is a constellation of stars shining brighter together. Our vision is to foster a supportive, inclusive environment where all skaters, regardless of their skill level or background, can share their passion for skating and exploration.",
//             tags: ["community", "vision", "support"],
//             category: "Mission"
//         },
//         {
//             questionAsHTML: "How is [Brand Name] pushing the boundaries of skateboarding technology?",
//             answerAsHTML: "In our quest to merge skateboarding with the final frontier, [Brand Name] is pioneering advanced technologies. From gravity-defying trucks to solar-powered boards, we're innovating at the nexus of skate culture and space tech, offering riders unprecedented experiences.",
//             tags: ["technology", "innovation", "advanced"],
//             category: "Mission"
//         },
//         {
//             questionAsHTML: "What does the future hold for [Brand Name] and its explorers?",
//             answerAsHTML: "The future for [Brand Name] is a galaxy of possibilities. As we chart courses to new skating frontiers, we remain committed to our core values of exploration, innovation, and community. Together, we'll discover new worlds of skateboarding, leaving a trail of stardust for others to follow.",
//             tags: ["future", "exploration", "commitment"],
//             category: "Mission"
//         },
//         {
//             questionAsHTML: "What makes our interstellar skateboards unique in the market?",
//             answerAsHTML: "Our interstellar skateboards stand out due to their space-grade materials and innovative designs, tailored for both terrestrial and zero-gravity environments. Each board is a blend of durability, performance, and cosmic aesthetics, ensuring you ride in style whether on Earth or Mars.",
//             tags: ["unique", "space-grade", "design"],
//             category: "Products"
//         },
//         {
//             questionAsHTML: "How do our space-themed accessories enhance the skateboarding experience?",
//             answerAsHTML: "Our space-themed accessories, from galaxy-print grip tape to asteroid-resistant wheels, are crafted to elevate your skateboarding experience. They combine functionality with cosmic flair, ensuring every ride is stellar, whether you're cruising city streets or navigating the skate parks of the cosmos.",
//             tags: ["accessories", "experience", "cosmic"],
//             category: "Products"
//         },
//         {
//             questionAsHTML: "Can our skateboards handle the rugged terrain of Martian landscapes?",
//             answerAsHTML: "Absolutely. Our skateboards are engineered for the extreme conditions of Martian landscapes, with special wheels designed for grip and durability on rough, alien terrains. These boards are your perfect companions for exploring the red planet and beyond.",
//             tags: ["Martian", "terrain", "durability"],
//             category: "Products"
//         },
//         {
//             questionAsHTML: "What warranty coverage comes with our cosmic skateboards?",
//             answerAsHTML: "Every cosmic skateboard comes with a light-year warranty, covering any manufacturing defects or cosmic wear and tear. We stand behind the quality and durability of our products, ensuring our fellow space travelers are fully supported on their skating journeys.",
//             tags: ["warranty", "coverage", "quality"],
//             category: "Products"
//         },
//         {
//             questionAsHTML: "How does our space-tech apparel adapt to different planetary conditions?",
//             answerAsHTML: "Our space-tech apparel is designed with versatility in mind, featuring materials that adjust to temperature fluctuations and protect against cosmic radiation. Whether you're skating on Earth or exploring distant planets, our apparel keeps you comfortable and protected.",
//             tags: ["apparel", "planetary", "conditions"],
//             category: "Products"
//         },
//         {
//             questionAsHTML: "Are there customizable options for our skateboards?",
//             answerAsHTML: "Yes, we offer customizable options for our skateboards, allowing you to choose from various deck graphics inspired by the cosmos, as well as select the wheel hardness and truck styles that best suit your skating style and preferred celestial bodies.",
//             tags: ["customizable", "options", "cosmos"],
//             category: "Products"
//         },
//         {
//             questionAsHTML: "What advancements have we made in skateboard sustainability?",
//             answerAsHTML: "We've made significant advancements in skateboard sustainability, utilizing eco-friendly materials like bamboo and recycled plastics. Our commitment to green manufacturing processes not only reduces our carbon footprint but also ensures a cleaner universe for future generations.",
//             tags: ["sustainability", "eco-friendly", "advancements"],
//             category: "Products"
//         },
//         {
//             questionAsHTML: "How do our electric skateboards fare in intergalactic travel?",
//             answerAsHTML: "Our electric skateboards are equipped with solar charging capabilities and regenerative braking systems, making them ideal for intergalactic travel. With long-lasting battery life and the ability to harness the power of stars, they ensure you're never stranded, no matter how far from Earth you roam.",
//             tags: ["electric", "intergalactic", "solar"],
//             category: "Products"
//         },
//         {
//             questionAsHTML: "What safety features are integrated into our space-themed helmets?",
//             answerAsHTML: "Our space-themed helmets are equipped with advanced safety features like impact-resistant shells, communication systems for spacewalks, and visors that protect against solar glare. Designed for the modern astronaut-skater, they offer unparalleled protection in any environment.",
//             tags: ["safety", "helmets", "features"],
//             category: "Products"
//         },
//         {
//             questionAsHTML: "How can customers participate in the design of future product lines?",
//             answerAsHTML: "Customers can participate in the design of future product lines through our Galactic Design Lab, where ideas and feedback are collected to inspire new products. By joining our community forums and participating in surveys, you can help shape the future of cosmic skateboarding gear.",
//             tags: ["participation", "design", "future"],
//             category: "Products"
//         },
//         {
//             questionAsHTML: "Why is skateboarding considered a universal language among explorers of the cosmos?",
//             answerAsHTML: "Skateboarding transcends earthly boundaries, embodying freedom, creativity, and the spirit of exploration. Among the stars, it represents a unifying force, a way for beings from different worlds to share experiences, challenges, and the thrill of discovery on any terrain the universe offers.",
//             tags: ["universal", "language", "exploration"],
//             category: "Other"
//         },
//         {
//             questionAsHTML: "How might zero-gravity environments impact skateboarding techniques?",
//             answerAsHTML: "Zero-gravity environments open up new dimensions in skateboarding, where traditional laws of physics don't apply. Tricks evolve into 3D maneuvers, with skaters needing to master control and orientation in a weightless state, leading to an entirely new skateboarding discipline.",
//             tags: ["zero-gravity", "techniques", "physics"],
//             category: "Other"
//         },
//         {
//             questionAsHTML: "What role does skateboarding play in interstellar diplomacy?",
//             answerAsHTML: "Skateboarding, as a shared cultural touchstone, can bridge worlds, serving as a form of interstellar diplomacy. It promotes mutual understanding and respect among diverse galactic civilizations, using the skateboard as a symbol of peace and communal values.",
//             tags: ["diplomacy", "interstellar", "cultural"],
//             category: "Other"
//         },
//         {
//             questionAsHTML: "Can skateboards be used as a sustainable mode of transportation on new planets?",
//             answerAsHTML: "On new planets, skateboards could serve as an eco-friendly transportation method, especially electric or gravity-powered boards designed for various terrains. They offer a low-impact way to explore while reducing the carbon footprint of colonization efforts.",
//             tags: ["sustainable", "transportation", "planets"],
//             category: "Other"
//         },
//         {
//             questionAsHTML: "What scientific principles can we learn from skateboarding?",
//             answerAsHTML: "Skateboarding is a practical demonstration of physics, from Newton's laws of motion to principles of gravity, friction, and kinetic energy. It offers an engaging way to understand these concepts, inspiring a deeper appreciation for the forces that govern our universe.",
//             tags: ["scientific", "principles", "physics"],
//             category: "Other"
//         },
//         {
//             questionAsHTML: "How has skate culture influenced space exploration and vice versa?",
//             answerAsHTML: "Skate culture, with its emphasis on innovation and pushing boundaries, mirrors the spirit of space exploration. Conversely, the vastness of space inspires skateboarders to dream big and challenge limits. This symbiotic relationship fuels progress and creativity in both realms.",
//             tags: ["influence", "culture", "space exploration"],
//             category: "Other"
//         },
//         {
//             questionAsHTML: "In a future where humans colonize other planets, how might skate parks be designed?",
//             answerAsHTML: "Future skate parks on other planets could incorporate local geography and gravity into their designs, creating unparalleled skating experiences. Imagine carving through Martian valleys or flipping in the low gravity of the Moon, blending skateboarding with alien landscapes.",
//             tags: ["colonize", "skate parks", "design"],
//             category: "Other"
//         },
//         {
//             questionAsHTML: "What advancements in skateboard technology could space exploration potentially inspire?",
//             answerAsHTML: "Space exploration could inspire skateboards with materials that withstand extreme conditions, propulsion systems for enhanced movement, and even boards that adapt to different gravitational forces, pushing the limits of what skateboards can achieve.",
//             tags: ["advancements", "technology", "inspiration"],
//             category: "Other"
//         },
//         {
//             questionAsHTML: "Could extraterrestrial materials revolutionize skateboard construction?",
//             answerAsHTML: "Extraterrestrial materials, with unique properties not found on Earth, could revolutionize skateboard construction. Lighter, stronger, and more durable materials could lead to boards that offer new levels of performance and possibilities for skaters.",
//             tags: ["extraterrestrial", "materials", "construction"],
//             category: "Other"
//         },
//         {
//             questionAsHTML: "What are the ethical considerations of skateboarding on historical sites across the galaxy?",
//             answerAsHTML: "Skateboarding on galactic historical sites requires careful consideration of preservation and respect for cultural heritage. Ethical exploration ensures that these sites are enjoyed and respected, balancing the thrill of discovery with the responsibility to protect universal history.",
//             tags: ["ethical", "considerations", "historical sites"],
//             category: "Other"
//         }        
//     ] 

//     try {
//         await FAQModel.insertMany(placeholderData)
//         res.status(200).send('FAQ data uploaded successfully')
//     } catch (error) {
//         console.error('Error uploading FAQ data:', error)
//         res.status(500).send('Error uploading FAQ data')
//     }
// })
  
module.exports = router