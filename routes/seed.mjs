import express from 'express'
const router = express.Router()

router.get("/seed", async (req, res) => {
    try {

    await plants.deleteMany({}) 
    await plants.insertMany(
        [
            {
            "_id": "65b6d52a6977c3aad40d4dbc",
            "common_name": "Japanese Maple",
            "cycle": "Perennial",
            "watering": "Frequent",
            "sunlight": [
            "full sun",
            "part shade"
            ]
            },
            {
            "_id": "65b6d5536977c3aad40da462",
            "common_name": "European Silver Fir",
            "cycle": "Perennial",
            "watering": "Frequent",
            "sunlight": [
            "full sun"
            ]
            },
            {
            "_id": "65b6d56b6977c3aad40ddb30",
            "common_name": "Pyramidalis Silver Fir",
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
            "full sun"
            ]
            },
            {
            "_id": "65b6d5956977c3aad40e2d40",
            "common_name": "White Fir",
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
            "Full sun",
            "part shade"
            ]
            },
            {
            "_id": "65b6d5c66977c3aad40e91ec",
            "common_name": "Candicans White Fir",
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
            "full sun"
            ]
            },
            {
            "_id": "65b6d5dc6977c3aad40ebf5c",
            "common_name": "Fraser Fir",
            "cycle": "Perennial",
            "watering": "Frequent",
            "sunlight": [
            "full sun",
            "part shade",
            "filtered shade"
            ]
            },
            {
            "_id": "65b6d5ee6977c3aad40ee3ee",
            "common_name": "Golden Korean Fir",
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
            "Full sun",
            "part shade"
            ]
            },
            {
            "_id": "65b6d6006977c3aad40f0941",
            "common_name": "Alpine Fir",
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
            "full sun",
            "part shade"
            ]
            },
            {
            "_id": "65b6d6156977c3aad40f3425",
            "common_name": "Blue Spanish Fir",
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
            "Full sun",
            "part shade"
            ]
            },
            {
            "_id": "65b6d6296977c3aad40f5e92",
            "common_name": "Noble Fir",
            "cycle": "Perennial",
            "watering": "Average",
            "sunlight": [
            "full sun"
            ]
            },
            {
            "_id": "65b713b9fb1b396f2b6de2d2",
            "common_name": "Daisy",
            "cycle": "Annual",
            "watering": "Frequent",
            "sunlight": [
            "full sun",
            "part shade"
            ]
            },
            {
            "_id": "65b71c090e39ae2b2c680044",
            "common_name": "Cosmos",
            "cycle": "Annual",
            "watering": "Frequent",
            "sunlight": [
            "full sun"
            ]
            },
            {
            "_id": "65b71c3c0e39ae2b2c680045",
            "common_name": "Zinia",
            "cycle": "Annual",
            "watering": "Frequent",
            "sunlight": [
            "full sun"
            ]
            },
            {
            "_id": "65b71c730e39ae2b2c680046",
            "common_name": "Begonia",
            "cycle": "Annual",
            "watering": "Frequent",
            "sunlight": [
            "part shade"
            ]
            },
            {
            "_id": "65b71d290e39ae2b2c680048",
            "common_name": "Lavender",
            "cycle": "Perennial",
            "watering": "Minimum",
            "sunlight": [
            "Full sun"
            ]
            }
        ])


    await users.deleteMany({}) 
    await users.insertMany(
        [
            {
            "_id": "65b6d67b6977c3aad41006c3",
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth"
            },
            {
            "_id": "65b6d6936977c3aad4103857",
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos"
            },
            {
            "_id": "65b6d6ae6977c3aad4106f56",
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris"
            },
            {
            "_id": "65b6d6c26977c3aad4109bc3",
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt"
            },
            {
            "_id": "65b6d6d96977c3aad410cc70",
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong"
            },
            {
            "_id": "65b6d6eb6977c3aad410efd9",
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver"
            },
            {
            "_id": "65b719336977c3aad4a1c2c7",
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson"
            },
            {
            "_id": "65b71a216977c3aad4a3aab3",
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell"
            },
            {
            "_id": "65b71a3d6977c3aad4a3e62f",
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards"
            },
            {
            "_id": "65b71a4c6977c3aad4a40432",
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields"
            },
            {
            "_id": "65b71a586977c3aad4a41bc1",
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke"
            },
            {
            "_id": "65b71a656977c3aad4a438a0",
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson"
            }
            ]
    )

    await purchases.deleteMany({}) 
    await purchases.insertMany(
        [
            {
            "_id": "65b726f6a1f39f612683b7a0",
            "items": [
            {
            "Alpine Fir": 1
            }
            ],
            "email": "charles.morris@reqres.in"
            },
            {
            "_id": "65b7271aa1f39f612683b7a1",
            "items": [
            {
            "Pyramidalis Silver Fir": 2
            }
            ],
            "email": "rachel.howell@reqres.in"
            },
            {
            "_id": "65b72748a1f39f612683b7a2",
            "email": "emma.wong@reqres.in",
            "items": [
            {
            "European Silver Fir": 1
            },
            {
            "Pyramidalis Silver Fir": 1
            }
            ]
            },
            {
            "_id": "65b72769a1f39f612683b7a3",
            "email": "tracey.ramos@reqres.in",
            "items": [
            {
            "European Silver Fir": 1
            },
            {
            "Pyramidalis Silver Fir": 1
            },
            {
            "White Fir": 1
            }
            ]
            },
            {
            "_id": "65b72784a1f39f612683b7a4",
            "email": "lindsay.ferguson@reqres.in",
            "items": [
            {
            "Fraser Fir": 3
            }
            ]
            },
            {
            "_id": "65b727a4a1f39f612683b7a5",
            "email": "george.edwards@reqres.in",
            "items": [
            {
            "Fraser Fir": 1
            }
            ]
            },
            {
            "_id": "65b7280da1f39f612683b7a6",
            "items": [
            {
            "Pyramidalis Silver Fir": 2
            }
            ],
            "email": "byron.fields@reqres.in"
            },
            {
            "_id": "65b7288fa1f39f612683b7a7",
            "email": "test@mail.com",
            "items": [
            {
            "Lavender": 2
            },
            {
            "Daisy": 5
            },
            {
            "Cosmos": 2
            },
            {
            "Begonia": 6
            }
            ]
            },
            {
            "_id": "65b729da166a37c949ac284d",
            "email": "george.bluth@reqres.in",
            "items": [
            {
            "Lavender": 5
            },
            {
            "Zinia": 5
            }
            ]
            },
            {
            "_id": "65b72a52166a37c949ac284f",
            "email": "tobias.funke@reqres.in",
            "items": [
            {
            "Begonia": 5
            },
            {
            "Cosmos": 5
            }
            ]
            },
            {
            "_id": "65b72a76166a37c949ac2850",
            "email": "janet.weaver@reqres.in",
            "items": [
            {
            "Daisy": 10
            }
            ]
            }
            ]  
    )

    res.send("Success");
    
    } catch (err) {
        res.status(500).send("Something went wrong.")
    }
})

export default router;