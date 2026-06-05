export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  imageUrl: string;
  description: string;
  rating: number;
  reviews: number;
}

export const productsDB: Product[] = [
  // Fruits
  { id: '1', name: 'Fresh Organic Bananas', price: 2.99, category: 'Fruits', imageUrl: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=1200&q=80', description: 'Sweet, organic bananas sourced from local farms. Perfect for a quick snack or your morning smoothie.', rating: 4.8, reviews: 124 },
  { id: '3', name: 'Crispy Red Apples', price: 3.99, category: 'Fruits', imageUrl: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=1200&q=80', description: 'Crisp, sweet, and juicy red apples. Perfect for snacking or baking.', rating: 4.7, reviews: 89 },
  { id: '8', name: 'Juicy Oranges', price: 4.99, category: 'Fruits', imageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=1200&q=80', description: 'Sweet and tangy Florida oranges. Packed with Vitamin C.', rating: 4.8, reviews: 118 },
  { id: '9', name: 'Organic Blueberries', price: 5.99, category: 'Fruits', imageUrl: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=1200&q=80', description: 'Plump, sweet organic blueberries. Great for breakfast or baking.', rating: 4.9, reviews: 310 },
  { id: '13', name: 'Fresh Strawberries', price: 4.49, category: 'Fruits', imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=1200&q=80', description: 'Bright red, sweet strawberries. Perfect for desserts or snacking.', rating: 4.8, reviews: 201 },
  { id: '14', name: 'Tropical Mango', price: 2.49, category: 'Fruits', imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=1200&q=80', description: 'Sweet and juicy tropical mangoes.', rating: 4.7, reviews: 156 },
  
  // Vegetables
  { id: '4', name: 'Organic Spinach', price: 2.49, category: 'Vegetables', imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=1200&q=80', description: 'Fresh, vibrant organic spinach leaves. Washed and ready to eat.', rating: 4.6, reviews: 210 },
  { id: '6', name: 'Fresh Avocado', price: 1.99, category: 'Vegetables', imageUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=1200&q=80', description: 'Creamy Hass avocados. Perfectly ripe and ready for guacamole or toast.', rating: 4.8, reviews: 156 },
  { id: '15', name: 'Organic Carrots', price: 1.49, category: 'Vegetables', imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=1200&q=80', description: 'Crunchy, sweet organic carrots. Great for snacking or cooking.', rating: 4.7, reviews: 134 },
  { id: '16', name: 'Fresh Broccoli', price: 2.99, category: 'Vegetables', imageUrl: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200&q=80', description: 'Crisp green broccoli crowns. Nutrient-rich and delicious.', rating: 4.6, reviews: 189 },
  { id: '17', name: 'Mixed Bell Peppers', price: 3.99, category: 'Vegetables', imageUrl: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=1200&q=80', description: 'Colorful mix of sweet bell peppers. Perfect for salads or stir-fry.', rating: 4.8, reviews: 112 },
  
  // Dairy
  { id: '2', name: 'Farm Fresh Eggs (12-pack)', price: 4.49, originalPrice: 5.99, discount: 25, category: 'Dairy', imageUrl: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=1200&q=80', description: 'Free-range, organic eggs from pasture-raised hens. Rich yolks and firm whites.', rating: 4.9, reviews: 342 },
  { id: '7', name: 'Premium Milk 1L', price: 2.19, category: 'Dairy', imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1200&q=80', description: 'Fresh, whole milk from grass-fed cows. No artificial hormones.', rating: 4.7, reviews: 204 },
  { id: '18', name: 'Greek Yogurt 500g', price: 4.99, category: 'Dairy', imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200&q=80', description: 'Thick and creamy plain Greek yogurt. High in protein.', rating: 4.9, reviews: 278 },
  { id: '19', name: 'Aged Cheddar Cheese', price: 6.49, originalPrice: 7.99, discount: 15, category: 'Dairy', imageUrl: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=1200&q=80', description: 'Sharp, aged cheddar cheese block. Perfect for slicing or grating.', rating: 4.8, reviews: 198 },
  { id: '20', name: 'Unsalted Butter', price: 3.99, category: 'Dairy', imageUrl: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=1200&q=80', description: 'Premium unsalted butter made from fresh cream.', rating: 4.7, reviews: 145 },

  // Bakery
  { id: '5', name: 'Whole Grain Bread', price: 3.49, originalPrice: 4.99, discount: 30, category: 'Bakery', imageUrl: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=1200&q=80', description: 'Freshly baked whole grain bread. High in fiber and nutrients.', rating: 4.9, reviews: 415 },
  { id: '12', name: 'Artisan Sourdough', price: 4.99, category: 'Bakery', imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80', description: 'Crusty, chewy sourdough loaf baked fresh daily.', rating: 4.9, reviews: 120 },
  { id: '21', name: 'Chocolate Croissant', price: 2.99, category: 'Bakery', imageUrl: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=1200&q=80', description: 'Flaky, buttery croissant filled with rich dark chocolate.', rating: 4.9, reviews: 334 },
  { id: '22', name: 'Everything Bagels (6-pack)', price: 5.49, category: 'Bakery', imageUrl: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=1200&q=80', description: 'Classic NY-style bagels topped with everything seasoning.', rating: 4.8, reviews: 211 },

  // Pantry
  { id: '10', name: 'Organic Honey 500g', price: 6.99, originalPrice: 9.99, discount: 30, category: 'Pantry', imageUrl: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=1200&q=80', description: 'Pure, raw organic honey sourced from local beekeepers.', rating: 4.9, reviews: 250 },
  { id: '23', name: 'Extra Virgin Olive Oil', price: 14.99, originalPrice: 19.99, discount: 25, category: 'Pantry', imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&q=80', description: 'Cold-pressed extra virgin olive oil from Italy. Perfect for cooking and salads.', rating: 4.9, reviews: 442 },
  { id: '24', name: 'Organic Basmati Rice 2kg', price: 8.99, category: 'Pantry', imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&q=80', description: 'Aromatic, long-grain organic basmati rice.', rating: 4.8, reviews: 189 },
  { id: '25', name: 'Marinara Pasta Sauce', price: 4.49, category: 'Pantry', imageUrl: 'https://images.unsplash.com/photo-1606859191214-25806e8e2423?w=1200&q=80', description: 'Authentic Italian marinara sauce made with vine-ripened tomatoes.', rating: 4.7, reviews: 205 },

  // Seafood
  { id: '11', name: 'Fresh Salmon Fillet', price: 12.99, originalPrice: 18.99, discount: 31, category: 'Seafood', imageUrl: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=1200&q=80', description: 'Premium wild-caught salmon fillet. Rich in Omega-3.', rating: 4.8, reviews: 185 },
  { id: '26', name: 'Jumbo Shrimp', price: 15.99, category: 'Seafood', imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=1200&q=80', description: 'Fresh, peeled and deveined jumbo shrimp. Ready to cook.', rating: 4.7, reviews: 156 },
  { id: '27', name: 'Fresh Tuna Steak', price: 14.49, originalPrice: 17.99, discount: 20, category: 'Seafood', imageUrl: 'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?w=1200&q=80', description: 'Sushi-grade yellowfin tuna steaks. Perfect for searing.', rating: 4.9, reviews: 221 },
  { id: '28', name: 'Sea Scallops', price: 18.99, category: 'Seafood', imageUrl: 'https://images.unsplash.com/photo-1559742811-822873691df8?w=1200&q=80', description: 'Sweet, tender, wild-caught sea scallops.', rating: 4.8, reviews: 134 },
];

export function getAllProducts(): Product[] {
  return productsDB;
}

export function getProductById(id: string): Product | undefined {
  return productsDB.find(p => p.id === id);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return productsDB.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All' || !category) return productsDB;
  return productsDB.filter(p => p.category === category);
}
