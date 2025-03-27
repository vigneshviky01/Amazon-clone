const products = [
      {
          "id": 1,
          "name": "Toy Car",
          "price": 350,
          "category": "Toys & Games",
          "quantity": 50,
          "image": "https://media.istockphoto.com/id/1043157552/photo/cute-little-boy-playing-with-wooden-train.webp?a=1&b=1&s=612x612&w=0&k=20&c=HPI9sWMZwk8Oepfb9EJDDr7r77Lkol3yskjh-E7uBos=",
          "specs": {
              "brand": "ToyWorld",
              "model": "TW-100",
              "material": "Non-toxic plastic",
              "ageGroup": "3-10 years",
              "dimensions": "10 x 15 x 5 inches",
              "weight": "1.2 lbs",
              "warranty": "1 year manufacturer warranty"
          },
          "description": [
              "Designed for endless hours of creative play and imagination",
              "Made with high-quality, durable materials that will last",
              "Helps develop fine motor skills and hand-eye coordination",
              "Encourages social interaction and cooperative play",
              "Easy to clean and store when not in use",
              "Complies with all safety standards and regulations",
              "Perfect gift for birthdays and special occasions"
          ]
      },
      {
          "id": 2,
          "name": "Board Game",
          "price": 899,
          "category": "Toys & Games",
          "quantity": 30,
          "image": "https://media.istockphoto.com/id/1289144939/photo/happy-family-having-fun-playing-board-game-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=I93ynNrnaJuVCvaNTdpEWvBiUoV76DU4e_uvrmQhgCo=",
          "specs": {
              "brand": "GameMaster",
              "model": "GM-200",
              "material": "Cardboard and plastic",
              "ageGroup": "6+ years",
              "players": "2-6 players",
              "playTime": "30-60 minutes",
              "dimensions": "10 x 10 x 2 inches"
          },
          "description": [
              "Family-friendly game that brings everyone together",
              "Easy to learn but challenging to master",
              "Develops strategic thinking and planning skills",
              "Includes comprehensive rulebook with game variations",
              "High-quality game pieces and durable game board",
              "Perfect for game nights and family gatherings",
              "Award-winning design with engaging gameplay mechanics"
          ]
      },
      {
          "id": 3,
          "name": "Doll Set",
          "price": 1000,
          "category": "Toys & Games",
          "quantity": 40,
          "image": "https://images.unsplash.com/photo-1644330155911-9a4ef563f39a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9sbCUyMHNldHxlbnwwfHwwfHx8MA%3D%3D",
          "specs": {
              "brand": "DollCraft",
              "model": "DC-300",
              "material": "Soft fabric and non-toxic plastic",
              "ageGroup": "3+ years",
              "height": "12 inches",
              "accessories": "Includes clothing and accessories",
              "washable": "Machine washable fabric parts"
          },
          "description": [
              "Beautifully crafted dolls with detailed features",
              "Soft-bodied design is perfect for cuddling",
              "Includes multiple outfits for dress-up play",
              "Encourages imaginative storytelling and role play",
              "Hair can be styled in different ways",
              "Develops empathy and social skills through pretend play",
              "Collectible set with unique characters"
          ]
      },
      {
          "id": 4,
          "name": "Lipstick",
          "price": 599,
          "category": "Beauty",
          "quantity": 75,
          "image": "https://media.istockphoto.com/id/477663679/photo/every-woman-has-a-favourite-shade.webp?a=1&b=1&s=612x612&w=0&k=20&c=akdbiW-7mwwuyejJpX4FcGnyb6hdON2bgehTJTQ4Exs=",
          "specs": {
              "brand": "GlamBeauty",
              "model": "GB-400",
              "skinType": "All skin types",
              "volume": "4g",
              "ingredients": "Natural extracts and vitamins",
              "finish": "Matte",
              "expiryPeriod": "24 months after opening"
          },
          "description": [
              "Long-lasting formula that stays vibrant all day",
              "Creamy texture glides on smoothly for even application",
              "Enriched with moisturizing ingredients to prevent drying",
              "Dermatologically tested and suitable for sensitive lips",
              "Cruelty-free and not tested on animals",
              "Available in a range of stunning, highly-pigmented shades",
              "Elegant packaging makes it perfect for gifting"
          ]
      },
      {
          "id": 5,
          "name": "Face Cream",
          "price": 430,
          "category": "Beauty",
          "quantity": 60,
          "image": "https://plus.unsplash.com/premium_photo-1679046948896-5f9aa56900e9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "specs": {
              "brand": "PureSkin",
              "model": "PS-500",
              "skinType": "All skin types",
              "volume": "50ml",
              "ingredients": "Hyaluronic acid, vitamin E, aloe vera",
              "application": "Morning and evening",
              "expiryPeriod": "12 months after opening"
          },
          "description": [
              "Deeply hydrating formula that nourishes skin all day",
              "Lightweight texture absorbs quickly without greasy residue",
              "Reduces fine lines and improves skin elasticity",
              "Protects against environmental damage with antioxidants",
              "Fragrance-free formula suitable for sensitive skin",
              "Dermatologically tested and hypoallergenic",
              "Sustainable packaging made from recycled materials"
          ]
      },
      {
          "id": 6,
          "name": "Perfume",
          "price": 3500,
          "category": "Beauty",
          "quantity": 45,
          "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
          "specs": {
              "brand": "Essence",
              "model": "ES-600",
              "fragrance": "Floral and fruity notes",
              "volume": "50ml",
              "concentration": "Eau de Parfum",
              "longevity": "8-10 hours",
              "topNotes": "Bergamot, peach, and raspberry"
          },
          "description": [
              "Captivating fragrance that evolves beautifully throughout the day",
              "Long-lasting formula ensures your scent remains noticeable",
              "Elegant bottle design adds sophistication to your vanity",
              "Perfect balance of floral and fruity notes for everyday wear",
              "Suitable for both daytime and evening occasions",
              "Made with premium ingredients for a luxurious experience",
              "Makes an excellent gift for special occasions"
          ]
      },
      {
          "id": 7,
          "name": "Men's T-Shirt",
          "price": 1200,
          "category": "Amazon Fashion",
          "quantity": 100,
          "image": "https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnMlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
          "specs": {
              "brand": "FashionTrend",
              "model": "FT-700",
              "material": "100% Cotton",
              "fit": "Regular fit",
              "careInstructions": "Machine wash cold",
              "neckline": "Crew neck",
              "sleeve": "Short sleeve"
          },
          "description": [
              "Premium quality cotton dress for exceptional comfort all day",
              "Pre-shrunk fabric ensures the perfect fit wash after wash",
              "Reinforced stitching at seams for enhanced durability",
              "Versatile design suitable for casual and semi-formal occasions",
              "Breathable material keeps you cool in warm weather",
              "Easy care instructions for hassle-free maintenance"
          ]
      },
      {
          "id": 8,
          "name": "Women's Dress",
          "price": 1400,
          "category": "Amazon Fashion",
          "quantity": 65,
          "image": "https://plus.unsplash.com/premium_photo-1682965453798-8de79207c1d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVucyUyMGRyZXNzfGVufDB8fDB8fHww",
          "specs": {
              "brand": "ElegantWear",
              "model": "EW-800",
              "material": "95% Cotton, 5% Elastane",
              "fit": "A-line silhouette",
              "length": "Knee length",
              "closure": "Back zipper",
              "careInstructions": "Machine wash cold, gentle cycle"
          },
          "description": [
              "Flattering A-line silhouette suits various body types",
              "Soft, stretchy fabric ensures comfort throughout the day",
              "Versatile design transitions easily from day to evening wear",
              "Thoughtful details and expert stitching for a polished look",
              "Breathable cotton blend keeps you comfortable in any season",
              "Hidden pockets add practical functionality",
              "Easy care instructions for long-lasting wear"
          ]
      },
      {
          "id": 9,
          "name": "Sneakers",
          "price": 950,
          "category": "Amazon Fashion",
          "quantity": 80,
          "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
          "specs": {
              "brand": "UrbanStep",
              "model": "US-900",
              "material": "Synthetic leather and mesh",
              "sole": "Rubber outsole",
              "closure": "Lace-up",
              "cushioning": "Memory foam insole",
              "arch": "Medium arch support"
          },
          "description": [
              "Lightweight design reduces fatigue during extended wear",
              "Memory foam insole provides exceptional comfort with every step",
              "Breathable mesh upper keeps feet cool and dry",
              "Durable rubber outsole offers excellent traction on various surfaces",
              "Stylish design complements both athletic and casual outfits",
              "Reinforced heel counter for added stability and support"
          ]
      }
  ]

   
  
  
export default products