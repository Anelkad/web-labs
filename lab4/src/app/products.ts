export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: Array<string>;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'BAIMEI Jade Roller & Gua Sha',
    price: 9.99,
    description: 'Face roller --- muscle tension relief, reduce facial puffiness and help your skin look fresh',
    rating: 4.5,
    image: ['https://m.media-amazon.com/images/I/61TDUMWCgVL._SX569_.jpg',
    'https://m.media-amazon.com/images/I/71x-Su5zKgL._SX569_.jpg',
    'https://m.media-amazon.com/images/I/71vbvbK4OhL._SX569_.jpg'],
    url: 'https://www.amazon.com/BAIMEI-Roller-Massager-Treatment-Routine/dp/B08RD6S5HF/ref=sr_1_7?crid=78IHBQ9RWNLN&keywords=skin+care&qid=1647076979&sprefix=skin%2Caps%2C228&sr=8-7'
  },
  {
    id: 2,
    name: 'TruSkin Vitamin C Serum for Face',
    price: 19.99,
    description: 'ANTI AGING FACE SERUM - Vitamin C blends with Botanical Hyaluronic Acid, Vitamin E, Witch Hazel, and Jojoba Oil in an anti aging',
    rating: 4.3,
    image: ['https://m.media-amazon.com/images/I/61nD93IEBKL._SX569_.jpg',
  'https://m.media-amazon.com/images/I/51D-NKk+P-L._SX569_.jpg',
  'https://m.media-amazon.com/images/I/61YLsxEr33L._SX569_.jpg'],
    url: 'https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_8?crid=78IHBQ9RWNLN&keywords=skin+care&qid=1647077334&sprefix=skin%2Caps%2C228&sr=8-8'
  },
  {
    id: 3,
    name: 'The Ordinary Face Serum Set',
    price: 27.20,
    description: 'Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin blemishes and congestion.',
    rating: 4.6,
    image: ['https://m.media-amazon.com/images/I/41VJdzHnxpL.jpg',
  'https://m.media-amazon.com/images/I/3107Ed38zPL.jpg',
  'https://m.media-amazon.com/images/I/31OFTYvlHUL.jpg'],
    url: 'https://www.amazon.com/Ordinary-Caffeine-Hyaluronic-Niacinamide-Blemishes/dp/B07QFHZZZL/ref=sr_1_10?crid=78IHBQ9RWNLN&keywords=skin+care&qid=1647077334&sprefix=skin%2Caps%2C228&sr=8-10'
  },
  {
    id: 4,
    name: 'CeraVe Hydrating Facial Cleanser',
    price: 12.91,
    description: 'Gentle cleansing lotion with hyaluronic acid, ceramides, and glycerin to help hydrate skin without stripping moisture.',
    rating: 4.7,
    image: ['https://m.media-amazon.com/images/I/51DbQev1thL._SX569_.jpg',
  'https://m.media-amazon.com/images/I/61iVuLcmlnL._SX569_.jpg',
  'https://m.media-amazon.com/images/I/71sOVZzsvPL._SX569_.jpg'],
    url: 'https://www.amazon.com/CeraVe-Hydrating-Facial-Cleanser-Fragrance/dp/B01MSSDEPK/ref=sr_1_24?crid=ZIBUQEB7IR4J&keywords=skin+care&qid=1647079333&sprefix=skin+care%2Caps%2C715&sr=8-24'
  },
  {
    id: 5,
    name: 'MANYO FACTORY Galactomy Essence Cream',
    price: 31.50,
    description: 'made of 99.73% natural organic ingredients including the Galactomyces extract and Niacinamide',
    rating: 4.7,
    image: ['https://m.media-amazon.com/images/I/51-6mAFEC0L._SX569_.jpg',
  'https://m.media-amazon.com/images/I/614cAQZXPNL._SX569_.jpg',
  'https://m.media-amazon.com/images/I/61teNr2gccL._SX569_.jpg'],
    url: 'https://www.amazon.com/MANYO-FACTORY-Galactomy-Essence-1-69fl/dp/B08H1KGJ8M/ref=sr_1_2_sspa?crid=3T9K3H5BABRPN&keywords=skin+care+korean&qid=1647079608&sprefix=skin+care+kore%2Caps%2C247&sr=8-2-spons&psc=1&smid=A17R4UWWS0W9YV&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFQMjdBMU9BR1hUMzkmZW5jcnlwdGVkSWQ9QTA5MzMyNTMxUDA4TFlYVUFBQ1AyJmVuY3J5cHRlZEFkSWQ9QTA0NjE4OTJCTzhPVUlPUU5NVFImd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'
  },
  {
    id: 6,
    name: 'Amazon Basics College Ruled Wirebound Spiral Notebook',
    price: 9.74,
    description: 'Wirebound notebook with 70 sheets of paper (56 gsm weight paper stock; 92% brightness); 5-pack of assorted solid colors',
    rating: 4.8,
    image: ['https://m.media-amazon.com/images/I/71V9cv-W9XL._AC_SX569_.jpg',
  'https://m.media-amazon.com/images/I/61S6RODFo8S._AC_SX569_.jpg',
  'https://m.media-amazon.com/images/I/71aSDMsuqES._AC_SX569_.jpg'],
    url: 'https://www.amazon.com/AmazonBasics-Wirebound-Notebook-70-Sheet-Assorted/dp/B07D2R3JSK/ref=sr_1_1_sspa?crid=2AIXX89AC71ML&keywords=notebook&qid=1647079733&sprefix=noteboo%2Caps%2C230&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQ0g5TVNCREtUQUZMJmVuY3J5cHRlZElkPUExMDEyNTk0OVkwMTFSTEJBU01RJmVuY3J5cHRlZEFkSWQ9QTAxMzc2ODgzTUZQUUk3M1lBTTg1JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='
  },
  {
    id: 7,
    name: 'Smart Reusable Notebooks Set',
    price: 21.68,
    description: 'This executive planner calendar has 6 page styles-annual planner,monthly planner,lined pages, dotted grid pages and blank pages.',
    rating: 3.3,
    image: ['https://m.media-amazon.com/images/I/61OpK2KMy+L._AC_SX569_.jpg',
  'https://m.media-amazon.com/images/I/71rKmPxKgfL._AC_SX569_.jpg',
  'https://m.media-amazon.com/images/I/71uzkYFlBRL._AC_SX569_.jpg'],
    url: 'https://www.amazon.com/Reusable-Notebooks-Eco-Friendly-Organizer-Notebook/dp/B09MQM6MGF/ref=sr_1_2_sspa?crid=2AIXX89AC71ML&keywords=notebook&qid=1647081994&sprefix=noteboo%2Caps%2C230&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVDc2MElEWUFJQlZJJmVuY3J5cHRlZElkPUEwMjg3OTM3MzFEQ1o4WFVMRzlUVSZlbmNyeXB0ZWRBZElkPUEwMDU5Njk0Mko4WDlUOEZNUkwwWiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='
  },
  {
    id: 8,
    name: 'Stickers for Kids Teens',
    price: 11.89,
    description: 'Each sticker pack contains 300 different stickers.',
    rating: 4.7,
    image: ['https://m.media-amazon.com/images/I/912J-B04MiL._AC_SX679_.jpg',
  'https://m.media-amazon.com/images/I/81iBc2bGkcL._AC_SX679_.jpg',
  'https://m.media-amazon.com/images/I/81rXJJP5MsS._AC_SX679_.jpg'],
    url: 'https://www.amazon.com/Stickers-Waterproof-Aesthetic-Hydroflask-Skateboard/dp/B091TM8D97/ref=sr_1_1_sspa?crid=1CA1XSMTY3TIE&keywords=stickers&qid=1647082392&sprefix=stickers%2Caps%2C270&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFKVkNDNFYxM0VMQjcmZW5jcnlwdGVkSWQ9QTA5ODc5ODkzSlRJRVlDN1Q5Q1FUJmVuY3J5cHRlZEFkSWQ9QTAzOTY5ODYzTTM4N000UkpBU0QyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='
  },
  {
    id: 9,
    name: 'Just My Style 1500+ Sticker',
    price: 6.99,
    description: '1500 Trendy Stickers: Flip Through The Sparkly Book To Find Thousands Of Sticker',
    rating: 4.7,
    image: ['https://m.media-amazon.com/images/I/91EQs+Vm5YL._AC_SX679_.jpg',
  'https://m.media-amazon.com/images/I/914WrS-eWzL._AC_SX679_.jpg',
  'https://m.media-amazon.com/images/I/91dlTVt87WL._AC_SX679_.jpg'],
    url: 'https://www.amazon.com/Just-My-Style-Positivity-Unicorns/dp/B08GTTT2K1/ref=sr_1_39?crid=1CA1XSMTY3TIE&keywords=stickers&qid=1647082588&sprefix=stickers%2Caps%2C270&sr=8-39&th=1'
  },
  {
    id: 10,
    name: 'Scrapbooking Supplies Kit',
    price: 9.99,
    description: 'The Sunnif scrapbooking supplies pack is popular with art DIY enthusiasts, especially beginners.',
    rating: 4.6,
    image: ['https://m.media-amazon.com/images/I/91aZAEQ9JTL._AC_SX679_.jpg',
  'https://m.media-amazon.com/images/I/91Gti32e3EL._AC_SX679_.jpg',
  'https://m.media-amazon.com/images/I/911OwBUOTZL._AC_SX679_.jpg'],
    url: 'https://www.amazon.com/Supplies-Scrapbooking-Journaling-Beginners-Stickers/dp/B09JZS35C2/ref=sr_1_1_sspa?crid=J2YQ0NXN7OTN&keywords=scrapbooking&qid=1647082913&sprefix=skrabbook%2Caps%2C367&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOTdTNkpMUkdaS1ROJmVuY3J5cHRlZElkPUEwMzkzNjA3MUtLNDNKUEVUWUpWUyZlbmNyeXB0ZWRBZElkPUEwMzg4MzQwMjRZMzlONUdVMjI2TCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/