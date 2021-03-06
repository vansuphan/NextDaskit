// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = {
    "status": 1,
    "msg": [
        "Success"
    ],
    "data": {
        "total": 100,
        "page": 1,
        "limit": 7,
        "list": [
            {
                "id": 1,
                "name": "  Ab Hadley",
                "image": "images/profiles/avatar-1.jpg",
                "active": true,
                "email": "em@ail.com",
                "role": {
                    "id": 1,
                    "permissions": []
                }
            },
            {
                "id": 2,
                "name": "  Miyah Myles",
                "image": "images/profiles/avatar-2.jpg",
                "active": true,
                "email": "em@ail.com",
                "role": {
                    "id": 1,
                    "permissions": []
                }
            },
            {
                "id": 3,
                "name": "  Ab Hadley",
                "image": "images/profiles/avatar-3.jpg",
                "active": true,
                "email": "em@ail.com",
                "role": {
                    "id": 1,
                    "permissions": []
                }
            },
            {
                "id": 4,
                "name": "  Ab Hadley",
                "image": "images/profiles/avatar-4.jpg",
                "active": true,
                "email": "em@ail.com",
                "role": {
                    "id": 1,
                    "permissions": []
                }
            },
            {
                "id": 5,
                "name": "  Ab Hadley",
                "image": "images/profiles/avatar-5.jpg",
                "active": false,
                "email": "em@ail.com",
                "role": {
                    "id": 2,
                    "permissions": []
                }
            },
            {
                "id": 6,
                "name": "  Ab Hadley",
                "image": "images/profiles/avatar-6.jpg",
                "active": true,
                "email": "em@ail.com",
                "role": {
                    "id": 1,
                    "permissions": []
                }
            },
            {
                "id": 7,
                "name": "  Ab Hadley",
                "image": "images/profiles/avatar-7.jpg",
                "active": false,
                "email": "em@ail.com",
                "role": {
                    "id": 3,
                    "permissions": []
                }
            }
        ]
    }
}

export default async (req, res) => {
    res.statusCode = 200;
    res.json(data);
  };
  
