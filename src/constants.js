import { v4 as uuidv4 } from "uuid";
export const ProductImages = [
  {
    id: uuidv4(),
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733652927/table_qzbhvx.png",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733652927/table_qzbhvx.png",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733652927/table_qzbhvx.png",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733652927/table_qzbhvx.png",
  },
];

export const productItemInfo = {
  id: uuidv4(),
  name: "Cheese – appareil à raclette 1/2 roue",
  price: "39,50",
  currency: "€",
  pricePerPiece: "0,35",
  ref: " VABGN5",
  dimensions: { width: "20", diameter: "50", units: "cm" },
  productImages: [
    "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
  ],
  description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
  imageUrl:
    "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
  specifications: [
    "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
    "Réglable en hauteur",
    "Appareil à raclette professionnel",
    "Boîtier de chauffe horizontal réglable en hauteur",
  ],
};
const sm = "w-6/12";
const lg = "w-3/12";
export const productList = [
  {
    id: uuidv4(),
    name: "Title 1",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Art de la table",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 2",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Art de la table",
    availableStock: 15,
  },
  {
    id: uuidv4(),
    name: "Title 3",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Art de la table",
    availableStock: 12,
  },
  {
    id: uuidv4(),
    name: "Title 4",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Art de la table",
    availableStock: 5,
  },
  {
    id: uuidv4(),
    name: "Title 5",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Art de la table",
    availableStock: 20,
  },

  {
    id: uuidv4(),
    name: "Title 6",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Art de la table",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Art de la table",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Mobilier",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Mobilier",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Mobilier",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Mobilier",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Mobilier",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Mobilier",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Mobilier",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Nappage",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Nappage",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Nappage",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Nappage",
    availableStock: 20,
  },
  {
    id: uuidv4(),
    name: "Title 7",
    price: "39,50",
    currency: "€",
    pricePerPiece: "0,35",
    ref: " VABGN5",
    dimensions: { width: "20", diameter: "50", units: "cm" },
    productImages: [
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png",
    ],
    description: `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".`,
    imageUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679275/main-product-image_lwk5fs.png",
    specifications: [
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
      "Réglable en hauteur",
      "Appareil à raclette professionnel",
      "Boîtier de chauffe horizontal réglable en hauteur",
    ],
    category: "Nappage",
    availableStock: 20,
  },
];
export const socialMediaIcons = [
  {
    id: uuidv4(),
    socialMedia: "twitter",
    iconUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733677612/twitter_h0wbzd.png",
  },
  {
    id: uuidv4(),
    socialMedia: "instagram",
    iconUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733677612/instagram_nxyjqc.png",
  },
  {
    id: uuidv4(),
    socialMedia: "linkedin",
    iconUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733677612/linkedIn_nvnu2t.png",
  },
];

export const services = [
  {
    id: uuidv4(),
    title: "Livraison & Reprise",
    description: "Selon vos besoins",
    iconUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733681222/service1_vidhkx.png",
  },
  {
    id: uuidv4(),
    title: "Nettoyage",
    description: "Selon vos besoins",
    iconUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733681222/service2_kb6tu0.png",
  },

  {
    id: uuidv4(),
    title: "Commande Illimitée",
    description: "Tout est possible",
    iconUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733681222/service3_1_idbvqc.png",
  },
  {
    id: uuidv4(),
    title: "Transport & Enlèvement",
    description: "On s’occupe de tout.",
    iconUrl:
      "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733681222/service4_ngm0x1.png",
  },
];

export const productCategories = [
  {
    id: uuidv4(),
    category: "Art de la table",
  },
  {
    id: uuidv4(),
    category: "Mobilier",
  },
  {
    id: uuidv4(),
    category: "Nappage",
  },
  {
    id: uuidv4(),
    category: "Matériel de salle",
  },
  {
    id: uuidv4(),
    category: "Cuisine",
  },
  {
    id: uuidv4(),
    category: "Barbecue",
  },
  {
    id: uuidv4(),
    category: "Tente",
  },
  {
    id: uuidv4(),
    category: "Chauffage",
  },
  {
    id: uuidv4(),
    category: "Podium - Piste de danse",
  },
  {
    id: uuidv4(),
    category: "Son et lumière",
  },
  {
    id: uuidv4(),
    category: "Packs",
  },
  {
    id: uuidv4(),
    category: "Consommables",
  },
];
