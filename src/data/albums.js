
export function getAlbum(albumName) {
    console.log(albumName === 'Food and Drinks')
    switch(albumName) {
        case 'Fashion & Clothes':
            return fashion_and_clothes
        case 'Travel Life':
            return travel_life
        case 'Food and Drinks':
            return food_and_drinks
        default:
            return fashion_and_clothes
    }
}

let travel_life = {
  "account_id": 1067,
  "album_id": 1659474,
  "page": 1,
  "per_page": 60,
  "total": 60,
  "next": true,
  "name": "Travel Life",
  "data": [
    {
      "id": 1,
      "url": "https://images.unsplash.com/photo-1490773996481-9ff25c7d9484?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 2,
      "url": "https://images.unsplash.com/photo-1574008335360-4685d6ec9fe1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 3,
      "url": "https://images.unsplash.com/photo-1574170240473-5733a5b43a3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 4,
      "url": "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 5,
      "url": "https://images.unsplash.com/photo-1574300328682-e5f390039dc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 6,
      "url": "https://images.unsplash.com/photo-1574302710204-f98aa2bac7ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 7,
      "url": "https://images.unsplash.com/photo-1574322401425-9510707bcc34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 8,
      "url": "https://images.unsplash.com/photo-1493799228497-1c99e413459b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 9,
      "url": "https://images.unsplash.com/photo-1554595263-a8f4d5335500?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 10,
      "url": "https://images.unsplash.com/photo-1560920174-92abf3b69a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 11,
      "url": "https://images.unsplash.com/photo-1558682550-4275be645064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 12,
      "url": "https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 13,
      "url": "https://images.unsplash.com/photo-1572151812893-c73c8ca1dacd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 14,
      "url": "https://images.unsplash.com/photo-1572370291272-d61c757a5d6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 15,
      "url": "https://images.unsplash.com/photo-1571993004081-fa706d434118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 16,
      "url": "https://images.unsplash.com/photo-1572023460159-666b508e6580?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 17,
      "url": "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
  ],
  "message": "Successfully returned album photos",
  "status": 200,
  "sortType": "approved_time"
}

let fashion_and_clothes = {
  "account_id": 1067,
  "album_id": 1659473,
  "page": 1,
  "per_page": 60,
  "total": 60,
  "next": true,
  "name": "Fashion & Clothes",
  "data": [
    {
      "id": 1,
      "url": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 2,
      "url": "https://images.unsplash.com/photo-1548549557-dbe9946621da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 3,
      "url": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 4,
      "url": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 5,
      "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 6,
      "url": "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 7,
      "url": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 8,
      "url": "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 9,
      "url": "https://images.unsplash.com/photo-1500643752441-4dc90cda350a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 10,
      "url": "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 11,
      "url": "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 12,
      "url": "https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 13,
      "url": "https://images.unsplash.com/photo-1554141220-83411835a60b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 14,
      "url": "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 15,
      "url": "https://images.unsplash.com/photo-1550402537-6f7b6189b3b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 16,
      "url": "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
    {
      "id": 17,
      "url": "https://images.unsplash.com/photo-1465408953385-7c4627c29435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },
  ],
  "message": "Successfully returned album photos",
  "status": 200,
  "sortType": "approved_time"
}

let food_and_drinks = {}