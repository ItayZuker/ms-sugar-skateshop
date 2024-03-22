require('dotenv').config()

const express = require('express')
const router = express.Router()

const FAQModel = require('../models/faq.model.js')

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

router.post('/upload-placeholder-faq', async (req, res) => {
    const placeholderData = [
        {
            question: "How do I choose the right skateboard for interstellar travel?",
            answer: "For traversing the galaxy, select a board that suits your planetary exploration style. A longboard is perfect for cruising through the Milky Way, while a trick deck is ideal for flipping through asteroid fields.",
            tags: ["skateboard", "interstellar", "travel"],
            category: "Space Exploration"
        },
        {
            question: "What is love in terms of skateboarding?",
            answer: "Love, in skateboarding, is the passion and dedication skaters have for the sport. It's the drive that gets you up after a fall, the bond with the board that feels like an extension of yourself, and the community that shares this cosmic journey.",
            tags: ["love", "skateboarding", "passion"],
            category: "Philosophy"
        },
        {
            question: "Can skateboarding in zero gravity be achieved?",
            answer: "Skateboarding in zero gravity presents unique challenges and opportunities. Techniques would involve magnetic boards and special gear to keep you attached to the board while performing tricks that defy Earth's gravitational limits.",
            tags: ["zero gravity", "skateboarding", "space"],
            category: "Advanced Techniques"
        },
        {
            question: "What are the best skate spots in the universe?",
            answer: "The universe is vast and full of undiscovered skate spots. On Earth, legendary locations like the Venice Beach Skatepark or Barcelona's MACBA are just the beginning. Imagine grinding the rings of Saturn or catching air on the Moon!",
            tags: ["skate spots", "universe", "travel"],
            category: "Space Exploration"
        },
        {
            question: "What are the different types of skateboards for cosmic cruising?",
            answer: "Cosmic cruisers come in various forms: shortboards for quick maneuvers through meteor showers, longboards for smooth rides over cosmic dust, and electric skateboards for light-speed dashes across planetary surfaces.",
            tags: ["skateboards", "cosmic", "cruising"],
            category: "Gear Selection"
        },
        {
            question: "How do I perform a kickflip in low Earth orbit?",
            answer: "Performing a kickflip in low Earth orbit requires adjusting for reduced gravity. A gentler flick and more body control are essential, as you'll have more air time to rotate the board beneath your feet.",
            tags: ["kickflip", "low Earth orbit", "tricks"],
            category: "Advanced Techniques"
        },
        {
            question: "What safety gear do I need for asteroid grinding?",
            answer: "When grinding asteroids, standard skate safety gear won't suffice. You'll need a spacesuit equipped with impact-resistant armor, a helmet with an oxygen supply, and magnetic boots to stay attached to your board.",
            tags: ["safety gear", "asteroid", "grinding"],
            category: "Safety"
        },
        {
            question: "How do I maintain my skateboard in a space environment?",
            answer: "Space environments require special maintenance. Use lubricants that can withstand extreme temperatures and vacuum conditions for your bearings, and ensure your deck and wheels are made of materials resistant to cosmic radiation.",
            tags: ["maintenance", "space environment", "skateboard"],
            category: "Maintenance"
        },
        {
            question: "What is the best way to learn skateboarding tricks on a lunar surface?",
            answer: "Learning tricks on the Moon involves taking advantage of the lower gravity. Start with basic maneuvers and gradually progress to more complex tricks, using the Moon's one-sixth Earth gravity to extend your air time and perfect your form.",
            tags: ["lunar surface", "skateboarding tricks", "learning"],
            category: "Advanced Techniques"
        },
        {
            question: "What does it mean to 'shred the gnar' in the context of the universe?",
            answer: "To 'shred the gnar' in the universe means to embrace the adventure and challenge of skateboarding across the cosmos, from navigating the asteroid belt to carving the surface of Mars, always pushing the boundaries of what's possible.",
            tags: ["shred the gnar", "universe", "adventure"],
            category: "Philosophy"
        }
    ]

    try {
        await FAQModel.insertMany(placeholderData)
        res.status(200).send('FAQ data uploaded successfully')
    } catch (error) {
        console.error('Error uploading FAQ data:', error)
        res.status(500).send('Error uploading FAQ data')
    }
})
  
module.exports = router